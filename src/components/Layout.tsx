import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";
import { useCart } from "@/lib/cart";
import { bn, type Product, price, taka } from "@/lib/catalog";

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="TonRa Outfits লোগো" className="h-11 w-11 rounded-full" />
          <span className="font-display text-xl text-rose-gradient">তনরা আউটফিটস</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" className="hidden sm:inline hover:text-primary">হোম</Link>
          <Link to="/shop" search={{}} className="hover:text-primary">শপ</Link>
          <Link to="/checkout" className="btn-outline !px-4 !py-1.5">ব্যাগ ({bn(count)})</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-muted-foreground sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-rose-gradient">তনরা আউটফিটস</p>
          <p className="mt-2">স্টাইল ফর এভরি ইউ — নারীদের প্রিমিয়াম পোশাকের বিশ্বস্ত অনলাইন শপ।</p>
        </div>
        <div>
          <p className="text-foreground">ডেলিভারি</p>
          <p className="mt-2">ঢাকার ভেতরে ৳৮০ · ঢাকার বাইরে ৳১৫০<br />ক্যাশ অন ডেলিভারি · বিকাশ · নগদ</p>
        </div>
        <div>
          <p className="text-foreground">শপ</p>
          <Link to="/shop" search={{}} className="mt-2 block hover:text-primary">সব কালেকশন দেখুন</Link>
          <Link to="/privacy" className="mt-2 block hover:text-primary">প্রাইভেসি পলিসি</Link>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-muted-foreground">© ২০২৬ TonRa Outfits। সর্বস্বত্ব সংরক্ষিত।</p>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (<><Header /><main>{children}</main><Footer /></>);
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-xl border bg-card transition hover:shadow-glow">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={p.images[0]} alt={p.name} loading="lazy" width={768} height={1024} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-sans font-medium">{p.name}</h3>
        <p className="mt-1 flex items-baseline gap-2">
          <span className="font-semibold text-primary">{taka(price(p))}</span>
          {p.sale_price && <span className="text-xs text-muted-foreground line-through">{taka(p.regular_price)}</span>}
        </p>
      </div>
    </Link>
  );
}
