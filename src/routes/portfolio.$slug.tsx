import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, Section, GoldButton } from "@/components/site/SiteLayout";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const data: Record<string, { title: string; cat: string; date: string; venue: string; cover: string; gallery: string[]; story: string }> = {
  mayfair: { title: "Mayfair Manor Wedding", cat: "Weddings", date: "Spring 2024", venue: "Mayfair, London", cover: p1, gallery: [p1, p4, p5], story: "An intimate black-tie wedding inside a private Mayfair manor. Suspended floral architecture, hand-calligraphed menus and a candle-lit reception built to feel like a Renaissance painting." },
  atelier: { title: "Atelier Brand Launch", cat: "Brand", date: "Autumn 2024", venue: "Shoreditch, London", cover: p2, gallery: [p2, p3, p6], story: "An immersive activation for a heritage couture house — an architectural set, a 40-piece string quartet and an editorial dinner for 120 press and clients." },
  awards: { title: "Annual Awards Gala", cat: "Corporate", date: "Winter 2024", venue: "The Savoy, London", cover: p3, gallery: [p3, p1, p2], story: "A 600-guest awards gala with broadcast-grade production, custom trophies and a six-course tasting menu by a Michelin-starred kitchen." },
  hampstead: { title: "Hampstead Anniversary", cat: "Private", date: "Summer 2024", venue: "Hampstead, London", cover: p4, gallery: [p4, p5, p1], story: "A 25th anniversary dinner reimagined as a candlelit garden tableau for thirty of the family's closest friends." },
  surrey: { title: "Surrey Garden Wedding", cat: "Weddings", date: "Summer 2024", venue: "Surrey countryside", cover: p5, gallery: [p5, p1, p4], story: "A romantic outdoor wedding at golden hour beneath cascading string lights, anchored by a hand-built timber arbour and a 200-foot single farm-table." },
  riviera: { title: "Riviera Yacht Soirée", cat: "Private", date: "Spring 2025", venue: "Côte d'Azur", cover: p6, gallery: [p6, p4, p5], story: "A private 50-guest celebration aboard a chartered superyacht — a sunset reception, plated dinner under the stars and a fireworks finale off the coast." },
};

export const Route = createFileRoute("/portfolio/$slug")({
  component: ProjectPage,
  head: ({ params }) => {
    const item = data[params.slug];
    const title = item ? `${item.title} — EventureByDesign` : "Project — EventureByDesign";
    return {
      meta: [
        { title },
        { name: "description", content: item?.story.slice(0, 155) ?? "Project case study by EventureByDesign." },
        { property: "og:url", content: `/portfolio/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
    };
  },
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const item = data[slug];
  if (!item) {
    return (
      <SiteLayout>
        <Section>
          <h1 className="font-serif text-4xl">Project not found</h1>
          <p className="mt-4 text-ivory/60">The project you are looking for does not exist.</p>
          <div className="mt-8"><Link to="/portfolio"><GoldButton variant="outline">Back to portfolio</GoldButton></Link></div>
        </Section>
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <img src={item.cover} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-onyx/10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative h-full container-x flex flex-col justify-end pb-20"
        >
          <p className="tracking-luxe text-gold mb-4">{item.cat}</p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-4xl">{item.title}</h1>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl text-sm">
            <div><p className="tracking-luxe text-ivory/40 mb-1">Date</p><p>{item.date}</p></div>
            <div><p className="tracking-luxe text-ivory/40 mb-1">Venue</p><p>{item.venue}</p></div>
            <div><p className="tracking-luxe text-ivory/40 mb-1">Discipline</p><p>{item.cat}</p></div>
          </div>
        </motion.div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-ivory/85">{item.story}</p>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {item.gallery.map((img, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              src={img}
              alt=""
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
          ))}
        </div>
        <div className="mt-16 text-center"><Link to="/portfolio"><GoldButton variant="outline">← All Projects</GoldButton></Link></div>
      </Section>
    </SiteLayout>
  );
}