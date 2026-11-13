import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Truck, Banknote, MessageCircle, Plus } from "lucide-react";
import banner from "@/assets/banner.png.asset.json";
import { Page, ProductCard } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { categories, products, bn } from "@/lib/catalog";
import { brand } from "@/lib/brand";

export const Route = createFileRoute("/")({
  staticData: { sitemap:true },
  head: () => ({ meta:[
    { title:"তনরা আউটফিটস | ওয়ান-পিস, টু-পিস ও থ্রি-পিস" },
    { name:"description", content:"তনরা আউটফিটসে নারীদের জন্য বাছাই করা ওয়ান-পিস, সেলোয়ার ও কুর্তিসহ টু-পিস এবং থ্রি-পিস পোশাক। সারাদেশে ডেলিভারি ও ক্যাশ অন ডেলিভারি।" },
    { property:"og:title", content:"তনরা আউটফিটস — আপনার স্টাইল, আমাদের অগ্রাধিকার" },
    { property:"og:description", content:"রুচি, স্বাচ্ছন্দ্য ও আত্মবিশ্বাসের জন্য বাছাই করা নারীদের পোশাক।" },
    { property:"og:type", content:"website" },
    { name:"twitter:card", content:"summary_large_image" },
  ] }),
  component:Index,
});
const faqs = [
  { q:"ডেলিভারি চার্জ কত?", a:"ঢাকার ভেতরে ৳৮০ ও ঢাকার বাইরে ৳১৫০। অর্ডারের ঠিকানা অনুযায়ী মোট মূল্য দেখতে পারবেন।" },
  { q:"সঠিক সাইজ বেছে নিতে কীভাবে সহায়তা পাব?", a:"পণ্যের পেজে দেওয়া সাইজ ও মাপ দেখুন। সাইজ বা ফেব্রিক সম্পর্কে বিস্তারিত জানতে আমাদের হোয়াটসঅ্যাপে যোগাযোগ করুন।" },
  { q:"অর্ডারের জন্য কি অ্যাকাউন্ট প্রয়োজন?", a:"না। নাম, মোবাইল নম্বর ও সম্পূর্ণ ঠিকানা দিয়ে অর্ডারের তথ্য পূরণ করতে পারবেন।" },
];
function Index() {
  return <Page>
    <section className="border-b">
      <div className="mx-auto max-w-6xl"><img src={banner.url} alt="তনরা আউটফিটস — নারীদের পোশাকের ব্র্যান্ড" fetchPriority="high" className="w-full" /></div>
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 py-7 sm:px-6 md:flex-row md:items-center">
        <div><h1 className="text-3xl leading-snug sm:text-4xl">তনরা আউটফিটস</h1><p className="mt-2 leading-7 text-muted-foreground">আপনার পছন্দের স্টাইল। প্রতিদিনের স্বাচ্ছন্দ্য।</p></div>
        <Button asChild variant="premium" size="lg" className="h-12 self-start md:self-auto"><Link to="/shop" search={{}}>কালেকশন দেখুন <ArrowRight /></Link></Button>
      </div>
    </section>
    <nav aria-label="পোশাকের বিভাগ" className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
      {categories.map((c,i) => <Link key={c.slug} to="/shop" search={{category:c.slug}} className="group flex items-center gap-3 border-b py-6 md:py-8"><span className="text-xs text-muted-foreground">০{bn(i+1)}</span><span className="text-sm sm:text-base">{c.name}</span><ArrowUpRight size={16} className="ml-auto mr-4 text-primary transition group-hover:translate-x-1"/></Link>)}
    </nav>
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 text-xs font-medium text-primary">আপনার রুচির পোশাক</p><h2 className="text-2xl sm:text-3xl">বাছাই করা কালেকশন</h2></div><Button asChild variant="link" className="px-0"><Link to="/shop" search={{}}>সব পোশাক <ArrowRight /></Link></Button></div>
      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">{products.filter(p=>p.featured).map(p=><ProductCard key={p.id} p={p}/>)}</div>
    </section>
    <section className="border-y bg-card/40"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-3">
      {[{icon:Truck,title:"সারাদেশে ডেলিভারি",text:"ঢাকার ভেতরে ৳৮০ · বাইরে ৳১৫০"},{icon:Banknote,title:"ক্যাশ অন ডেলিভারি",text:"পণ্য গ্রহণের সময় মূল্য পরিশোধ"},{icon:MessageCircle,title:"সরাসরি গ্রাহক সহায়তা",text:"সাইজ ও পোশাক সম্পর্কে জানতে যোগাযোগ করুন"}].map(({icon:Icon,title,text})=><div key={title} className="flex items-start gap-4"><Icon size={24} className="shrink-0 text-primary"/><div><h3 className="font-sans text-base font-medium">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}
    </div></section>
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-20">
      <div><p className="text-xs text-primary">আমাদের দর্শন</p><h2 className="mt-3 text-3xl leading-snug">রুচি ও স্বাচ্ছন্দ্যের<br/>সঙ্গে আত্মবিশ্বাস</h2><p className="mt-5 max-w-md leading-8 text-muted-foreground">রাফি ও তন্নীর উদ্যোগে তনরা আউটফিটসের পথচলা। সাশ্রয়ী দামে মার্জিত পোশাক এবং যত্নশীল গ্রাহকসেবা—এই দুই অগ্রাধিকার নিয়ে বাংলাদেশের নারীদের জন্য আমাদের কাজ।</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/about">আমাদের সম্পর্কে <ArrowRight/></Link></Button><a href={brand.facebook} target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-muted-foreground hover:text-primary">ফেসবুকে আমাদের সাম্প্রতিক আপডেট <ArrowUpRight size={14} className="inline"/></a></div>
      <div><h2 className="text-2xl">কেনাকাটার আগে</h2><div className="mt-5">{faqs.map(f=><details key={f.q} className="group border-b py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">{f.q}<Plus className="size-4 shrink-0 text-primary transition group-open:rotate-45"/></summary><p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p></details>)}</div><Button asChild variant="link" className="mt-4 px-0"><a href={brand.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle/>হোয়াটসঅ্যাপে কথা বলুন</a></Button></div>
    </section>
  </Page>;
}
