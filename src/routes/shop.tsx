import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, ProductCard } from "@/components/Layout";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): { category?: string | undefined } => ({ category: typeof s["category"] === "string" ? s["category"] : undefined }),
  head: () => ({
    meta: [
      { title: "শপ | লেডিস শাড়ি, থ্রি-পিস ও কুর্তি অনলাইনে কিনুন — তনরা আউটফিটস" },
      { name: "description", content: "তনরা আউটফিটসের সব কালেকশন: বেনারসি শাড়ি, এমব্রয়ডারি থ্রি-পিস, কটন কুর্তি ও ওয়েস্টার্ন ড্রেস সেরা দামে।" },
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
  const list = cat ? products.filter((p) => p.categories.includes(cat.slug)) : products;
  return (
    <Page>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl">{cat ? cat.name : "সব কালেকশন"}</h1>
        <p className="mt-2 text-muted-foreground">{cat ? cat.description : "নারীদের জন্য বাছাই করা প্রিমিয়াম পোশাক — শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ওয়্যার।"}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link to="/shop" search={{ category: undefined }} className={!cat ? "btn-rose !py-1.5" : "btn-outline !py-1.5"}>সব</Link>
          {categories.map((c) => (
            <Link key={c.slug} to="/shop" search={{ category: c.slug }} className={cat?.slug === c.slug ? "btn-rose !py-1.5" : "btn-outline !py-1.5"}>{c.name}</Link>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </Page>
  );
}
