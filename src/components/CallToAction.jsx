import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function CallToAction({ onOpenConsultation }) {
  const { finalCta } = siteConfig;

  return (
    <section className="relative w-full py-14 sm:py-18 overflow-hidden bg-[#f5efe6] border-t border-[#e7e0d4]">
      {/* Background Boardroom Photo with Light Beige Overlays — NO BLACK */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${finalCta.bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#f5efe6]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5efe6]/98 via-[#f5efe6]/90 to-[#f5efe6]/70" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left Title & Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede5d6] border border-[#ded4c3] text-[#8c6d3b] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{finalCta.tagline}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight leading-tight mb-4">
              {finalCta.title}
            </h2>

            <p className="text-sm sm:text-base text-[#5c5349] max-w-xl leading-relaxed">
              {finalCta.description}
            </p>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <button
              onClick={() => onOpenConsultation('Final CTA')}
              className="gold-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase cursor-pointer whitespace-nowrap shadow-xl"
            >
              <span>{finalCta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#78716c] italic">
              {finalCta.trustNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
