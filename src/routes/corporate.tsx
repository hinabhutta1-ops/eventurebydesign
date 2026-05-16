import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section, SectionHeader, GoldButton } from "@/components/site/SiteLayout";
import sc from "@/assets/service-corporate.jpg";
import sb from "@/assets/service-brand.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/corporate")({
  component: Corporate,
  head: () => ({
    meta: [
      { title: "Corporate Events & Brand Activations — EventureByDesign" },
      { name: "description", content: "Premium corporate events, awards, conferences and brand activations produced end-to-end." },
      { property: "og:url", content: "/corporate" },
    ],
    links: [{ rel: "canonical", href: "/corporate" }],
  }),
});

function Corporate() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Corporate"
        title="Corporate events with the eye of an editorial team."
        subtitle="Conferences, galas, awards and brand activations."
        image={sc}
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Awards & Galas", d: "Black-tie production for 100–1,000 guests." },
            { t: "Conferences", d: "Plenary, breakouts, registration and broadcast." },
            { t: "Brand Activations", d: "Launches, runway moments and editorial dinners." },
          ].map((c) => (
            <div key={c.t} className="bg-card/60 border border-white/5 p-10">
              <p className="font-serif text-2xl text-gold">{c.t}</p>
              <p className="mt-3 text-ivory/65 text-sm leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-card/40 border-y border-white/5">
        <Section className="!py-24">
          <SectionHeader eyebrow="Selected work" title="Built for brands that demand more" />
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {[sc, p3, p2, sb].slice(0, 3).map((img, i) => (
              <img key={i} src={img} alt="" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            ))}
          </div>
          <div className="mt-12 text-center"><Link to="/contact"><GoldButton>Discuss Your Brief</GoldButton></Link></div>
        </Section>
      </section>
    </SiteLayout>
  );
}