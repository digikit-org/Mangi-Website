import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#141413]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-1.5"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/images/logo_light.png"
              alt="Mangi Interiors logo"
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] xl:text-xs font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide hover:underline hover:underline-offset-8 hover:decoration-[#c5a059]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => onOpenConsultation("Navbar")}
              className="gold-btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-sans font-semibold text-[11px] tracking-wider uppercase shadow-md group cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141413]/98 backdrop-blur-xl border-b border-white/10 px-5 pt-4 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2.5 border-b border-white/10 pb-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-200 hover:text-[#caa368] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={`tel:${siteConfig.brand.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-300 py-2 border border-white/10 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#caa368]" />
              <span>Call: {siteConfig.brand.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation("Mobile Menu");
              }}
              className="w-full gold-btn flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-xs tracking-wider uppercase"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
