import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/Layout";
import { deliveryInfo, getProduct, price, sizeChart, taka } from "@/lib/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
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
    ] : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const nav = useNavigate();
  const [size, setSize] = useState(p.sizes[0]);
  const [qty, setQty] = useState(1);
  const buy = (go: boolean) => { add({ slug: p.slug, size, qty }); if (go) nav({ to: "/checkout" }); };

  return (
    <Page>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
        <img src={p.images[0]} alt={p.name} width={768} height={1024} className="w-full rounded-xl border object-cover" />
        <div>
          <h1 className="text-3xl leading-snug">{p.name}</h1>
          <p className="mt-3 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-primary">{taka(price(p))}</span>
            {p.sale_price && <span className="text-muted-foreground line-through">{taka(p.regular_price)}</span>}
          </p>
          <p className="mt-4 text-muted-foreground">{p.short_description}</p>

          <p className="mt-6 text-sm">সাইজ নির্বাচন করুন</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.sizes.map((s) => (
              <button key={s} onClick={() => setSize(s)} className={s === size ? "btn-rose !px-4 !py-1.5" : "btn-outline !px-4 !py-1.5"}>{s}</button>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button className="btn-outline !px-4 !py-1.5" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span className="w-8 text-center">{qty.toLocaleString("bn-BD")}</span>
            <button className="btn-outline !px-4 !py-1.5" onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-rose" onClick={() => buy(true)}>এখনই অর্ডার করুন</button>
            <button className="btn-outline" onClick={() => buy(false)}>ব্যাগে যোগ করুন</button>
          </div>

          <div className="mt-8 space-y-5 rounded-xl border bg-card p-5 text-sm">
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
