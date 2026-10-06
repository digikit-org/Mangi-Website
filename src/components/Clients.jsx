import React from 'react';
import { siteConfig } from '../data/siteData';

export default function Clients() {
  const clientsData = siteConfig.clients || {
    badge: "OUR CLIENTS",
    title: "Trusted by Leading Brands",
    description: "Long-term partnerships built on trust and performance.",
    brands: [],
  };
  const { badge, title, description, brands = [] } = clientsData;

  return (
    <section className="w-full py-10 sm:py-14 bg-white border-t border-[#eae3d5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Infinite brand marquee — auto-scrolls, pauses on hover */}
      <div className="marquee-wrap relative overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-track flex w-max py-4" style={{ animationDuration: '32s' }}>
          {[0, 1].map((g) => (
            <div key={g} className="flex gap-5 sm:gap-6 pr-5 sm:pr-6" aria-hidden={g === 1}>
              {brands.map((brand) => (
                <div
                  key={`${g}-${brand.name}`}
                  className="flex w-[210px] sm:w-[230px] h-[96px] sm:h-[104px] shrink-0 items-center justify-center rounded-2xl border border-[#e8ded0] bg-white px-6 py-3.5 text-center select-none shadow-xs transition-all duration-300 hover:border-[#c5a059]/60 hover:shadow-lg hover:-translate-y-1 cursor-default group"
                  title={brand.name}
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`max-h-12 sm:max-h-14 max-w-[160px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                        brand.invert ? 'invert brightness-95' : ''
                      }`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-serif font-bold text-lg text-[#2e2721]">{brand.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
