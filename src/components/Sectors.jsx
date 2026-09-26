import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Sectors({ onSelectSector }) {
  const { badge, title, description, ctaText, items } = siteConfig.sectors;

  return (
    <section id="sectors" className="w-full py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6 max-w-xl">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#c5a059] transition-colors whitespace-nowrap group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 8 Sectors Grid (2 rows of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((sector) => (
            <div
              key={sector.id}
              onClick={() => onSelectSector(sector)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Background Photo */}
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

              {/* Bottom Details */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide group-hover:text-[#caa368] transition-colors">
                  {sector.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#c5a059] group-hover:border-[#c5a059] group-hover:text-[#141413] transition-all flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
