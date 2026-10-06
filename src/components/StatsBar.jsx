import React from "react";
import { siteConfig } from "../data/siteData";

export default function StatsBar() {
  const stats = siteConfig.stats;

  return (
    <section className="w-full bg-[#fdfbf7] border-y border-[#e7e0d4]   py-1 sm:py-3">
      <div className="max-w-6xl mx-auto px-1 sm:px-2 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#e7e0d4] items-center">
          {/* Stat 1 */}
          <div className="p-3 sm:p-5 text-center md:text-left flex flex-col justify-center">
            <span className="font-serif text-3xl sm:text-2xl lg:text-5xl font-semibold text-[#2e2721] tracking-tight">
              {stats[0].value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#78716c] uppercase tracking-wider mt-1.5">
              {stats[0].label}
            </span>
          </div>

          {/* Stat 2 */}
          <div className="p-3 sm:p-5 text-center md:text-left flex flex-col justify-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2e2721] tracking-tight">
              {stats[1].value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#78716c] uppercase tracking-wider mt-1.5">
              {stats[1].label}
            </span>
          </div>

          {/* Stat 3 */}
          <div className="p-3 sm:p-5 text-center md:text-left flex flex-col justify-center">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2e2721] tracking-tight">
              {stats[2].value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#78716c] uppercase tracking-wider mt-1.5">
              {stats[2].label}
            </span>
          </div>

          {/* Stat 4 */}
          <div className="p-3 sm:p-5 text-center md:text-left flex flex-col justify-center">
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2e2721] tracking-tight">
              End-to-End
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#78716c] uppercase tracking-wider mt-1.5">
              Design & Execution
            </span>
          </div>

          {/* Callout Badge: SPACES FOR A BETTER TOMORROW */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 p-3 sm:p-5 flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left border lg:border-none border-[#e7e0d4] rounded-lg p-3 lg:p-0 bg-white lg:bg-transparent w-full">
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#8c6d3b] uppercase leading-relaxed">
                SPACES FOR A<br className="hidden lg:inline" /> BETTER TOMORROW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
