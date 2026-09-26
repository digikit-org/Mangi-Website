import React from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function Hero({ onOpenConsultation }) {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[560px] max-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#141413]"
    >
      {/* Background Architectural Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_right] sm:bg-center"
        style={{
          backgroundImage: `url('${hero.bgImage}')`,
        }}
      >
        {/* Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35 w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
      </div>

      {/* Floating Wall Quote from Image Mockup & Doc */}
      {/*<div className="hidden lg:block absolute top-[28%] right-10 xl:right-16 z-10 max-w-[220px] text-right pointer-events-none select-none">
        <p className="font-serif text-2xl xl:text-3xl font-light text-white/40 leading-snug tracking-wide uppercase">
          Great<br />
          Spaces<br />
          <span className="font-normal text-white/70">Build</span><br />
          Great<br />
          <span className="font-semibold text-white/90">People</span>
        </p>
      </div>*/}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 sm:pt-32 pb-6 sm:pb-8 flex-1 min-h-0 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Tagline Badge from Google Doc */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#caa368] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>{hero.badge}</span>
          </div>

          {/* Main Headline from Google Doc */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] font-medium text-white tracking-tight mb-4 sm:mb-5 whitespace-pre-line">
            {hero.title}
          </h1>

          {/* Subtitle from Google Doc */}
          <p className="font-sans text-stone-300 text-[13px] sm:text-sm md:text-[15px] leading-relaxed max-w-2xl mb-4 sm:mb-5 font-normal">
            {hero.description}
          </p>

          {/* Sector Chips from Google Doc: Offices | Retail | Hospitality | Healthcare | Commercial Spaces */}
          <div className="mb-5 sm:mb-7">
            <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#caa368] block mb-2.5">
              Specialized Commercial Sectors
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {hero.sectorChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-stone-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Dual Action Buttons from Google Doc */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenConsultation("Hero Section")}
              className="gold-btn inline-flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg font-sans font-semibold text-[11px] sm:text-xs tracking-wide group cursor-pointer shadow-xl"
            >
              <span>{hero.ctaButton}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="#projects"
              className="gold-btn-outline inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-sans font-semibold text-[11px] sm:text-xs tracking-wide cursor-pointer"
            >
              <span>{hero.secondaryButton}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pb-4 sm:pb-5 flex items-center justify-between border-t border-white/10 pt-3">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 text-[#caa368]" />
        </a>

        <div className="text-right text-xs text-stone-400 font-mono tracking-wider">
          <span className="text-[#caa368] font-bold">MANGI</span> / COMMERCIAL
          INTERIORS
        </div>
      </div>
    </section>
  );
}
