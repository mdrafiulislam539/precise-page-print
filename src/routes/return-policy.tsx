import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Layout";
import { brand } from "@/lib/brand";

export const Route = createFileRoute("/return-policy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "রিটার্ন পলিসি | তনরা আউটফিটস" },
      { name: "description", content: "তনরা আউটফিটসের রিটার্ন পলিসি — সমস্যাযুক্ত পণ্য ডেলিভারি ম্যানের সামনেই ফেরত দিন, এক্ষেত্রে আপনার কিছুই পরিশোধ করতে হবে না।" },
      { property: "og:title", content: "রিটার্ন পলিসি | তনরা আউটফিটস" },
      { property: "og:description", content: "পণ্য হাতে পেয়ে চেক করুন — সমস্যা থাকলে সাথে সাথে ফেরত।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ReturnPolicy,
});

const summary = [
  { title: "পণ্য চেক করুন", body: "পণ্য বুঝে নেওয়ার সময় ডেলিভারি ম্যানের সামনেই খুলে দেখুন।" },
  { title: "সমস্যা থাকলে ফেরত দিন", body: "ছেঁড়া, দাগযুক্ত, ভুল পণ্য বা ভুল সাইজ হলে সাথে সাথেই ফেরত দিন।" },
  { title: "কিছুই পরিশোধ করবেন না", body: "সমস্যাযুক্ত পণ্যের ক্ষেত্রে পণ্যের মূল্য বা ডেলিভারি চার্জের কোনো অংশ দিতে হবে না।" },
];

const sections = [
  {
    title: "পণ্য যাচাই ও সাথে সাথে ফেরত",
    body: "পণ্য বুঝে নেওয়ার সময় ডেলিভারি ম্যানের সামনেই খুলে দেখুন। পোশাকে ছেঁড়া, ভাঙা, দাগ, ভুল পণ্য, ভুল সাইজ বা ভুল রং থাকলে তা সাথে সাথে ফেরত দিন। তনরা আউটফিটসে ক্যাশ অন ডেলিভারিতে মূল্য পরিশোধ হয় পণ্য বুঝে নেওয়ার পর — তাই সমস্যাযুক্ত পণ্য ফেরত দিলে পণ্যের মূল্য বা ডেলিভারি চার্জের কোনো অংশই আপনাকে পরিশোধ করতে হবে না।",
  },
  {
    title: "অযৌক্তিক কারণে পার্সেল ফেরত",
    body: "ভুল করে অর্ডার দিয়ে ফেলা, টাকা সংগ্রহের সময় না থাকা বা একই রকম অযৌক্তিক কারণে পণ্য গ্রহণে অস্বীকৃতি জানালে পার্সেল রিটার্ন চার্জ ডেলিভারি ম্যানকে সাথে সাথে পরিশোধ করতে হবে। এই চার্জ কুরিয়ার সার্ভিসের নির্ধারিত প্রকৃত খরচ অনুযায়ী প্রযোজ্য হবে।",
  },
  {
    title: "ফেরত গ্রহণযোগ্য হওয়ার শর্ত",
    body: "ফেরতের জন্য পোশাকের ট্যাগ ও প্যাকেজিং অটুট থাকতে হবে। ব্যবহৃত বা ধোয়া পোশাক কোনো অবস্থাতেই ফেরত গ্রহণ করা হয় না।",
  },
  {
    title: "ডেলিভারির পরে সমস্যা দেখা দিলে",
    body: "পণ্য বুঝে নেওয়ার পর কোনো সমস্যা চোখে পড়লে দ্রুত আমাদের ফোন বা হোয়াটসঅ্যাপে জানান। বিষয়টি যাচাই করে আমরা প্রয়োজনীয় ব্যবস্থা গ্রহণ করব।",
  },
  {
    title: "অগ্রিম পরিশোধিত অর্ডার",
    body: "বিকাশ বা নগদে অগ্রিম পরিশোধ করা অর্ডারে সমস্যাযুক্ত পণ্যের মূল্য ফেরত দেওয়া হয়। এমন ক্ষেত্রে আমাদের ফোন, হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন — পণ্য ফেরত পাওয়ার পর ব্যবস্থা নেওয়া হবে।",
  },
];

function ReturnPolicy() {
  return (
    <Page>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl">রিটার্ন পলিসি</h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          তনরা আউটফিটসে প্রতিটি পণ্য পাঠানোর আগে যাচাই করা হয়। তবু কোনো অসঙ্গতি দেখা দিলে যাতে
          আপনার কোনো ক্ষতি না হয়, সেজন্য আমাদের ফেরতের নিয়মগুলো স্পষ্টভাবে নিচে তুলে ধরা হলো।
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {summary.map((s) => (
            <div key={s.title} className="rounded-md border bg-card p-4">
              <h2 className="text-sm font-semibold text-primary">{s.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <div key={s.title} className="border-t pt-6">
              <h2 className="text-xl text-rose-gradient">{(i + 1).toLocaleString("bn-BD")}. {s.title}</h2>
              <p className="mt-3 leading-8 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 border-t pt-6 text-sm leading-7 text-muted-foreground">
          রিটার্ন সংক্রান্ত প্রশ্নের জন্য কল করুন: <a href={`tel:${brand.phone}`} className="text-primary hover:underline">{brand.phoneLabel}</a>।
          {" "}ইমেইল: <a href={`mailto:${brand.email}`} className="break-all text-primary hover:underline">{brand.email}</a> অথবা <a href={brand.whatsapp} className="text-primary hover:underline">হোয়াটসঅ্যাপে মেসেজ দিন</a>।
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          আপনার তথ্যের সুরক্ষা সম্পর্কে জানতে আমাদের <a href="/privacy" className="text-primary hover:underline">প্রাইভেসি পলিসি</a> দেখুন।
        </p>
      </section>
    </Page>
  );
}
