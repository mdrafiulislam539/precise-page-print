import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Page } from "@/components/Layout";
import { getProduct, price, taka } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { deliveryCharge, districts } from "@/lib/shipping";

export const Route = createFileRoute("/checkout")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "অর্ডারের তথ্য — লগইন ছাড়াই অর্ডার করুন | তনরা আউটফিটস" },
      { name: "description", content: "নাম, মোবাইল নম্বর ও ঠিকানা দিয়ে লগইন ছাড়াই অর্ডার করুন। ক্যাশ অন ডেলিভারি ও বিকাশ/নগদ পেমেন্ট।" },
      { property: "og:title", content: "অর্ডারের তথ্য — তনরা আউটফিটস" },
      { property: "og:description", content: "এক পেজেই সহজ অর্ডার, কোনো লগইন বা ওটিপি নেই।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

type Pay = "cod" | "bkash" | "nagad";

function Checkout() {
  const cart = useCart();
  const [district, setDistrict] = useState("");
  const [pay, setPay] = useState<Pay>("cod");
  const [done, setDone] = useState<string | null>(null);
  const [err, setErr] = useState("");
  const shipping = deliveryCharge(district);
  const total = cart.subtotal + shipping;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const phone = String(f.get("phone") || "").trim();
    if (!/^01[3-9]\d{8}$/.test(phone)) return setErr("সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)");
    if ((pay !== "cod") && !String(f.get("trx") || "").trim()) return setErr("ট্রানজেকশন আইডি দিন");
    // WooCommerce-compatible order payload (POST /wc/v3/orders shape)
    const order = {
      payment_method: pay,
      billing: { first_name: f.get("name"), phone, state: district, city: f.get("thana"), address_1: f.get("address") },
      line_items: cart.items.map((i) => ({ slug: i.slug, quantity: i.qty, meta_data: [{ key: "size", value: i.size }] })),
      shipping_lines: [{ method_id: "flat_rate", total: String(shipping) }],
      transaction_id: f.get("trx") || "",
      total,
    };
    const id = "TR" + Date.now().toString().slice(-6);
    const all = JSON.parse(localStorage.getItem("tonra_orders") || "[]");
    localStorage.setItem("tonra_orders", JSON.stringify([...all, { id, ...order }]));
    cart.clear();
    setDone(id);
  };

  if (done) return (
    <Page>
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-3xl text-rose-gradient">আপনার অর্ডারের তথ্য সংরক্ষিত হয়েছে</h1>
        <p className="mt-4 text-muted-foreground">অর্ডার নম্বর: <span className="text-primary">{done}</span>। তথ্য শুধু এই ব্রাউজারে সংরক্ষিত আছে; আমাদের কাছে পাঠানো হয়নি। অর্ডার নিশ্চিত করতে যোগাযোগ পেজ থেকে ফোন বা হোয়াটসঅ্যাপে আমাদের জানান।</p>
        <Link to="/shop" search={{}} className="btn-rose mt-8 inline-block">আরও কেনাকাটা করুন</Link>
      </div>
    </Page>
  );

  if (!cart.items.length) return (
    <Page>
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="text-3xl">আপনার ব্যাগ খালি</h1>
        <Link to="/shop" search={{}} className="btn-rose mt-8 inline-block">শপে যান</Link>
      </div>
    </Page>
  );

  return (
    <Page>
      <form onSubmit={submit} className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4">
          <h1 className="text-3xl">অর্ডারের তথ্য</h1>
          <p className="text-sm text-muted-foreground">যোগাযোগ ও ডেলিভারির জন্য নিচের তথ্য পূরণ করুন।</p>
          <label className="block text-sm">আপনার নাম<input autoComplete="name" name="name" required aria-label="আপনার নাম" placeholder="আপনার নাম" className="field mt-2" /></label>
          <label className="block text-sm">মোবাইল নম্বর<input autoComplete="tel" name="phone" required inputMode="numeric" aria-label="মোবাইল নম্বর" placeholder="01XXXXXXXXX" className="field mt-2" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <select aria-label="জেলা" required value={district} onChange={(e) => setDistrict(e.target.value)} className="field">
              <option value="">জেলা নির্বাচন করুন *</option>
              {Object.keys(districts).map((d) => <option key={d}>{d}</option>)}
            </select>
            <select aria-label="থানা" name="thana" required className="field" disabled={!district}>
              <option value="">থানা নির্বাচন করুন *</option>
              {(districts[district] || []).map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <label className="block text-sm">সম্পূর্ণ ঠিকানা<textarea autoComplete="street-address" aria-label="সম্পূর্ণ ঠিকানা" name="address" required rows={3} placeholder="সম্পূর্ণ ঠিকানা (বাসা, রোড, এলাকা) *" className="field mt-2" /></label>

          <h2 className="pt-2 text-xl">পেমেন্ট পদ্ধতি</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {([["cod", "ক্যাশ অন ডেলিভারি"], ["bkash", "বিকাশ"], ["nagad", "নগদ"]] as [Pay, string][]).map(([k, l]) => (
              <Button type="button" key={k} onClick={() => setPay(k)} aria-pressed={pay === k} variant={pay === k ? "premium" : "outline"} className="h-auto min-h-11 whitespace-normal px-3">{l}</Button>
            ))}
          </div>
          {pay !== "cod" && (
            <div className="rounded-md border bg-card p-4 text-sm">
              <p className="text-muted-foreground">
                {pay === "bkash" ? "বিকাশ" : "নগদ"} মার্চেন্ট নম্বর <span className="text-primary">01XXXXXXXXX</span>-এ মোট {taka(total)} "পেমেন্ট" করুন, তারপর ট্রানজেকশন আইডি নিচে দিন।
              </p>
              <input aria-label="ট্রানজেকশন আইডি" name="trx" placeholder="ট্রানজেকশন আইডি *" className="field mt-3" />
            </div>
          )}
          <p className="text-xs leading-6 text-muted-foreground">তথ্য এই ব্রাউজারে সংরক্ষিত হবে। অর্ডার নিশ্চিত করতে সরাসরি আমাদের সঙ্গে যোগাযোগ করুন। <Link to="/privacy" className="text-primary underline">প্রাইভেসি পলিসি</Link> · <Link to="/return-policy" className="text-primary underline">রিটার্ন পলিসি</Link></p>
          {err && <p className="text-sm text-destructive">{err}</p>}
        </div>

        <aside className="h-fit space-y-4 rounded-md border bg-card p-5">
          <h2 className="text-xl">অর্ডার সারাংশ</h2>
          {cart.items.map((i, idx) => {
            const p = getProduct(i.slug);
            if (!p) return null;
            return (
              <div key={idx} className="flex gap-3 text-sm">
                <img src={p.images[0]} alt={p.name} className="h-16 w-12 rounded object-cover" />
                <div className="flex-1">
                  <p>{p.name}</p>
                  <p className="text-muted-foreground">সাইজ: {i.size}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Button type="button" onClick={() => cart.update(idx, i.qty - 1)} variant="ghost" size="icon" aria-label="পরিমাণ কমান"><Minus/></Button>
                    <span>{i.qty.toLocaleString("bn-BD")}</span>
                    <Button type="button" onClick={() => cart.update(idx, i.qty + 1)} variant="ghost" size="icon" aria-label="পরিমাণ বাড়ান"><Plus/></Button>
                    <Button type="button" onClick={() => cart.remove(idx)} variant="ghost" size="icon" className="ml-auto text-destructive" aria-label="পোশাক মুছুন" title="পোশাক মুছুন"><Trash2/></Button>
                  </div>
                </div>
                <p>{taka(price(p) * i.qty)}</p>
              </div>
            );
          })}
          <div className="space-y-1 border-t pt-3 text-sm">
            <p className="flex justify-between"><span>সাবটোটাল</span><span>{taka(cart.subtotal)}</span></p>
            <p className="flex justify-between"><span>ডেলিভারি চার্জ {district && `(${district === "ঢাকা" ? "ঢাকার ভেতরে" : "ঢাকার বাইরে"})`}</span><span>{district ? taka(shipping) : "জেলা বাছাই করুন"}</span></p>
            <p className="flex justify-between pt-2 text-lg font-semibold text-primary"><span>সর্বমোট</span><span>{taka(total)}</span></p>
          </div>
          <Button type="submit" variant="premium" className="h-12 w-full">অর্ডারের তথ্য সংরক্ষণ করুন</Button>
        </aside>
      </form>
    </Page>
  );
}
