import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf6ee]/98 backdrop-blur-md border-b border-[#e7e0d4] shadow-sm py-2.5"
          : "bg-[#faf6ee]/92 backdrop-blur-md border-b border-[#eae3d5]/80 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Services Mention */}
          <div className="flex items-center gap-3.5">
            <a href="#hero" className="flex items-center gap-3 group shrink-0">
              <img
                src="/images/logo_dark.png"
                alt="Mangi Interiors logo"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links — Plain links, NO dropdown */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-semibold text-[#3a322a] hover:text-[#c5a059] transition-colors tracking-wide hover:underline hover:underline-offset-8 hover:decoration-[#c5a059]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenConsultation("Navbar")}
              className="gold-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-sans font-semibold text-[11px] tracking-wider uppercase shadow-md group cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2e2721] hover:bg-[#ede5d6] transition-colors focus:outline-none cursor-pointer"
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf6ee] border-b border-[#e7e0d4] px-5 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
          {/* Services mentioned in mobile menu */}
          <div className="bg-[#f4efe6] rounded-xl p-3 border border-[#e8ded0]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c6d3b] block mb-1">
              Our Services
            </span>
            <span className="text-xs text-[#5c5349] font-medium block">
              Healthcare • Hospitality • Workplaces • Retail
            </span>
          </div>

          <div className="flex flex-col space-y-2 border-b border-[#e7e0d4] pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#3a322a] hover:text-[#c5a059] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation("Mobile Menu");
              }}
              className="w-full gold-btn flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-xs tracking-wider uppercase cursor-pointer"
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
