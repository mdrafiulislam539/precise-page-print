// WooCommerce-compatible product shape (fields mirror WC REST product schema)
import onepiece from "@/assets/onepiece.jpg";
import twopiece from "@/assets/twopiece.jpg";
import threepiece from "@/assets/threepiece.jpg";
import kurti from "@/assets/kurti.jpg";
import western from "@/assets/western.jpg";

export type Category = { slug: string; name: string; description: string; image: string };
export type Product = {
  id: number;
  slug: string;
  name: string;
  categories: string[];
  regular_price: number;
  sale_price?: number;
  images: string[];
  short_description: string;
  description: string;
  fabric: string;
  sizes: string[];
  featured: boolean;
};

export const categories: Category[] = [
  { slug: "one-piece", name: "ওয়ান-পিস", image: onepiece, description: "এক টুকরায় সাজানো মার্জিত ওয়ান-পিস — ড্রেস ও মিডির বাছাই করা কালেকশন, ক্যাজুয়াল থেকে পার্টি পর্যন্ত।" },
  { slug: "two-piece", name: "টু-পিস", image: twopiece, description: "কুর্তি ও সেলোয়ার টু-পিস — প্রতিদিনের আরামে নিজের স্টাইল ফুটিয়ে তুলুন।" },
  { slug: "three-piece", name: "থ্রি-পিস", image: threepiece, description: "কামিজ, সালোয়ার ও ওড়নার মানানসই থ্রি-পিস — উৎসব ও পার্টির জন্য পারফেক্ট।" },
];

const S = ["S", "M", "L", "XL", "XXL"];
const delivery = "";

export const products: Product[] = [
  { id: 101, slug: "blush-pink-midi-dress", name: "ব্লাশ পিঙ্ক র‍্যাপ মিডি ওয়ান-পিস", categories: ["one-piece"], regular_price: 2800, sale_price: 2290, images: [onepiece], fabric: "প্রিমিয়াম ক্রেপ জর্জেট", sizes: S, featured: true,
    short_description: "বার্থডে, ডেট নাইট ও ক্যাজুয়াল পার্টির জন্য এলিগ্যান্ট ওয়ান-পিস।",
    description: "মিনিমাল অথচ এলিগ্যান্ট — এই ব্লাশ পিঙ্ক ওয়ান-পিসে রয়েছে র‍্যাপ স্টাইল নেকলাইন, কোমরে বেল্ট ডিটেইল এবং ফ্লোয়ি হেমলাইন। হালকা ক্রেপ ফেব্রিক সারাদিন আরামদায়ক রাখে, প্রতিটি আয়োজনে দেয় আলাদা আভিজাত্য।" },
  { id: 102, slug: "black-gold-embroidered-three-piece", name: "ব্ল্যাক গোল্ড এমব্রয়ডারি থ্রি-পিস", categories: ["three-piece"], regular_price: 4200, sale_price: 3490, images: [threepiece], fabric: "জর্জেট কামিজ, নেট ওড়না, সাটিন সালোয়ার", sizes: S, featured: true,
    short_description: "গোল্ডেন সুতার হাতের কাজ করা প্রিমিয়াম পার্টি ওয়্যার থ্রি-পিস।",
    description: "পার্টি, দাওয়াত কিংবা ঈদ — যেকোনো আয়োজনে নজর কাড়তে এই ব্ল্যাক গোল্ড এমব্রয়ডারি থ্রি-পিস অনবদ্য। কামিজের গলা ও হেমলাইনে ঘন গোল্ডেন এমব্রয়ডারি, সাথে মানানসই নেট ওড়না ও সালোয়ার। আরামদায়ক ফিটিং এবং দীর্ঘস্থায়ী রঙ।" },
  { id: 103, slug: "sage-green-cotton-kurti", name: "সেজ গ্রিন কটন এমব্রয়ডারি কুর্তি টু-পিস", categories: ["two-piece"], regular_price: 1850, sale_price: 1490, images: [kurti], fabric: "১০০% সফট কটন", sizes: S, featured: true,
    short_description: "অফিস ও ক্যাজুয়াল ব্যবহারের জন্য আরামদায়ক কটন কুর্তি টু-পিস।",
    description: "গরমের দিনে আরাম আর স্টাইল একসাথে চাইলে এই সেজ গ্রিন কটন কুর্তি টু-পিসই সেরা পছন্দ। নেকলাইন ও হাতায় সাদা সুতার সূক্ষ্ম এমব্রয়ডারি, সাইড স্লিট এবং থ্রি-কোয়ার্টার হাতা — পালাজো বা লেগিংসের সাথে মানিয়ে যায় দারুণভাবে।" },
  { id: 107, slug: "rose-pink-embroidered-salwar-two-piece", name: "রোজ পিঙ্ক এমব্রয়ডারি সেলোয়ার টু-পিস", categories: ["two-piece"], regular_price: 3200, sale_price: 2690, images: [twopiece], fabric: "এমব্রয়ডারি কটন", sizes: S, featured: true,
    short_description: "সূক্ষ্ম এমব্রয়ডারি করা রোজ পিঙ্ক কামিজ ও পালাজোর টু-পিস।",
    description: "প্রতিদিনের পর পার্টি — সব জায়গায় মানিয়ে নেওয়ার মতো এই রোজ পিঙ্ক টু-পিসে রয়েছে নরম কটনে ফুলেল এমব্রয়ডারি, স্ক্যালপ হেমলাইন ও ফ্লেয়ার্ড পালাজো। আরামে সবার আগে, স্টাইলে আলাদা।" },
  { id: 108, slug: "blush-floral-one-piece", name: "ব্লাশ পিঙ্ক ফ্লোরাল ওয়ান-পিস", categories: ["one-piece"], regular_price: 2600, images: [western], fabric: "সফট জর্জেট", sizes: S, featured: false,
    short_description: "প্রতিদিনের স্টাইলের জন্য হালকা ও আরামদায়ক ওয়ান-পিস।",
    description: "নরম ব্লাশ পিঙ্ক জমিনে ফ্লোরাল ছোঁয়া — হালকা জর্জেটে বোনা এই ওয়ান-পিস পরতে সহজ, দেখতে মার্জিত। ক্যাম্পাস, অফিস কিংবা বিকেলের ঘোরাঘুরির জন্য বেছে নিন প্রতিদিনের সঙ্গী।" },
  { id: 106, slug: "black-party-three-piece", name: "মিডনাইট ব্ল্যাক পার্টি থ্রি-পিস", categories: ["three-piece"], regular_price: 3600, images: [threepiece], fabric: "জর্জেট ও নেট", sizes: S, featured: false,
    short_description: "সন্ধ্যার দাওয়াতের জন্য গর্জিয়াস থ্রি-পিস।",
    description: "গভীর কালো জমিনে সোনালি কারুকাজ — সন্ধ্যার যেকোনো আয়োজনে আপনাকে করবে অনন্য।" },
];

export const sizeChart = [
  { size: "S", bust: "৩৬\"", waist: "৩০\"", length: "৪২\"" },
  { size: "M", bust: "৩৮\"", waist: "৩২\"", length: "৪৩\"" },
  { size: "L", bust: "৪০\"", waist: "৩৪\"", length: "৪৪\"" },
  { size: "XL", bust: "৪২\"", waist: "৩৬\"", length: "৪৫\"" },
  { size: "XXL", bust: "৪৪\"", waist: "৩৮\"", length: "৪৬\"" },
];

export const deliveryInfo = "ঢাকার ভেতরে ডেলিভারি চার্জ ৳৮০, ঢাকার বাইরে ৳১৫০। সম্ভাব্য ডেলিভারির সময় ও বিনিময়ের শর্ত অর্ডারের আগে আমাদের সঙ্গে যোগাযোগ করে নিশ্চিত করুন।";

export const price = (p: Product) => p.sale_price ?? p.regular_price;
export const bn = (n: number) => n.toLocaleString("bn-BD");
export const taka = (n: number) => `৳${bn(n)}`;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
