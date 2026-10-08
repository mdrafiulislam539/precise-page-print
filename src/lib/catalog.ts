// WooCommerce-compatible product shape (fields mirror WC REST product schema)
import saree from "@/assets/saree.jpg";
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
  { slug: "saree", name: "শাড়ি", image: saree, description: "জামদানি, কাতান ও সিল্ক শাড়ির এক্সক্লুসিভ কালেকশন — উৎসব ও বিয়ের জন্য পারফেক্ট।" },
  { slug: "three-piece", name: "থ্রি-পিস", image: threepiece, description: "এমব্রয়ডারি ও প্রিন্টেড থ্রি-পিস সালোয়ার কামিজ, প্রতিদিনের আরাম আর পার্টির জৌলুস একসাথে।" },
  { slug: "kurti", name: "কুর্তি", image: kurti, description: "কটন ও লিনেন কুর্তি — অফিস, ক্যাম্পাস কিংবা ক্যাজুয়াল আউটিংয়ে স্টাইলিশ লুক।" },
  { slug: "western", name: "ওয়েস্টার্ন ওয়্যার", image: western, description: "ট্রেন্ডি ড্রেস, টপস ও মিডি — আধুনিক নারীর জন্য ওয়েস্টার্ন ফ্যাশন।" },
];

const S = ["S", "M", "L", "XL", "XXL"];
const delivery = "";

export const products: Product[] = [
  { id: 101, slug: "rose-banarasi-silk-saree", name: "রোজ পিঙ্ক বেনারসি সিল্ক শাড়ি", categories: ["saree"], regular_price: 5500, sale_price: 4590, images: [saree], fabric: "খাঁটি বেনারসি সিল্ক, গোল্ডেন জরি পাড়", sizes: ["ফ্রি সাইজ"], featured: true,
    short_description: "বিয়ে ও উৎসবের জন্য গোল্ডেন জরির কাজ করা প্যাস্টেল পিঙ্ক বেনারসি শাড়ি।",
    description: "তনরা আউটফিটসের এই রোজ পিঙ্ক বেনারসি সিল্ক শাড়িটি ঐতিহ্য আর আভিজাত্যের এক অনন্য মেলবন্ধন। পুরো জমিনে সূক্ষ্ম জরির বুটি এবং চওড়া গোল্ডেন পাড় একে করেছে বিয়ে, গায়ে হলুদ ও ঈদের জন্য আদর্শ। ৬.৫ গজ লম্বা শাড়ির সাথে আনস্টিচড ব্লাউজ পিস রয়েছে।" },
  { id: 102, slug: "black-gold-embroidered-three-piece", name: "ব্ল্যাক গোল্ড এমব্রয়ডারি থ্রি-পিস", categories: ["three-piece"], regular_price: 4200, sale_price: 3490, images: [threepiece], fabric: "জর্জেট কামিজ, নেট ওড়না, সাটিন সালোয়ার", sizes: S, featured: true,
    short_description: "গোল্ডেন সুতার হাতের কাজ করা প্রিমিয়াম পার্টি ওয়্যার থ্রি-পিস।",
    description: "পার্টি, দাওয়াত কিংবা ঈদ — যেকোনো আয়োজনে নজর কাড়তে এই ব্ল্যাক গোল্ড এমব্রয়ডারি থ্রি-পিস অনবদ্য। কামিজের গলা ও হেমলাইনে ঘন গোল্ডেন এমব্রয়ডারি, সাথে মানানসই নেট ওড়না ও সালোয়ার। আরামদায়ক ফিটিং এবং দীর্ঘস্থায়ী রঙ।" },
  { id: 103, slug: "sage-green-cotton-kurti", name: "সেজ গ্রিন কটন এমব্রয়ডারি কুর্তি", categories: ["kurti"], regular_price: 1850, sale_price: 1490, images: [kurti], fabric: "১০০% সফট কটন", sizes: S, featured: true,
    short_description: "অফিস ও ক্যাজুয়াল ব্যবহারের জন্য আরামদায়ক কটন কুর্তি।",
    description: "গরমের দিনে আরাম আর স্টাইল একসাথে চাইলে এই সেজ গ্রিন কটন কুর্তিই সেরা পছন্দ। নেকলাইন ও হাতায় সাদা সুতার সূক্ষ্ম এমব্রয়ডারি, সাইড স্লিট এবং থ্রি-কোয়ার্টার হাতা। জিন্স, পালাজো বা লেগিংসের সাথে মানিয়ে যায় দারুণভাবে।" },
  { id: 104, slug: "blush-pink-midi-dress", name: "ব্লাশ পিঙ্ক র‍্যাপ মিডি ড্রেস", categories: ["western"], regular_price: 2800, sale_price: 2290, images: [western], fabric: "প্রিমিয়াম ক্রেপ জর্জেট", sizes: S, featured: true,
    short_description: "বার্থডে, ডেট নাইট ও ক্যাজুয়াল পার্টির জন্য এলিগ্যান্ট ওয়েস্টার্ন ড্রেস।",
    description: "মিনিমাল অথচ এলিগ্যান্ট — এই ব্লাশ পিঙ্ক মিডি ড্রেসে রয়েছে স্কয়ার নেক, কোমরে বেল্ট ডিটেইল এবং সামনে ফ্লোয়ি র‍্যাপ রাফল। হালকা ক্রেপ ফেব্রিক সারাদিন আরামদায়ক রাখে।" },
  { id: 105, slug: "pink-katan-festive-saree", name: "পিঙ্ক কাতান ফেস্টিভ শাড়ি", categories: ["saree"], regular_price: 3900, images: [saree], fabric: "কাতান সিল্ক", sizes: ["ফ্রি সাইজ"], featured: false,
    short_description: "হালকা ওজনের কাতান শাড়ি, পূজা ও ঈদের জন্য।",
    description: "নরম কাতান সিল্কে বোনা এই ফেস্টিভ শাড়িটি পরতে আরামদায়ক এবং সহজে সামলানো যায়। উৎসবের দিনে আপনাকে দেবে রাজকীয় অনুভূতি।" },
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

export const deliveryInfo = "ঢাকার ভেতরে ১-২ কার্যদিবস, ঢাকার বাইরে ৩-৫ কার্যদিবসে হোম ডেলিভারি। পণ্য হাতে পেয়ে চেক করে মূল্য পরিশোধের সুবিধা। ৭ দিনের সহজ এক্সচেঞ্জ পলিসি।" + delivery;

export const price = (p: Product) => p.sale_price ?? p.regular_price;
export const bn = (n: number) => n.toLocaleString("bn-BD");
export const taka = (n: number) => `৳${bn(n)}`;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
