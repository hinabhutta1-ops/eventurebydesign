import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/weddings", label: "Weddings" },
  { to: "/corporate", label: "Corporate" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-onyx/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group" aria-label="EventureByDesign">
          <span className="font-serif text-xl tracking-wide text-ivory">
            Eventure<span className="text-gold">ByDesign</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold" }}
              className="text-[12px] tracking-luxe text-ivory/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 border border-gold text-gold text-[11px] tracking-luxe hover:bg-gold hover:text-onyx transition-colors"
        >
          Book Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-onyx/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-luxe text-ivory/80 hover:text-gold"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-3 border border-gold text-gold text-xs tracking-luxe"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}