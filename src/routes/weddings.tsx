import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, PageHero, Section, SectionHeader, GoldButton } from "@/components/site/SiteLayout";
import sw from "@/assets/service-weddings.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";

export const Route = createFileRoute("/weddings")({
  component: Weddings,
  head: () => ({
    meta: [
      { title: "Luxury Weddings — EventureByDesign" },
      { name: "description", content: "Bespoke luxury weddings designed and produced in the UK and abroad." },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
});

function Weddings() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Weddings"
        title="A wedding is a piece of theatre. We compose every act."
        subtitle="From private elopements to multi-day celebrations across Europe."
        image={sw}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="tracking-luxe text-gold mb-4">Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Designed for one couple. Always.</h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              We never reuse a moodboard. Every wedding starts as a blank page, shaped by who you are, where you've come from, and the kind of evening you want your guests to remember.
            </p>
            <ul className="mt-8 space-y-3 text-ivory/75">
              {[
                "Creative direction & moodboards",
                "Floral architecture & lighting design",
                "Choreography of the day, minute by minute",
                "Senior on-site team of producers and stylists",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="text-gold">—</span>{t}</li>
              ))}
            </ul>
            <div className="mt-10"><Link to="/booking"><GoldButton>Begin Planning</GoldButton></Link></div>
          </div>
          <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} src={p1} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
        </div>
      </Section>

      <section className="bg-card/40 border-y border-white/5">
        <Section className="!py-24">
          <SectionHeader eyebrow="Inspiration" title="Recent celebrations" />
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {[p1, p4, p5].map((img, i) => (
              <img key={i} src={img} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            ))}
          </div>
        </Section>
      </section>
    </SiteLayout>
  );
}