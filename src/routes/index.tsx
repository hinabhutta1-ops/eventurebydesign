import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Compass, Pencil, ClipboardList, Star, Quote } from "lucide-react";
import { SiteLayout, Section, SectionHeader, GoldButton } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-wedding.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaImg from "@/assets/cta-banner.jpg";
import sw from "@/assets/service-weddings.jpg";
import sc from "@/assets/service-corporate.jpg";
import sp from "@/assets/service-private.jpg";
import sb from "@/assets/service-brand.jpg";
import sst from "@/assets/service-styling.jpg";
import spr from "@/assets/service-production.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EventureByDesign — Luxury Event Planning in Watford, UK" },
      { name: "description", content: "Boutique luxury event planners crafting cinematic weddings, corporate galas and private celebrations across the UK." },
      { property: "og:title", content: "EventureByDesign — Luxury Event Planning" },
      { property: "og:description", content: "Designed experiences. Unforgettable moments." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { title: "Luxury Weddings", desc: "Bespoke ceremonies & receptions designed with editorial precision.", img: sw },
  { title: "Corporate Events", desc: "Conferences, galas and award nights with flawless execution.", img: sc },
  { title: "Private Celebrations", desc: "Birthdays, anniversaries and intimate milestones, beautifully held.", img: sp },
  { title: "Brand Activations", desc: "Immersive launches that translate brand vision into experience.", img: sb },
  { title: "Venue Styling", desc: "Florals, lighting and tablescapes composed to your story.", img: sst },
  { title: "Full Event Production", desc: "End-to-end production: technical, creative and on-the-night.", img: spr },
];

const portfolio = [
  { img: p1, title: "Mayfair Manor Wedding" },
  { img: p2, title: "Atelier Brand Launch" },
  { img: p3, title: "Annual Awards Gala" },
  { img: p4, title: "Hampstead Anniversary" },
  { img: p5, title: "Surrey Garden Wedding" },
  { img: p6, title: "Riviera Yacht Soirée" },
];

const testimonials = [
  { name: "Olivia & James", role: "Wedding, Cliveden House", text: "Every moment felt cinematic. They translated our vision into something more beautiful than we imagined." },
  { name: "Marcus Hale", role: "CMO, Aurelius Group", text: "The most refined production team we've worked with — calm, precise, and visually extraordinary." },
  { name: "Anya Petrov", role: "Private Client", text: "Effortless luxury. Every detail thought of, every guest spellbound." },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img src={heroImg} alt="Luxury wedding ballroom" width={1920} height={1280} className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/40 to-onyx" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative h-full container-x flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tracking-luxe text-gold mb-6"
        >
          EventureByDesign · Watford UK
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] max-w-5xl text-ivory"
        >
          Luxury Events <br />
          <span className="italic gold-text-gradient">Crafted to Perfection</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-8 text-lg md:text-xl text-ivory/75 max-w-xl leading-relaxed"
        >
          We design immersive weddings, corporate events and unforgettable celebrations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/booking"><GoldButton>Start Planning <ArrowRight className="w-3.5 h-3.5 ml-2" /></GoldButton></Link>
          <Link to="/portfolio"><GoldButton variant="outline">Explore Portfolio</GoldButton></Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/50"
      >
        <span className="tracking-luxe text-[10px]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What we do"
        title="A complete house of design & production"
        description="From the first sketch to the final encore, every layer of your event is composed in-house with restraint, intention and rare materials."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative overflow-hidden bg-card border border-white/5"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="font-serif text-2xl text-ivory">{s.title}</h3>
              <p className="mt-2 text-sm text-ivory/70 leading-relaxed">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-gold text-xs tracking-luxe opacity-0 group-hover:opacity-100 transition-opacity">
                Discover <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function AboutPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img src={aboutImg} alt="Founder of EventureByDesign" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-onyx px-8 py-6 max-w-[260px]">
            <p className="font-serif text-3xl">12+</p>
            <p className="tracking-luxe text-[10px] mt-1">Years orchestrating extraordinary events</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="tracking-luxe text-gold mb-4">About the studio</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ivory">
            Turning visions into <em className="gold-text-gradient not-italic">extraordinary experiences</em>.
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed">
            EventureByDesign is a boutique luxury event house headquartered in Watford. We partner with discerning private and corporate clients to craft singular events — from London townhouses to Mediterranean villas — where every detail is deliberate, every moment cinematic.
          </p>
          <p className="mt-4 text-ivory/60 leading-relaxed">
            We work in small numbers, by design. A select calendar each year ensures our team can pour itself completely into your story.
          </p>
          <div className="mt-8">
            <Link to="/about"><GoldButton variant="outline">Learn More</GoldButton></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <Section>
      <SectionHeader eyebrow="Selected work" title="A portfolio of moments" description="A glimpse into recent celebrations — each unique in mood, scale and material." />
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {portfolio.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative overflow-hidden aspect-[4/5]"
          >
            <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/70 transition-colors duration-500 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100">
              <p className="font-serif text-2xl text-ivory">{p.title}</p>
              <p className="mt-3 text-xs tracking-luxe text-gold">View Project</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/portfolio"><GoldButton variant="outline">View Full Portfolio</GoldButton></Link>
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    { icon: Sparkles, title: "Consultation", desc: "We listen deeply to understand your vision, guests and ambitions." },
    { icon: Pencil, title: "Design", desc: "A bespoke creative direction — moodboards, sketches and renders." },
    { icon: ClipboardList, title: "Planning", desc: "Suppliers, logistics, run-sheets and meticulous budgeting." },
    { icon: Compass, title: "Execution", desc: "On-the-day production led by senior producers, end to end." },
  ];
  return (
    <section className="bg-card/40 border-y border-white/5">
      <Section className="!py-24">
        <SectionHeader eyebrow="The process" title="A considered four-step journey" />
        <div className="mt-16 grid gap-px md:grid-cols-4 bg-white/5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-onyx p-10 text-center"
            >
              <div className="w-14 h-14 mx-auto grid place-items-center border border-gold/40 text-gold rounded-full">
                <s.icon className="w-5 h-5" />
              </div>
              <p className="tracking-luxe text-gold/70 mt-6">0{i + 1}</p>
              <h3 className="font-serif text-2xl mt-2 text-ivory">{s.title}</h3>
              <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}

function Testimonials() {
  return (
    <Section>
      <SectionHeader eyebrow="Client voices" title="Trusted by those who expect more" />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="bg-card/60 border border-white/5 p-10"
          >
            <Quote className="text-gold w-6 h-6" />
            <blockquote className="mt-6 font-serif text-xl leading-snug text-ivory/90">
              "{t.text}"
            </blockquote>
            <div className="mt-6 flex gap-1 text-gold">
              {[...Array(5)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            <figcaption className="mt-4">
              <p className="text-ivory">{t.name}</p>
              <p className="text-xs tracking-luxe text-ivory/50 mt-1">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

function CTABanner() {
  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <img src={ctaImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-onyx/75" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative h-full container-x flex flex-col items-center justify-center text-center"
      >
        <p className="tracking-luxe text-gold mb-4">Begin your story</p>
        <h2 className="font-serif text-4xl md:text-6xl max-w-3xl text-ivory leading-tight">
          Ready to create something <em className="gold-text-gradient not-italic">extraordinary</em>?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/booking"><GoldButton>Book Consultation</GoldButton></Link>
          <Link to="/contact"><GoldButton variant="outline">Contact Us</GoldButton></Link>
        </div>
      </motion.div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    { img: p5, title: "Composing a candlelit wedding in summer", excerpt: "Notes from a recent garden wedding under string light and stars." },
    { img: p2, title: "When brand becomes experience", excerpt: "Designing activations that translate brand into atmosphere." },
    { img: p4, title: "The art of an intimate dinner", excerpt: "How small guest counts unlock surprising creative freedom." },
  ];
  return (
    <Section>
      <SectionHeader eyebrow="Journal" title="Notes from the studio" />
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[5/4] overflow-hidden mb-6">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <p className="tracking-luxe text-gold/80 text-[10px]">Journal · 5 min read</p>
            <h3 className="font-serif text-2xl mt-3 group-hover:text-gold transition-colors">{p.title}</h3>
            <p className="mt-2 text-ivory/60 text-sm leading-relaxed">{p.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Newsletter() {
  return (
    <section className="border-t border-white/5">
      <Section className="!py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="tracking-luxe text-gold mb-3">Subscribe</p>
          <h2 className="font-serif text-3xl md:text-4xl">Stay close to the studio</h2>
          <p className="mt-3 text-ivory/60">Receive occasional dispatches on new work and design notes.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              window.location.href = `mailto:usaamahmeduk90@gmail.com?subject=Newsletter%20Subscribe&body=Please%20subscribe%20${encodeURIComponent(String(fd.get("email") ?? ""))}`;
            }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              required
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-white/15 focus:border-gold outline-none px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/40 transition-colors"
            />
            <GoldButton type="submit">Subscribe</GoldButton>
          </form>
        </div>
      </Section>
    </section>
  );
}

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <AboutPreview />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTABanner />
      <BlogPreview />
      <Newsletter />
    </SiteLayout>
  );
}
