import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, ShoppingBag, X, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { bn, type Product, price, taka, categories } from "@/lib/catalog";
import { brand } from "@/lib/brand";

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return <>
    <div className="border-b bg-secondary text-center text-xs text-muted-foreground py-2 px-4">সারাদেশে ডেলিভারি <span className="mx-2 text-primary">·</span> ক্যাশ অন ডেলিভারি</div>
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link to="/" aria-label="তনরা আউটফিটস হোম" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="তনরা আউটফিটস লোগো" className="h-11 w-11 shrink-0 rounded-full" />
          <span className="font-display text-lg text-primary sm:text-2xl">তনরা আউটফিটস</span>
        </Link>
        <nav aria-label="প্রধান নেভিগেশন" className="hidden items-center gap-7 text-sm md:flex">
          <Link to="/shop" search={{}} activeProps={{ className: "text-primary" }} className="transition hover:text-primary">কালেকশন</Link>
          <Link to="/about" activeProps={{ className: "text-primary" }} className="transition hover:text-primary">আমাদের সম্পর্কে</Link>
          <Link to="/contact" activeProps={{ className: "text-primary" }} className="transition hover:text-primary">যোগাযোগ</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <Button asChild variant="ghost" className="px-2 sm:px-3"><Link to="/checkout" aria-label={`শপিং ব্যাগ, ${bn(count)}টি পণ্য`}><ShoppingBag /> <span className="hidden sm:inline">ব্যাগ</span><span className="min-w-5 text-center text-primary">{bn(count)}</span></Link></Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav id="mobile-nav" aria-label="মোবাইল নেভিগেশন" className="border-t px-6 py-4 md:hidden flex flex-col gap-5 text-sm">
        <Link to="/shop" search={{}} onClick={() => setOpen(false)}>সব কালেকশন</Link>
        <Link to="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>
        <Link to="/privacy" onClick={() => setOpen(false)}>প্রাইভেসি পলিসি</Link>
        <Link to="/return-policy" onClick={() => setOpen(false)}>রিটার্ন পলিসি</Link>
      </nav>}
    </header>
  </>;
}

export function Footer() {
  return <footer className="mt-16 border-t bg-card/40">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] text-sm">
      <div>
        <img src={logo.url} alt="তনরা আউটফিটস" className="h-16 w-16 rounded-full" loading="lazy" />
        <p className="mt-4 font-display text-xl text-primary">তনরা আউটফিটস</p>
        <p className="mt-3 max-w-xs leading-7 text-muted-foreground">রুচি, স্বাচ্ছন্দ্য ও আত্মবিশ্বাসের জন্য বাছাই করা পোশাক। আপনার স্টাইল, আমাদের অগ্রাধিকার।</p>
        <div className="mt-4 flex gap-2">
          {[[brand.facebook, "ফেসবুক", Facebook], [brand.instagram, "ইনস্টাগ্রাম", Instagram], [brand.whatsapp, "হোয়াটসঅ্যাপ", MessageCircle]].map(([url, label, Icon]) => {
            const SocialIcon = Icon as typeof Facebook;
            return <Button key={String(label)} asChild size="icon" variant="outline"><a href={String(url)} aria-label={String(label)} title={String(label)} target="_blank" rel="noopener noreferrer"><SocialIcon /></a></Button>;
          })}
        </div>
      </div>
      <div><h2 className="font-sans text-sm font-semibold">কালেকশন</h2><div className="mt-4 space-y-3 text-muted-foreground">{categories.map(c => <Link key={c.slug} to="/shop" search={{ category:c.slug }} className="block hover:text-primary">{c.name}</Link>)}</div></div>
      <div><h2 className="font-sans text-sm font-semibold">প্রয়োজনীয় তথ্য</h2><div className="mt-4 space-y-3 text-muted-foreground"><Link to="/about" className="block hover:text-primary">আমাদের সম্পর্কে</Link><Link to="/contact" className="block hover:text-primary">যোগাযোগ</Link><Link to="/privacy" className="block hover:text-primary">প্রাইভেসি পলিসি</Link><Link to="/return-policy" className="block hover:text-primary">রিটার্ন পলিসি</Link><p className="leading-7">ঢাকার ভেতরে ৳৮০<br />ঢাকার বাইরে ৳১৫০</p><p>ক্যাশ অন ডেলিভারি · বিকাশ · নগদ</p></div></div>
      <div className="min-w-0"><h2 className="font-sans text-sm font-semibold">গ্রাহক সহায়তা</h2><a href={`tel:${brand.phone}`} className="mt-4 block text-primary">{brand.phoneLabel}</a><a href={`mailto:${brand.email}`} className="mt-3 block break-all text-muted-foreground hover:text-primary">{brand.email}</a><p className="mt-3 leading-7 text-muted-foreground">{brand.address}</p><a href={brand.tiktok} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-muted-foreground hover:text-primary">টিকটক <ArrowUpRight className="inline size-3" /></a></div>
    </div>
    <div className="mx-auto max-w-6xl border-t px-4 py-5 text-xs text-muted-foreground sm:px-6">© ২০২৬ তনরা আউটফিটস। সর্বস্বত্ব সংরক্ষিত।</div>
  </footer>;
}
export function Page({ children }: { children: ReactNode }) {
  return <><a href="#main-content" className="sr-only focus:not-sr-only focus:block bg-primary text-primary-foreground p-3">মূল বিষয়বস্তুতে যান</a><Header /><main id="main-content">{children}</main><Footer /></>;
}
export function ProductCard({ p }: { p: Product }) {
  const category = categories.find(c => p.categories.includes(c.slug));
  return <Link to="/product/$slug" params={{ slug:p.slug }} className="group block min-w-0">
    <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-card">
      <img src={p.images[0]} alt={p.name} loading="lazy" width={768} height={1024} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
      {p.sale_price && <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-2 py-1 text-xs text-primary">বিশেষ মূল্য</span>}
      <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/90 text-primary" aria-hidden="true"><ArrowUpRight size={16}/></span>
    </div>
    <div className="pt-4"><p className="text-xs text-muted-foreground">{category?.name}</p><h3 className="mt-1 font-sans text-sm font-medium leading-6 sm:text-base">{p.name}</h3><p className="mt-2 flex flex-wrap items-baseline gap-2"><span className="font-semibold text-primary">{taka(price(p))}</span>{p.sale_price && <span className="text-xs text-muted-foreground line-through">{taka(p.regular_price)}</span>}</p></div>
  </Link>;
}
