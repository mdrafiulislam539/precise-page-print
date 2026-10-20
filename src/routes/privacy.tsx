import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Layout";
import { brand } from "@/lib/brand";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "প্রাইভেসি পলিসি | তনরা আউটফিটস" },
      { name: "description", content: "তনরা আউটফিটসের প্রাইভেসি পলিসি — আপনার ব্যক্তিগত তথ্য আমরা কীভাবে সংগ্রহ, ব্যবহার ও সুরক্ষিত রাখি তা জানুন।" },
      { property: "og:title", content: "প্রাইভেসি পলিসি | তনরা আউটফিটস" },
      { property: "og:description", content: "আপনার তথ্যের নিরাপত্তাই আমাদের অঙ্গীকার।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

const summary = [
  { title: "যা সংগ্রহ করি", body: "নাম, মোবাইল নম্বর, জেলা, থানা ও ঠিকানা — অর্ডারের জন্য যা অপরিহার্য, এর বেশি কিছু নয়।" },
  { title: "যেভাবে ব্যবহার হয়", body: "কেবল অর্ডার প্রসেস, ডেলিভারি ও প্রয়োজনে আপনার সঙ্গে যোগাযোগের জন্য।" },
  { title: "যার সঙ্গে শেয়ার হয়", body: "কেবল ডেলিভারির জন্য কুরিয়ার সার্ভিসের সঙ্গে। কোনো তথ্য বিক্রি বা বিজ্ঞাপনে ব্যবহার করা হয় না।" },
];

const sections = [
  {
    title: "আমরা কোন তথ্য সংগ্রহ করি",
    body: "অর্ডার সম্পন্ন করতে আমরা কেবল অপরিহার্য তথ্য নিই — আপনার নাম, মোবাইল নম্বর, জেলা, থানা ও ঠিকানা। তনরা আউটফিটসে কেনাকাটার জন্য কোনো অ্যাকাউন্ট বা লগইনের প্রয়োজন নেই, তাই পাসওয়ার্ডের মতো সংবেদনশীল কোনো তথ্য আমরা সংগ্রহ করি না এবং ভবিষ্যতেও করব না।",
  },
  {
    title: "তথ্য কীভাবে ব্যবহার হয়",
    body: "আপনার তথ্য ব্যবহার হয় শুধুমাত্র অর্ডার প্রসেস, ডেলিভারি ও প্রয়োজনে আপনার সঙ্গে যোগাযোগের জন্য। ডেলিভারির জন্য কুরিয়ার সার্ভিসকে আপনার নাম, ফোন নম্বর ও ঠিকানা দেওয়া হয় — এ ছাড়া আপনার তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাগাভাগি বা বিজ্ঞাপনের কাজে ব্যবহার করা হয় না।",
  },
  {
    title: "পেমেন্ট তথ্যের নিরাপত্তা",
    body: "ক্যাশ অন ডেলিভারিতে কোনো অনলাইন পেমেন্ট তথ্য লাগে না। বিকাশ বা নগদে পেমেন্ট করলে লেনদেনটি সরাসরি সংশ্লিষ্ট মোবাইল ব্যাংকিং সার্ভিসের মাধ্যমে হয় — আপনার পিন বা অ্যাকাউন্টের গোপন তথ্য আমরা কখনো জানি না বা সংরক্ষণ করি না।",
  },
  {
    title: "তথ্য কোথায় ও কত দিন থাকে",
    body: "এই ওয়েবসাইটে আপনার ব্যাগ ও অর্ডারের তথ্য কেবল আপনার ব্যবহৃত ব্রাউজারে সংরক্ষিত থাকে; এগুলো স্বয়ংক্রিয়ভাবে আমাদের কাছে পাঠানো হয় না। চাইলে ব্রাউজারের সেটিংস থেকে এই তথ্য আপনি নিজেই মুছে ফেলতে পারেন। শেয়ার করা ডিভাইসে ব্যক্তিগত তথ্য দেওয়ার সময় সতর্ক থাকুন।",
  },
  {
    title: "আপনার অধিকার",
    body: "আপনার তথ্য নিয়ে আপনারই সর্বোচ্চ নিয়ন্ত্রণ রয়েছে। তথ্য সংশোধন বা মুছে ফেলার অনুরোধ করতে আমাদের ফোন, হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন — আমরা দ্রুত ব্যবস্থা নেব।",
  },
  {
    title: "নীতিমালার পরিবর্তন",
    body: "প্রয়োজনে এই প্রাইভেসি পলিসি হালনাগাদ করা হতে পারে। যেকোনো পরিবর্তন এই পেজেই প্রকাশিত হবে।",
  },
];

function Privacy() {
  return (
    <Page>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl">প্রাইভেসি পলিসি</h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          তনরা আউটফিটসে আপনার বিশ্বাসই আমাদের সবচেয়ে বড় সম্পদ। এই পলিসিতে সহজ ভাষায় ব্যাখ্যা করা
          হয়েছে — আপনার ব্যক্তিগত তথ্য আমরা কীভাবে সংগ্রহ, ব্যবহার ও সুরক্ষিত রাখি।
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
          প্রাইভেসি সংক্রান্ত প্রশ্ন বা তথ্য সংশোধনের অনুরোধের জন্য কল করুন: <a href={`tel:${brand.phone}`} className="text-primary hover:underline">{brand.phoneLabel}</a>।
          {" "}ইমেইল: <a href={`mailto:${brand.email}`} className="break-all text-primary hover:underline">{brand.email}</a> অথবা <a href={brand.whatsapp} className="text-primary hover:underline">হোয়াটসঅ্যাপে মেসেজ দিন</a>।
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          পোশাক ফেরত সংক্রান্ত নিয়ম জানতে আমাদের <a href="/return-policy" className="text-primary hover:underline">রিটার্ন পলিসি</a> দেখুন।
        </p>
      </section>
    </Page>
  );
}
