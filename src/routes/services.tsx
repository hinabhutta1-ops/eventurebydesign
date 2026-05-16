import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, PageHero, Section, GoldButton } from "@/components/site/SiteLayout";
import heroImg from "@/assets/cta-banner.jpg";
import sw from "@/assets/service-weddings.jpg";
import sc from "@/assets/service-corporate.jpg";
import sp from "@/assets/service-private.jpg";
import sb from "@/assets/service-brand.jpg";
import sst from "@/assets/service-styling.jpg";
import spr from "@/assets/service-production.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Luxury Events by EventureByDesign" },
      { name: "description", content: "Bespoke luxury weddings, corporate events, private celebrations, brand activations, venue styling and full event production." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { id: "weddings", title: "Luxury Weddings", img: sw, body: "Bespoke ceremony and reception design from intimate elopements to multi-day celebrations across the UK and abroad. Floral architecture, candlelight, choreographed flow." },
  { id: "corporate", title: "Corporate Events", img: sc, body: "Conferences, awards ceremonies, board dinners and product launches with a level of art direction usually reserved for fashion." },
  { id: "private", title: "Private Celebrations", img: sp, body: "Birthdays, anniversaries, dinners and milestones. The most personal of events held with the same standard as our largest productions." },
  { id: "brand", title: "Brand Activations", img: sb, body: "Immersive brand experiences that invite guests inside a world. From flagship openings to runway moments and editorial dinners." },
  { id: "styling", title: "Venue Styling", img: sst, body: "Florals, lighting design, tablescapes and installations. We can style a venue you've already booked, or take the lead end-to-end." },
  { id: "production", title: "Full Event Production", img: spr, body: "Audio, video, lighting, rigging, technical direction and on-the-night management — handled in-house with senior crew." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Six disciplines, one studio."
        subtitle="Choose a single layer or commission us end-to-end."
        image={heroImg}
      />

      <Section>
        <div className="space-y-32">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/5] object-cover" />
              <div>
                <p className="tracking-luxe text-gold mb-3">0{i + 1} · Service</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">{s.title}</h2>
                <p className="mt-6 text-ivory/70 leading-relaxed">{s.body}</p>
                <div className="mt-8">
                  <Link to="/booking"><GoldButton variant="outline">Enquire</GoldButton></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}