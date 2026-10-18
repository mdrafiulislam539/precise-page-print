import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Page, ProductCard } from "@/components/Layout";
import { categories, products, price, bn } from "@/lib/catalog";

export const Route = createFileRoute("/shop")({
  staticData: { sitemap: true },
  validateSearch: (s: Record<string, unknown>): { category?: string | undefined } => ({ category: typeof s["category"] === "string" ? s["category"] : undefined }),
  head: () => ({
    meta: [
      { title: "শপ | লেডিস শাড়ি, থ্রি-পিস ও কুর্তি অনলাইনে কিনুন — তনরা আউটফিটস" },
      { name: "description", content: "তনরা আউটফিটসের সব কালেকশন: বেনারসি শাড়ি, এমব্রয়ডারি থ্রি-পিস, কটন কুর্তি ও ওয়েস্টার্ন ড্রেস অনলাইনে দেখুন।" },
      { property: "og:title", content: "শপ — তনরা আউটফিটস" },
      { property: "og:description", content: "নারীদের প্রিমিয়াম পোশাকের সম্পূর্ণ কালেকশন।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();
  const cat = categories.find((c) => c.slug === category);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const categoryList = cat ? products.filter((p) => p.categories.includes(cat.slug)) : products;
  const list = categoryList.filter(p => `${p.name} ${p.fabric}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).slice().sort((a,b) => sort === "low" ? price(a)-price(b) : sort === "high" ? price(b)-price(a) : Number(b.featured)-Number(a.featured));
  return (
    <Page>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl">{cat ? cat.name : "সব কালেকশন"}</h1>
        <p className="mt-2 text-muted-foreground">{cat ? cat.description : "নারীদের জন্য বাছাই করা প্রিমিয়াম পোশাক — শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ওয়্যার।"}</p>
        <nav aria-label="কালেকশন বিভাগ" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-b">
          <Link to="/shop" search={{}} className={`border-b-2 pb-3 text-sm ${!cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-primary"}`}>সব</Link>
          {categories.map(c => <Link key={c.slug} to="/shop" search={{ category:c.slug }} className={`border-b-2 pb-3 text-sm ${cat?.slug === c.slug ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-primary"}`}>{c.name}</Link>)}
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="relative w-full sm:max-w-xs"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" aria-hidden="true"/><input aria-label="পোশাক খুঁজুন" placeholder="পোশাকের নাম দিয়ে খুঁজুন" value={query} onChange={e=>setQuery(e.target.value)} className="field pl-10" type="search"/></div>
          <span className="text-sm text-muted-foreground">{bn(list.length)}টি পোশাক</span>
          <select aria-label="পোশাক সাজান" className="field sm:ml-auto sm:w-auto" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">বাছাই করা</option><option value="low">মূল্য: কম থেকে বেশি</option><option value="high">মূল্য: বেশি থেকে কম</option></select>
        </div>
        {!list.length && <div className="py-16 text-center"><h2 className="text-xl">কোনো পোশাক পাওয়া যায়নি</h2><Button variant="link" onClick={()=>setQuery("")} className="mt-3">সব পোশাক দেখুন <ArrowRight/></Button></div>}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </Page>
  );
}
