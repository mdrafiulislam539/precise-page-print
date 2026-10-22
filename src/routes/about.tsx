import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/Layout";
import logo from "@/assets/logo.png.asset.json";
import aboutImage from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "আমাদের সম্পর্কে | তনরা আউটফিটস — Style You Love, Comfort You Deserve" },
    { name: "description", content: "তনরা আউটফিটস — আপনার স্টাইল, আপনার স্বাচ্ছন্দ্য। রাফি ও তন্নীর স্বপ্ন থেকে গড়া পোশাকের ব্র্যান্ড, যেখানে পছন্দ, স্টাইল ও আরামের ওপর দেওয়া হয় সবার আগে গুরুত্ব।" },
    { property: "og:title", content: "তনরা আউটফিটস — আপনার স্টাইল, আপনার স্বাচ্ছন্দ্য" },
    { property: "og:description", content: "পোশাক শুধু সাজানোর মাধ্যম নয় — ব্যক্তিত্ব ও আত্মবিশ্বাস প্রকাশের অংশ। তনরা আউটফিটসের গল্প, লক্ষ্য ও স্বপ্ন জানুন।" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: About,
});

function About() {
  return <Page>
    <section className="border-b">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <img src={logo.url} alt="তনরা আউটফিটস" className="h-20 w-20 rounded-full" />
          <p className="mt-6 text-sm text-primary">রাফি ও তন্নীর স্বপ্ন থেকে</p>
          <h1 className="mt-3 text-3xl leading-snug sm:text-4xl">আপনার স্টাইল,<br/>আপনার স্বাচ্ছন্দ্য</h1>
          <p className="mt-5 max-w-lg leading-8 text-muted-foreground">আমরা বিশ্বাস করি, পোশাক শুধু নিজেকে সুন্দরভাবে উপস্থাপন করার মাধ্যম নয় — বরং নিজের ব্যক্তিত্ব ও আত্মবিশ্বাস প্রকাশের একটি অংশ।</p>
        </div>
        <img src={aboutImage} alt="তনরা আউটফিটসের বাছাই করা পোশাকের সংগ্রহ" width={1024} height={1024} className="w-full rounded-md border object-cover" />
      </div>
    </section>
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      <section>
        <h2 className="text-2xl text-rose-gradient">দুটি নাম, একটি স্বপ্ন</h2>
        <p className="mt-4 leading-8 text-muted-foreground">আমরা রাফি ও তন্নী — দুজনের নামের ছোঁয়া দিয়ে গড়ে তুলেছি তনরা আউটফিটস। চেয়েছি এমন একটি নির্ভরযোগ্য অনলাইন শপ, যেখানে নারীরা ঘরে বসেই নিজের পছন্দের পোশাক বেছে নিতে পারেন।</p>
        <p className="mt-4 leading-8 text-muted-foreground">ঘর থেকে শুরু হওয়া এই উদ্যোগের ভিত্তি পোশাকের প্রতি ভালোবাসা ও অনলাইন ব্যবসার অভিজ্ঞতা। পছন্দের পোশাক সহজে খুঁজে পাওয়া এবং আন্তরিক সেবা নিশ্চিত করাই আমাদের অগ্রাধিকার।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">আমরা যা বিশ্বাস করি</h2>
        <p className="mt-4 leading-8 text-muted-foreground">তাই তনরা আউটফিটসে আমরা গুরুত্ব দিই আপনার পছন্দ, স্টাইল ও আরামের ওপর। আমাদের প্রতিটি পোশাকের পেছনে রয়েছে আপনাকে সুন্দর অনুভব করানোর এবং আপনার প্রতিদিনকে আরও রঙিন করে তোলার স্বপ্ন।</p>
        <p className="mt-4 leading-8 text-muted-foreground">কারণ, সুন্দর দেখানোর পাশাপাশি আরামেও থাকতে হবে সবার আগে।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">কাদের জন্য তনরা?</h2>
        <p className="mt-4 leading-8 text-muted-foreground">যাঁরা ফ্যাশনেবল, মার্জিত ও ট্রেন্ডি পোশাক পছন্দ করেন — কলেজ-বিশ্ববিদ্যালয়ের শিক্ষার্থী, কর্মজীবী নারী কিংবা গৃহিণী — তনরা তাঁদের সবার জন্য। ওয়ান-পিস, টু-পিস ও থ্রি-পিসের বাছাই করা কালেকশনে নিজের রুচি ও ব্যক্তিত্বের সঙ্গে মানানসই পোশাক খুঁজে নেওয়ার সুযোগই আমাদের ভাবনার কেন্দ্রে।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">আমাদের লক্ষ্য</h2>
        <p className="mt-4 leading-8 text-muted-foreground">আরাম ও স্টাইলের সমন্বয়ে মানসম্মত পোশাক সাশ্রয়ী দামে বাংলাদেশের নারীদের কাছে পৌঁছে দেওয়া। পোশাকের মান ও গ্রাহকসেবায় আপস না করে প্রতিটি অর্ডারকে করা একটি আনন্দদায়ক অভিজ্ঞতা — এটাই আমাদের প্রতিশ্রুতি।</p>
      </section>
      <section className="border-t pt-8">
        <h2 className="text-2xl text-rose-gradient">আমাদের স্বপ্ন</h2>
        <p className="mt-4 leading-8 text-muted-foreground">তনরা আউটফিটসকে বাংলাদেশের একটি বিশ্বস্ত ও শীর্ষস্থানীয় অনলাইন লাইফস্টাইল ব্র্যান্ড হিসেবে গড়ে তোলা। আপনার সৌন্দর্য, আপনার স্বাচ্ছন্দ্য আর আপনার নিজস্ব স্টাইলের সঙ্গী হতে চায় তনরা আউটফিটস।</p>
        <p className="mt-6 font-display text-xl text-primary">Style You Love, Comfort You Deserve.</p>
        <p className="mt-2 leading-8 text-muted-foreground">আপনার পছন্দের পোশাকটি আজই বেছে নিন।</p>
      </section>
      <Link to="/shop" search={{}} className="btn-rose">আমাদের কালেকশন দেখুন</Link>
    </div>
  </Page>;
}
