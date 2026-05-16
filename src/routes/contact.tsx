import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout, PageHero, Section, GoldButton } from "@/components/site/SiteLayout";
import heroImg from "@/assets/service-styling.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — EventureByDesign" },
      { name: "description", content: "Get in touch with EventureByDesign — luxury event planners based in Watford, UK." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's begin a conversation." subtitle="We respond to every enquiry personally, usually within 48 hours." image={heroImg} />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl">Studio</h2>
            <ul className="mt-8 space-y-5 text-ivory/80">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-gold mt-0.5" /><span>Office 3 Iveco House, Station Road,<br/>Watford, UK, WD18 1ET</span></li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-gold mt-0.5" /><a className="hover:text-gold break-all" href="mailto:usaamahmeduk90@gmail.com">usaamahmeduk90@gmail.com</a></li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-gold mt-0.5" /><a className="hover:text-gold" href="tel:07735929366">07735 929366</a></li>
            </ul>
            <div className="mt-10 aspect-[4/3] overflow-hidden border border-white/10">
              <iframe
                title="Studio location map"
                src="https://www.google.com/maps?q=Iveco+House+Station+Road+Watford+WD18+1ET&output=embed"
                className="w-full h-full grayscale opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Enquiry from ${fd.get("name") ?? ""}`);
              const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\n\n${fd.get("message")}`);
              window.location.href = `mailto:usaamahmeduk90@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="bg-card/60 border border-white/5 p-10"
          >
            <h2 className="font-serif text-3xl">Send a message</h2>
            <div className="mt-8 grid gap-5">
              <Field name="name" label="Full name" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="email" label="Email" type="email" required />
                <Field name="phone" label="Phone" />
              </div>
              <Field name="message" label="How can we help?" textarea required />
              <div className="pt-2 flex items-center gap-4">
                <GoldButton type="submit">{sent ? "Opening Mail…" : "Send Enquiry"}</GoldButton>
                <p className="text-xs text-ivory/40">We usually reply within 48 hours.</p>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ name, label, required, type = "text", textarea }: { name: string; label: string; required?: boolean; type?: string; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/40 transition-colors";
  return (
    <label className="block">
      <span className="block tracking-luxe text-ivory/50 mb-2">{label}{required && <span className="text-gold"> *</span>}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}