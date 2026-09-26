import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import DragScroller from './scrollers/DragScroller';
import useReveal from '../hooks/useReveal';

export default function Industries({ onSelectIndustry }) {
  const { industries } = siteConfig;
  const revealRef = useReveal();

  return (
    <section id="industries" className="w-full py-10 sm:py-14 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {industries.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
              {industries.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed mb-4">
              {industries.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#c5a059] transition-colors whitespace-nowrap group"
            >
              <span>Explore Industries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 8 Industry Cards — draggable strip that bleeds off the right edge */}
        <div ref={revealRef} className="-mx-4 sm:mx-0">
          <div className="sm:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <DragScroller hint="Drag to explore industries">
              {industries.items.map((ind, idx) => (
                <div
                  key={ind.id}
                  onClick={() => onSelectIndustry(ind)}
                  className="reveal-card group relative aspect-[4/3] w-[74vw] sm:w-[38vw] lg:w-[23vw] shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  style={{ transitionDelay: `${Math.min(idx * 60, 300)}ms` }}
                >
                  {/* Photo */}
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    draggable={false}
                  />

                  {/* Gradient Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/95 transition-colors duration-300" />

                  {/* Bottom Details */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-white tracking-wide group-hover:text-[#caa368] transition-colors">
                        {ind.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#c5a059] group-hover:border-[#c5a059] group-hover:text-[#141413] transition-all flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-300 line-clamp-2 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {ind.description}
                    </p>
                  </div>
                </div>
              ))}
            </DragScroller>
          </div>
        </div>
      </div>
    </section>
  );
}
