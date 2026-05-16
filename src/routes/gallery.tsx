import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import sw from "@/assets/service-weddings.jpg";
import sc from "@/assets/service-corporate.jpg";
import sst from "@/assets/service-styling.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — EventureByDesign" },
      { name: "description", content: "Editorial gallery of recent luxury events." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const imgs = [p1, p2, sw, p3, p4, sst, p5, sc, p6];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="A visual journal." subtitle="Moments from recent events." image={p1} />
      <Section>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((img, i) => (
            <motion.img
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.05 }}
              src={img}
              alt=""
              loading="lazy"
              className="w-full mb-4 break-inside-avoid"
              style={{ aspectRatio: i % 2 ? "4/5" : "1/1" }}
            />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}