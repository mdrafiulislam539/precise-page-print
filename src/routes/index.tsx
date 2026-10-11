import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/banner.png.asset.json";
import { Page, ProductCard } from "@/components/Layout";
import { categories, products } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "তনরা আউটফিটস | শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ড্রেস অনলাইন শপ" },
      { name: "description", content: "TonRa Outfits — বাংলাদেশে নারীদের প্রিমিয়াম শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ওয়্যার অনলাইনে কিনুন। ক্যাশ অন ডেলিভারি, সারাদেশে হোম ডেলিভারি।" },
      { property: "og:title", content: "তনরা আউটফিটস — স্টাইল ফর এভরি ইউ" },
      { property: "og:description", content: "নারীদের প্রিমিয়াম ফ্যাশন: শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ওয়্যার।" },
    ],
  }),
  component: Index,
});

const trustPoints = [
  { title: "ক্যাশ অন ডেলিভারি", text: "পণ্য হাতে পেয়ে, দেখে-বুঝে তারপর মূল্য পরিশোধ করুন।" },
  { title: "লগইন ছাড়াই অর্ডার", text: "কোনো অ্যাকাউন্ট বা পাসওয়ার্ড ছাড়াই মাত্র এক পেজে অর্ডার সম্পন্ন করুন।" },
  { title: "সারাদেশে হোম ডেলিভারি", text: "ঢাকার ভেতরে ৳৮০ ও ঢাকার বাইরে ৳১৫০ চার্জে দেশের যেকোনো প্রান্তে ডেলিভারি।" },
  { title: "মানসম্মত পণ্যের প্রতিশ্রুতি", text: "প্রতিটি পোশাক বাছাই করা হয় ভালো ফেব্রিক ও নিখুঁত সেলাই যাচাই করে।" },
];

const faqs = [
  { q: "অর্ডার করতে কি অ্যাকাউন্ট লাগবে?", a: "না। নাম, মোবাইল নম্বর ও ঠিকানা দিয়েই এক পেজে অর্ডার করা যায় — কোনো লগইন বা রেজিস্ট্রেশনের দরকার নেই।" },
  { q: "পেমেন্ট কীভাবে করব?", a: "ক্যাশ অন ডেলিভারি, বিকাশ বা নগদ — যেকোনো একটি মাধ্যমে পেমেন্ট করতে পারবেন।" },
  { q: "ডেলিভারি পেতে কতদিন লাগে?", a: "ঢাকার ভেতরে সাধারণত ১–২ দিন এবং ঢাকার বাইরে ২–৪ দিনের মধ্যে ডেলিভারি পৌঁছে যায়।" },
  { q: "পণ্য পছন্দ না হলে কী হবে?", a: "ডেলিভারি ম্যানের সামনে পণ্য চেক করুন। কোনো সমস্যা থাকলে সাথে সাথে আমাদের জানান — আমরা সমাধান করে দেব।" },
  { q: "আমার ব্যক্তিগত তথ্য কি নিরাপদ?", a: "সম্পূর্ণ নিরাপদ। আপনার তথ্য শুধু ডেলিভারির কাজে ব্যবহৃত হয়, কারো কাছে বিক্রি বা শেয়ার করা হয় না। বিস্তারিত জানুন আমাদের প্রাইভেসি পলিসি পেজে।" },
];

function Index() {
  return (
    <Page>
      <section className="relative">
        <img src={banner.url} alt="TonRa Outfits ব্যানার — নারীদের প্রিমিয়াম পোশাক" className="w-full" />
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h1 className="text-3xl leading-snug sm:text-5xl">
            নারীদের প্রিমিয়াম ফ্যাশন, <span className="text-rose-gradient">আপনার স্টাইলে</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            শাড়ি, থ্রি-পিস, কুর্তি আর ওয়েস্টার্ন ওয়্যারের বাছাই করা কালেকশন — লগইন ছাড়াই মাত্র এক পেজে অর্ডার করুন, পণ্য হাতে পেয়ে মূল্য দিন।
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/shop" search={{}} className="btn-rose">এখনই কেনাকাটা করুন</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-center text-3xl">ক্যাটাগরি অনুযায়ী কেনাকাটা</h2>
        <p className="mt-2 text-center text-muted-foreground">উৎসব থেকে প্রতিদিন — প্রতিটি মুহূর্তের জন্য পারফেক্ট লেডিস ড্রেস</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.slug} to="/shop" search={{ category: c.slug }} className="group relative overflow-hidden rounded-xl border">
              <img src={c.image} alt={`${c.name} কালেকশন`} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/30 to-transparent p-4">
                <h3 className="text-xl text-rose-gradient">{c.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-center text-3xl">বেস্ট সেলিং প্রোডাক্টস</h2>
        <p className="mt-2 text-center text-muted-foreground">আমাদের কাস্টমারদের সবচেয়ে পছন্দের পোশাকগুলো</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.filter((p) => p.featured).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="border-y bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-3xl">কেন তনরা আউটফিটস থেকে কিনবেন?</h2>
          <p className="mt-2 text-center text-muted-foreground">আপনার বিশ্বাসই আমাদের প্রতিশ্রুতি</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((tp) => (
              <div key={tp.title} className="rounded-xl border bg-card p-5 text-center">
                <h3 className="text-lg text-rose-gradient">{tp.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{tp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-center text-3xl">সাধারণ জিজ্ঞাসা</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border bg-card p-5 open:shadow-glow">
              <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <h2 className="text-3xl">আমাদের গল্প</h2>
        <p className="mt-5 leading-8 text-muted-foreground">
          তনরা আউটফিটসের যাত্রা শুরু একটি সহজ স্বপ্ন থেকে — প্রতিটি নারী যেন নিজের পছন্দের পোশাকে আত্মবিশ্বাসী ও সুন্দর অনুভব করেন। দেশীয় ঐতিহ্যের শাড়ি ও থ্রি-পিস থেকে শুরু করে আধুনিক ওয়েস্টার্ন ওয়্যার — প্রতিটি পোশাক আমরা বাছাই করি মানসম্মত ফেব্রিক, নিখুঁত সেলাই আর ট্রেন্ডি ডিজাইনের কথা ভেবে। কারণ আমাদের বিশ্বাস: স্টাইল সবার জন্য, আর আপনার স্টাইলই আমাদের অগ্রাধিকার।
        </p>
      </section>
    </Page>
  );
}
