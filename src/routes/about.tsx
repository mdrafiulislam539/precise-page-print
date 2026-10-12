import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/Layout";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "আমাদের গল্প, লক্ষ্য ও স্বপ্ন | তনরা আউটফিটস" },
    { name: "description", content: "রাফি ও টনির স্বপ্ন থেকে তনরা আউটফিটসের পথচলা। বাংলাদেশের নারীদের জন্য সাশ্রয়ী, মার্জিত ও ট্রেন্ডি পোশাক নিয়ে আমাদের লক্ষ্য ও স্বপ্ন জানুন।" },
    { property: "og:title", content: "তনরা আউটফিটস — আমাদের পথচলা" },
    { property: "og:description", content: "দুজন মানুষের স্বপ্ন, প্রতিটি নারীর নিজের স্টাইল। রাফি ও টনির গড়া তনরা আউটফিটসের গল্প।" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: About,
});

function About() {
  return <Page>
    <section className="border-b">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <img src={logo.url} alt="তনরা আউটফিটস" className="mx-auto h-28 w-28 rounded-full" />
        <p className="mt-6 text-sm text-primary">রাফি ও টনির স্বপ্ন থেকে</p>
        <h1 className="mt-3 text-3xl leading-snug sm:text-4xl">তনরা আউটফিটসের পথচলা</h1>
        <p className="mt-5 leading-8 text-muted-foreground">প্রতিটি স্বপ্নের পেছনে থাকে একটি গল্প। আমাদের গল্পটা শুরু ভালোবাসা আর নতুন কিছু করার তাগিদ থেকে—নিজেদের মতো করে একটি পোশাকের ব্র্যান্ড গড়ে তোলার স্বপ্ন নিয়ে।</p>
      </div>
    </section>
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      <section>
        <h2 className="text-2xl text-rose-gradient">দুটি নাম, একটি স্বপ্ন</h2>
        <p className="mt-4 leading-8 text-muted-foreground">আমরা রাফি ও টনি—দুজন মিলে আমাদের নামের ছোঁয়া দিয়ে গড়ে তুলেছি তনরা আউটফিটস। চেয়েছি এমন একটি নির্ভরযোগ্য অনলাইন শপ, যেখানে নারীরা ঘরে বসেই নিজের পছন্দের পোশাক বেছে নিতে পারেন।</p>
        <p className="mt-4 leading-8 text-muted-foreground">একটি ল্যাপটপ, ই-কমার্স ও ড্রপশিপিংয়ের কিছু জ্ঞান আর পোশাকের প্রতি ভালোবাসা নিয়ে ঘর থেকেই শুরু। রাত জেগে পরিশ্রম, অনলাইনে শেখা আর ছোট ছোট উদ্যোগের মধ্য দিয়ে সেই স্বপ্নের পথচলা।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">কাদের জন্য তনরা?</h2>
        <p className="mt-4 leading-8 text-muted-foreground">যাঁরা ফ্যাশনেবল, মার্জিত ও ট্রেন্ডি পোশাক পছন্দ করেন—কলেজ-বিশ্ববিদ্যালয়ের শিক্ষার্থী, কর্মজীবী নারী কিংবা গৃহিণী—তনরা তাঁদের সবার জন্য। শাড়ি, থ্রি-পিস, কুর্তি ও ওয়েস্টার্ন ওয়্যারে নিজের রুচি ও ব্যক্তিত্বের সঙ্গে মানানসই পোশাক খুঁজে নেওয়ার সুযোগই আমাদের ভাবনার কেন্দ্রে।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">আমাদের লক্ষ্য</h2>
        <p className="mt-4 leading-8 text-muted-foreground">সাশ্রয়ী দামে স্টাইলিশ ও মানসম্মত পোশাক বাংলাদেশের নারীদের কাছে পৌঁছে দেওয়া। পোশাকের মান ও কাস্টমার সার্ভিসে আপস না করে একটি বিশ্বস্ত অনলাইন কেনাকাটার অভিজ্ঞতা তৈরি করাই আমাদের প্রধান লক্ষ্য।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">আমাদের স্বপ্ন</h2>
        <p className="mt-4 leading-8 text-muted-foreground">তনরা আউটফিটসকে বাংলাদেশের একটি বিশ্বস্ত ও শীর্ষস্থানীয় অনলাইন লাইফস্টাইল ব্র্যান্ড হিসেবে গড়ে তোলা। আমরা চাই প্রতিটি নারী তাঁর পোশাকে নিজের আলাদা সৌন্দর্য ও আত্মবিশ্বাস খুঁজে পান।</p>
        <p className="mt-6 font-display text-xl text-primary">স্টাইল সবার জন্য। আপনার স্টাইল, আমাদের অগ্রাধিকার।</p>
      </section>
      <Link to="/shop" search={{}} className="btn-rose">আমাদের কালেকশন দেখুন</Link>
    </div>
  </Page>;
}