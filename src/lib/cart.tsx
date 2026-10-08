import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct, price } from "./catalog";

export type CartItem = { slug: string; size: string; qty: number };
type Ctx = {
  items: CartItem[];
  add: (i: CartItem) => void;
  update: (idx: number, qty: number) => void;
  remove: (idx: number) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};
const CartCtx = createContext<Ctx | null>(null);
const KEY = "tonra_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
  }, []);
  const save = (next: CartItem[]) => { setItems(next); localStorage.setItem(KEY, JSON.stringify(next)); };
  const add = (i: CartItem) => {
    const idx = items.findIndex((x) => x.slug === i.slug && x.size === i.size);
    if (idx >= 0) save(items.map((x, k) => (k === idx ? { ...x, qty: x.qty + i.qty } : x)));
    else save([...items, i]);
  };
  const subtotal = items.reduce((s, i) => { const p = getProduct(i.slug); return s + (p ? price(p) * i.qty : 0); }, 0);
  return (
    <CartCtx.Provider value={{
      items, add, subtotal, count: items.reduce((s, i) => s + i.qty, 0),
      update: (idx, qty) => save(items.map((x, k) => (k === idx ? { ...x, qty: Math.max(1, qty) } : x))),
      remove: (idx) => save(items.filter((_, k) => k !== idx)),
      clear: () => save([]),
    }}>{children}</CartCtx.Provider>
  );
}
export const useCart = () => { const c = useContext(CartCtx); if (!c) throw new Error("no cart"); return c; };
