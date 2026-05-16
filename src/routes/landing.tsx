import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Star, ShieldCheck, Award } from "lucide-react";
import { SiteLayout, GoldButton, Section } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-wedding.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/landing")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Plan Your Luxury Event — EventureByDesign" },
      { name: "description", content: "Limited 2025 bookings. Submit your details and a senior planner will be in touch within 48 hours." },
      { property: "og:url", content: "/landing" },
    ],
    links: [{ rel: "canonical", href: "/landing" }],
  }),
});

function Landing() {
  return (
    <SiteLayout>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-onyx/75" />
        <div className="relative container-x grid lg:grid-cols-2 gap-16 items-center py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="tracking-luxe text-gold mb-6">Limited 2025 bookings</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Your event, designed by the team behind the UK's most talked-about celebrations.
            </h1>
            <p className="mt-6 text-lg text-ivory/70 max-w-xl">
              Tell us about your event. A senior planner will respond within 48 hours with availability and next steps.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                { Icon: Sparkles, t: "End-to-end creative direction" },
                { Icon: ShieldCheck, t: "Discreet, in-house production" },
                { Icon: Award, t: "12+ years, 200+ events" },
                { Icon: Star, t: "5★ rated by our clients" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex gap-3 items-center text-ivory/85"><Icon className="w-4 h-4 text-gold" />{t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const body = encodeURIComponent([...fd.entries()].map(([k, v]) => `${k}: ${v}`).join("\n"));
              window.location.href = `mailto:usaamahmeduk90@gmail.com?subject=Landing%20Lead&body=${body}`;
            }}
            className="bg-onyx/85 backdrop-blur border border-white/10 p-10"
          >
            <p className="tracking-luxe text-gold">Reserve a consultation</p>
            <h2 className="font-serif text-3xl mt-2">Begin with a private call</h2>
            <div className="mt-8 grid gap-5">
              <input name="name" required placeholder="Full name" className="bg-transparent border-b border-white/15 focus:border-gold outline-none py-3" />
              <input name="email" required type="email" placeholder="Email" className="bg-transparent border-b border-white/15 focus:border-gold outline-none py-3" />
              <input name="phone" placeholder="Phone" className="bg-transparent border-b border-white/15 focus:border-gold outline-none py-3" />
              <input name="event" placeholder="Event type & date" className="bg-transparent border-b border-white/15 focus:border-gold outline-none py-3" />
              <GoldButton type="submit">Request Consultation</GoldButton>
              <p className="text-xs text-gold/80 tracking-luxe text-center">⚜ Limited bookings available for 2025</p>
            </div>
          </motion.form>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { img: p2, t: "Designed atmosphere", d: "Lighting, scent, sound, choreography — every sense composed." },
            { img: p3, t: "Senior team", d: "You're never handed off. The producer in your first call leads on the night." },
            { img: heroImg, t: "Discretion guaranteed", d: "Total privacy. Many of our clients are private individuals and brands you know." },
          ].map((b) => (
            <div key={b.t}>
              <img src={b.img} alt="" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <h3 className="font-serif text-2xl mt-6">{b.t}</h3>
              <p className="mt-2 text-ivory/65">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/booking"><GoldButton>Reserve Your Consultation</GoldButton></Link>
        </div>
      </Section>
    </SiteLayout>
  );
}