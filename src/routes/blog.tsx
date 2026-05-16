import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Journal — EventureByDesign" },
      { name: "description", content: "Notes, ideas and design stories from the EventureByDesign studio." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const posts = [
  { img: p5, title: "Composing a candlelit wedding in summer", excerpt: "Notes from a recent garden wedding under string light and stars.", cat: "Weddings", date: "May 2025" },
  { img: p2, title: "When brand becomes experience", excerpt: "Designing activations that translate brand into atmosphere.", cat: "Brand", date: "Apr 2025" },
  { img: p4, title: "The art of an intimate dinner", excerpt: "How small guest counts unlock surprising creative freedom.", cat: "Private", date: "Mar 2025" },
  { img: p3, title: "Producing an awards gala for 600", excerpt: "What it takes behind the curtain of a black-tie evening.", cat: "Corporate", date: "Feb 2025" },
  { img: p1, title: "Florals as architecture", excerpt: "Treating blooms as structure rather than decoration.", cat: "Design", date: "Jan 2025" },
  { img: p6, title: "On location: a yacht in the South of France", excerpt: "Logistics, lighting and sea air at golden hour.", cat: "Private", date: "Dec 2024" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Journal" title="Design notes from the studio." image={p2} />
      <Section>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[5/4] overflow-hidden mb-6">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <p className="tracking-luxe text-gold/80 text-[10px]">{p.cat} · {p.date}</p>
              <h3 className="font-serif text-2xl mt-3 group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="mt-2 text-ivory/60 text-sm leading-relaxed">{p.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}