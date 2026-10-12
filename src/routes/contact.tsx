import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Music2 } from "lucide-react";
import { Page } from "@/components/Layout";
import { brand } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "যোগাযোগ ও ঠিকানা | তনরা আউটফিটস, শ্যামলী, ঢাকা" },
    { name: "description", content: "তনরা আউটফিটসের সঙ্গে ফোন, হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন। ঠিকানা: ৩৫/এফ/৬/এ, রোড-০২, শ্যামলী, ঢাকা, ১২০৭।" },
    { property: "og:title", content: "যোগাযোগ করুন — তনরা আউটফিটস" },
    { property: "og:description", content: "পোশাক, সাইজ বা অর্ডার নিয়ে প্রশ্ন? তনরা আউটফিটসের ফোন, হোয়াটসঅ্যাপ ও ইমেইল এখানে পাবেন।" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Contact,
});

function Contact() {
  const contacts = [
    { name: "ফোন", value: brand.phoneLabel, href: `tel:${brand.phone}`, icon: Phone },
    { name: "হোয়াটসঅ্যাপ", value: brand.phoneLabel, href: brand.whatsapp, icon: MessageCircle },
    { name: "ইমেইল", value: brand.email, href: `mailto:${brand.email}`, icon: Mail },
  ];
  return <Page>
    <section className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm text-primary">তনরা আউটফিটস</p>
      <h1 className="mt-3 text-3xl sm:text-4xl">আমাদের সঙ্গে যোগাযোগ করুন</h1>
      <p className="mt-4 max-w-2xl leading-8 text-muted-foreground">পোশাকের সাইজ, কালেকশন কিংবা অর্ডার নিয়ে কোনো প্রশ্ন আছে? আমাদের ফোন করুন, হোয়াটসঅ্যাপে মেসেজ দিন অথবা ইমেইল পাঠান।</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {contacts.map(({ name, value, href, icon: Icon }) => <a key={name} href={href} className="flex min-w-0 items-start gap-4 rounded-lg border bg-card p-6 transition hover:border-primary">
          <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <div className="min-w-0"><h2 className="text-lg">{name}</h2><p className="mt-2 break-all text-muted-foreground">{value}</p></div>
        </a>)}
        <div className="flex items-start gap-4 rounded-lg border bg-card p-6">
          <MapPin className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <div><h2 className="text-lg">আমাদের ঠিকানা</h2><p className="mt-2 leading-7 text-muted-foreground">{brand.address}</p></div>
        </div>
      </div>
      <section className="mt-12 border-t pt-8">
        <h2 className="text-2xl">আমাদের সঙ্গে থাকুন</h2>
        <div className="mt-5 flex flex-wrap gap-6">
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Instagram size={20} aria-hidden="true" />ইনস্টাগ্রাম</a>
          <a href={brand.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline"><Music2 size={20} aria-hidden="true" />টিকটক</a>
        </div>
      </section>
    </section>
  </Page>;
}