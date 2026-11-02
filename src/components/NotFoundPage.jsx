import React, { useEffect } from "react";
import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  Compass,
  ArrowRight,
  Building2,
  Layers,
  Briefcase,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function NotFoundPage({ onBackHome }) {
  const brand = siteConfig?.brand || {
    contact: {
      phone: "+91 80881 96750",
      email: "info@mangiinteriors.com",
      whatsapp: "+91 80881 96750",
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "404 – Page Not Found | Mangi Interiors";
    return () => {
      document.title =
        "Mangi Interiors — Spaces That Work. Spaces That Inspire.";
    };
  }, []);

  const handleHomeClick = (e, targetHash = "") => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    if (typeof onBackHome === "function") {
      onBackHome(targetHash);
    } else {
      window.location.href = targetHash ? `/${targetHash}` : "/";
    }
  };

  const quickLinks = [
    {
      title: "Commercial Services",
      desc: "Turnkey design, fitouts & corporate spaces",
      hash: "#services",
      icon: Layers,
    },
    {
      title: "Featured Projects",
      desc: "Explore our delivered workspaces & portfolios",
      hash: "#projects",
      icon: Briefcase,
    },
    {
      title: "Industry Sectors",
      desc: "Healthcare, Hospitality, Retail & Offices",
      hash: "#industries",
      icon: Building2,
    },
    {
      title: "Our 5-Step Process",
      desc: "From concept design to final handover",
      hash: "#process",
      icon: Workflow,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2e2721] selection:bg-[#c5a059]/25 selection:text-[#2e2721]">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf6ee]/95 backdrop-blur-md border-b border-[#e7e0d4] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleHomeClick(e)}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/logo_dark.png"
              alt="Mangi Interiors logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#4a4036] hover:text-[#8c6d3b] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{brand.contact.phone}</span>
            </a>

            <button
              onClick={(e) => handleHomeClick(e)}
              className="gold-btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main 404 Hero Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-center">
        <div className="bg-white rounded-3xl p-7 sm:p-12 border border-[#e8ded0] shadow-sm text-center relative overflow-hidden">
          {/* Subtle gold gradient accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#d4a373] via-[#caa368] to-[#c5a059]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe6] border border-[#e5dcd0] text-[#8c6d3b] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Error 404 &bull; Page Not Found</span>
          </div>

          {/* Large 404 Typography */}
          <div className="font-serif text-7xl sm:text-9xl font-semibold tracking-tight text-[#c5a059]/25 select-none my-1 leading-none">
            404
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight mb-4 -mt-4 sm:-mt-6">
            The Space You Are Looking For Does Not Exist
          </h1>

          {/* Message */}
          <p className="font-sans text-[#5c5349] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            The link you entered may be invalid, expired, or the page might have
            been moved. Let us help you find the right commercial interior
            solution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={(e) => handleHomeClick(e)}
              className="gold-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>

            <button
              onClick={(e) => handleHomeClick(e, "#contact")}
              className="gold-btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#8c6d3b]" />
              <span>Contact Our Team</span>
            </button>
          </div>

          {/* Direct Assistance Row */}
          <div className="mt-8 pt-6 border-t border-[#f1ede5] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#6e6459]">
            <a
              href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-[#8c6d3b] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{brand.contact.phone}</span>
            </a>
            <a
              href={`https://wa.me/${brand.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#8c6d3b] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={`mailto:${brand.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-[#8c6d3b] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{brand.contact.email}</span>
            </a>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="py-6 border-t border-[#e7e0d4] bg-[#faf6ee]/70 text-center text-xs text-[#7a6f62]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Mangi Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={(e) => handleHomeClick(e)}
              className="hover:text-[#2e2721] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>&bull;</span>
            <button
              onClick={(e) => handleHomeClick(e, "#services")}
              className="hover:text-[#2e2721] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span>&bull;</span>
            <button
              onClick={(e) => handleHomeClick(e, "#projects")}
              className="hover:text-[#2e2721] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <span>&bull;</span>
            <button
              onClick={(e) => handleHomeClick(e, "#contact")}
              className="hover:text-[#2e2721] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
