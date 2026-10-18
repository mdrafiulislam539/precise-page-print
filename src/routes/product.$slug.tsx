import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, Check, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { useState } from "react";
import { Page } from "@/components/Layout";
import { deliveryInfo, getProduct, price, sizeChart, taka } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

const SITE_URL = "https://precise-page-print.lovable.app";

export const Route = createFileRoute("/product/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const p = getProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} | তনরা আউটফিটস` },
      { name: "description", content: loaderData.short_description },
      { property: "og:title", content: loaderData.name },
      { property: "og:description", content: loaderData.short_description },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary" },
    ] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: loaderData.name,
        description: loaderData.short_description,
        image: loaderData.images.map((src) => new URL(src, SITE_URL).href),
        brand: { "@type": "Brand", name: "TonRa Outfits" },
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/product/${loaderData.slug}`,
          priceCurrency: "BDT",
          price: price(loaderData),
          availability: "https://schema.org/InStock",
        },
      }),
    }] : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const nav = useNavigate();
  const [size, setSize] = useState<string>(p.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const buy = (go: boolean) => { add({ slug: p.slug, size, qty }); setAdded(true); if (go) nav({ to: "/checkout" }); };

  return (
    <Page>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
        <img src={p.images[0]} alt={p.name} width={768} height={1024} className="w-full rounded-md border object-cover" />
        <div>
          <Link to="/shop" search={{}} className="mb-4 inline-block text-sm text-muted-foreground hover:text-primary">কালেকশন / পোশাক</Link>
          <h1 className="text-2xl leading-snug sm:text-3xl">{p.name}</h1>
          <p className="mt-3 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-primary">{taka(price(p))}</span>
            {p.sale_price && <span className="text-muted-foreground line-through">{taka(p.regular_price)}</span>}
          </p>
          <p className="mt-4 text-muted-foreground">{p.short_description}</p>

          <p className="mt-6 text-sm">সাইজ নির্বাচন করুন</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.sizes.map((s) => (
              <Button key={s} aria-pressed={s === size} onClick={() => { setSize(s); setAdded(false); }} variant={s === size ? "premium" : "outline"} className="min-w-12">{s}</Button>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Button variant="outline" size="icon" aria-label="পরিমাণ কমান" disabled={qty === 1} onClick={() => setQty(Math.max(1, qty - 1))}><Minus/></Button>
            <span className="w-8 text-center">{qty.toLocaleString("bn-BD")}</span>
            <Button variant="outline" size="icon" aria-label="পরিমাণ বাড়ান" onClick={() => setQty(qty + 1)}><Plus/></Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="premium" size="lg" className="h-12" onClick={() => buy(true)}>অর্ডারের তথ্য দিন</Button>
            <Button variant="outline" size="lg" className="h-12" onClick={() => buy(false)}>{added ? <Check/> : <ShoppingBag/>}{added ? "ব্যাগে যোগ হয়েছে" : "ব্যাগে যোগ করুন"}</Button>
          </div>

          <p aria-live="polite" className="mt-3 min-h-6 text-sm text-primary">{added ? "পোশাকটি আপনার ব্যাগে যোগ হয়েছে।" : ""}</p>
          <Button asChild variant="link" className="px-0"><a href={`${brand.whatsapp}?text=${encodeURIComponent(`এই পোশাকটি সম্পর্কে জানতে চাই: ${p.name}`)}`} target="_blank" rel="noopener noreferrer"><MessageCircle/>সাইজ ও ফেব্রিক সম্পর্কে জানতে কথা বলুন</a></Button>
          <div className="mt-8 space-y-5 border-t pt-6 text-sm">
            <div><h2 className="text-lg">বিবরণ</h2><p className="mt-2 leading-7 text-muted-foreground">{p.description}</p></div>
            <div><h2 className="text-lg">ফেব্রিক</h2><p className="mt-2 text-muted-foreground">{p.fabric}</p></div>
            <div><h2 className="text-lg">ডেলিভারি তথ্য</h2><p className="mt-2 text-muted-foreground">{deliveryInfo}</p></div>
            {p.sizes.length > 1 && (
              <div>
                <h2 className="text-lg">সাইজ চার্ট (ইঞ্চি)</h2>
                <table className="mt-2 w-full text-center">
                  <thead className="text-primary"><tr><th className="py-1">সাইজ</th><th>বুক</th><th>কোমর</th><th>লম্বা</th></tr></thead>
                  <tbody className="text-muted-foreground">
                    {sizeChart.map((r) => (<tr key={r.size} className="border-t"><td className="py-1">{r.size}</td><td>{r.bust}</td><td>{r.waist}</td><td>{r.length}</td></tr>))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
