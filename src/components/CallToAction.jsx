import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function CallToAction({ onOpenConsultation }) {
  const { finalCta } = siteConfig;

  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden bg-[#141413]">
      {/* Background Boardroom Photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${finalCta.bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left Title & Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#caa368] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{finalCta.tagline}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-4">
              {finalCta.title}
            </h2>

            <p className="text-sm sm:text-base text-stone-300 max-w-xl leading-relaxed">
              {finalCta.description}
            </p>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <button
              onClick={() => onOpenConsultation('Final CTA')}
              className="gold-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase cursor-pointer whitespace-nowrap shadow-2xl"
            >
              <span>{finalCta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-stone-400 italic">
              {finalCta.trustNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
