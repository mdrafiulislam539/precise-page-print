import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page } from "@/components/Layout";
import { getProduct, price, taka } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { deliveryCharge, districts } from "@/lib/shipping";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "কুইক অর্ডার — লগইন ছাড়াই অর্ডার করুন | তনরা আউটফিটস" },
      { name: "description", content: "নাম, মোবাইল নম্বর ও ঠিকানা দিয়ে লগইন ছাড়াই অর্ডার করুন। ক্যাশ অন ডেলিভারি ও বিকাশ/নগদ পেমেন্ট।" },
      { property: "og:title", content: "কুইক অর্ডার — তনরা আউটফিটস" },
      { property: "og:description", content: "এক পেজেই সহজ অর্ডার, কোনো লগইন বা ওটিপি নেই।" },
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
        <h1 className="text-3xl text-rose-gradient">ধন্যবাদ! আপনার অর্ডার সফল হয়েছে</h1>
        <p className="mt-4 text-muted-foreground">অর্ডার নম্বর: <span className="text-primary">{done}</span>। খুব শিগগিরই আমাদের প্রতিনিধি আপনার নম্বরে কল করে অর্ডার কনফার্ম করবেন।</p>
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
          <h1 className="text-3xl">কুইক অর্ডার</h1>
          <p className="text-sm text-muted-foreground">লগইন বা অ্যাকাউন্টের প্রয়োজন নেই — শুধু তথ্য দিয়ে অর্ডার কনফার্ম করুন।</p>
          <input name="name" required placeholder="আপনার নাম *" className="field" />
          <input name="phone" required inputMode="numeric" placeholder="মোবাইল নম্বর * (01XXXXXXXXX)" className="field" />
          <div className="grid gap-4 sm:grid-cols-2">
            <select required value={district} onChange={(e) => setDistrict(e.target.value)} className="field">
              <option value="">জেলা নির্বাচন করুন *</option>
              {Object.keys(districts).map((d) => <option key={d}>{d}</option>)}
            </select>
            <select name="thana" required className="field" disabled={!district}>
              <option value="">থানা নির্বাচন করুন *</option>
              {(districts[district] || []).map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <textarea name="address" required rows={3} placeholder="সম্পূর্ণ ঠিকানা (বাসা, রোড, এলাকা) *" className="field" />

          <h2 className="pt-2 text-xl">পেমেন্ট পদ্ধতি</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {([["cod", "ক্যাশ অন ডেলিভারি"], ["bkash", "বিকাশ"], ["nagad", "নগদ"]] as [Pay, string][]).map(([k, l]) => (
              <button type="button" key={k} onClick={() => setPay(k)} className={pay === k ? "btn-rose" : "btn-outline"}>{l}</button>
            ))}
          </div>
          {pay !== "cod" && (
            <div className="rounded-xl border bg-card p-4 text-sm">
              <p className="text-muted-foreground">
                {pay === "bkash" ? "বিকাশ" : "নগদ"} মার্চেন্ট নম্বর <span className="text-primary">01XXXXXXXXX</span>-এ মোট {taka(total)} "পেমেন্ট" করুন, তারপর ট্রানজেকশন আইডি নিচে দিন।
              </p>
              <input name="trx" placeholder="ট্রানজেকশন আইডি *" className="field mt-3" />
            </div>
          )}
          {err && <p className="text-sm text-destructive">{err}</p>}
        </div>

        <aside className="h-fit space-y-4 rounded-xl border bg-card p-5">
          <h2 className="text-xl">অর্ডার সারাংশ</h2>
          {cart.items.map((i, idx) => {
            const p = getProduct(i.slug)!;
            return (
              <div key={idx} className="flex gap-3 text-sm">
                <img src={p.images[0]} alt={p.name} className="h-16 w-12 rounded object-cover" />
                <div className="flex-1">
                  <p>{p.name}</p>
                  <p className="text-muted-foreground">সাইজ: {i.size}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <button type="button" onClick={() => cart.update(idx, i.qty - 1)} className="px-2">−</button>
                    <span>{i.qty.toLocaleString("bn-BD")}</span>
                    <button type="button" onClick={() => cart.update(idx, i.qty + 1)} className="px-2">+</button>
                    <button type="button" onClick={() => cart.remove(idx)} className="ml-auto text-xs text-destructive">মুছুন</button>
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
          <button type="submit" className="btn-rose w-full">অর্ডার কনফার্ম করুন</button>
        </aside>
      </form>
    </Page>
  );
}
