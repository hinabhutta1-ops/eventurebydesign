import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, PageHero, Section, SectionHeader } from "@/components/site/SiteLayout";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — EventureByDesign" },
      { name: "description", content: "Meet the team behind EventureByDesign — a boutique luxury event house in Watford, UK." },
      { property: "og:title", content: "About — EventureByDesign" },
      { property: "og:description", content: "Boutique luxury event planners. Watford, UK." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { t: "Restraint", d: "We believe luxury is what you choose not to include." },
  { t: "Craft", d: "Every element is sourced, styled or made to order." },
  { t: "Discretion", d: "Privacy and confidentiality at every stage." },
  { t: "Devotion", d: "A small calendar so we can be entirely present." },
];

const team = [
  { name: "Usaamah Khan", role: "Founder & Creative Director" },
  { name: "Eliza Marlowe", role: "Head of Production" },
  { name: "Camille Rousseau", role: "Lead Stylist" },
  { name: "Daniel Ortega", role: "Senior Producer" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our story"
        title="A boutique house of designed experiences."
        subtitle="Founded in Watford, working across the UK and Europe."
        image={heroImg}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            src={aboutImg}
            alt="Team at work"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          <div>
            <p className="tracking-luxe text-gold mb-4">Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              We design events the way couture houses design garments — slowly, intentionally, by hand.
            </h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              EventureByDesign was founded on a single belief: that an event, at its best, is a piece of theatre. A composition of light, sound, scent, taste and choreography that holds your guests inside one perfect evening.
            </p>
            <p className="mt-4 text-ivory/60 leading-relaxed">
              We've spent over a decade producing weddings, galas and brand moments for clients who care about craft. Today the studio remains intentionally small — a senior team that takes on a select calendar each year.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-card/40 border-y border-white/5">
        <Section className="!py-24">
          <SectionHeader eyebrow="Values" title="The principles that guide every event" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v) => (
              <div key={v.t} className="bg-onyx p-10">
                <p className="font-serif text-2xl text-gold">{v.t}</p>
                <p className="mt-3 text-ivory/65 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <SectionHeader eyebrow="The team" title="Senior, in-house, present" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="aspect-[3/4] bg-card mb-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-card to-onyx flex items-end justify-center pb-6">
                  <span className="font-serif text-6xl text-gold/30">{m.name[0]}</span>
                </div>
              </div>
              <p className="font-serif text-xl">{m.name}</p>
              <p className="text-xs tracking-luxe text-ivory/50 mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}