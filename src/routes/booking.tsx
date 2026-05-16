import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section, GoldButton } from "@/components/site/SiteLayout";
import heroImg from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book a Consultation — EventureByDesign" },
      { name: "description", content: "Submit your event enquiry. Date, budget, guests, type — we'll respond within 48 hours." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

function BookingPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Booking" title="Begin with a private consultation." subtitle="Share a few details and we'll be in touch with availability." image={heroImg} />
      <Section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const body = encodeURIComponent(
              [...fd.entries()].map(([k, v]) => `${k}: ${v}`).join("\n"),
            );
            window.location.href = `mailto:usaamahmeduk90@gmail.com?subject=Event%20Enquiry&body=${body}`;
            setSent(true);
          }}
          className="max-w-3xl mx-auto bg-card/60 border border-white/5 p-10 md:p-14"
        >
          <h2 className="font-serif text-3xl">Event enquiry</h2>
          <p className="mt-2 text-ivory/60 text-sm">Limited bookings available — we accept a select calendar each year.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Field name="name" label="Full name" required />
            <Field name="email" label="Email" type="email" required />
            <Field name="phone" label="Phone" />
            <Select name="type" label="Event type" options={["Wedding", "Corporate", "Private Celebration", "Brand Activation", "Other"]} required />
            <Field name="date" label="Preferred date" type="date" />
            <Field name="guests" label="Guest count" type="number" />
            <Select name="budget" label="Indicative budget" options={["Under £25k", "£25k–£75k", "£75k–£150k", "£150k–£500k", "£500k+"]} />
            <Field name="venue" label="Venue or location" />
          </div>
          <div className="mt-6">
            <Field name="message" label="Tell us about your vision" textarea />
          </div>
          <div className="mt-10 flex items-center gap-5">
            <GoldButton type="submit">{sent ? "Opening Mail…" : "Submit Enquiry"}</GoldButton>
            <p className="text-xs text-ivory/40">All enquiries treated in strict confidence.</p>
          </div>
        </form>
      </Section>
    </SiteLayout>
  );
}

function Field({ name, label, required, type = "text", textarea }: { name: string; label: string; required?: boolean; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/40 transition-colors";
  return (
    <label className="block">
      <span className="block tracking-luxe text-ivory/50 mb-2">{label}{required && <span className="text-gold"> *</span>}</span>
      {textarea ? <textarea name={name} required={required} rows={5} className={cls} /> : <input name={name} type={type} required={required} className={cls} />}
    </label>
  );
}

function Select({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="block tracking-luxe text-ivory/50 mb-2">{label}{required && <span className="text-gold"> *</span>}</span>
      <select name={name} required={required} defaultValue="" className="w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-ivory transition-colors">
        <option value="" disabled className="bg-onyx">Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-onyx">{o}</option>)}
      </select>
    </label>
  );
}