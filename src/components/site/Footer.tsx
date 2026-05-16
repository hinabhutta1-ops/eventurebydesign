import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-onyx border-t border-white/5">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-ivory">
              Eventure<span className="text-gold">ByDesign</span>
            </p>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed">
              Designed experiences. Unforgettable moments. A boutique luxury event house based in Watford, serving clients across the UK and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 grid place-items-center border border-white/10 text-ivory/70 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="tracking-luxe text-gold mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-gold">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-luxe text-gold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/weddings" className="hover:text-gold">Luxury Weddings</Link></li>
              <li><Link to="/corporate" className="hover:text-gold">Corporate Events</Link></li>
              <li><Link to="/services" className="hover:text-gold">Private Celebrations</Link></li>
              <li><Link to="/services" className="hover:text-gold">Brand Activations</Link></li>
              <li><Link to="/services" className="hover:text-gold">Venue Styling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="tracking-luxe text-gold mb-5">Studio</h4>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Office 3 Iveco House, Station Road, Watford, UK, WD18 1ET</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:usaamahmeduk90@gmail.com" className="hover:text-gold break-all">usaamahmeduk90@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:07735929366" className="hover:text-gold">07735 929366</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-luxe text-ivory/40">© {new Date().getFullYear()} EventureByDesign. All rights reserved.</p>
          <p className="text-xs tracking-luxe text-ivory/40">Watford · London · United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}