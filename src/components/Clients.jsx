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
    <section className="w-full py-10 sm:py-12 bg-white border-t border-[#eae3d5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
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

        <div className="marquee-track flex w-max py-6" style={{ animationDuration: '30s' }}>
          {[0, 1].map((g) => (
            <div key={g} className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden={g === 1}>
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex w-[200px] sm:w-[220px] h-[96px] shrink-0 flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white px-4 text-center select-none grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:border-[#c5a059]/60 hover:shadow-lg hover:-translate-y-1 cursor-default"
                >
              {brand.name === 'HCG' ? (
                <div className="flex flex-col items-center">
                  <span className="font-serif font-black tracking-tight text-2xl text-[#141413]">HCG</span>
                  <span className="text-[8px] uppercase tracking-tighter text-stone-500 font-semibold">The Specialist in Cancer Care</span>
                </div>
              ) : brand.name === 'IBM' ? (
                <div className="font-mono font-black tracking-[0.2em] text-2xl sm:text-3xl text-stone-800">
                  IBM
                </div>
              ) : brand.name === 'TATA' ? (
                <div className="font-sans font-black tracking-[0.25em] text-2xl sm:text-3xl text-stone-800">
                  TATA
                </div>
              ) : brand.name === 'Infosys' ? (
                <div className="font-sans font-semibold tracking-normal text-2xl sm:text-3xl text-[#007cc3]">
                  Infosys
                </div>
              ) : brand.name === 'wework' ? (
                <div className="font-serif italic font-normal tracking-tight text-2xl sm:text-3xl text-stone-900">
                  wework
                </div>
              ) : brand.name === 'Hilton' ? (
                <div className="font-serif font-medium tracking-widest uppercase text-xl sm:text-2xl text-stone-800">
                  Hilton
                </div>
              ) : brand.name === 'DLF' ? (
                <div className="font-sans font-black tracking-widest uppercase text-2xl sm:text-3xl text-stone-900">
                  DLF
                </div>
              ) : (
                <span className={brand.font}>{brand.name}</span>
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
