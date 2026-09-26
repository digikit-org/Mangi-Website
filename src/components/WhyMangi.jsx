import React from 'react';
import { Briefcase, Workflow, Armchair, Gem, MessagesSquare, Puzzle, Target, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

// Icons matched to each pillar's content:
// 01 Business-Focused Thinking -> Briefcase, 02 End-to-End Execution -> Workflow,
// 03 Practical Design -> Armchair, 04 Attention to Detail -> Gem,
// 05 Transparent Coordination -> MessagesSquare, 06 Built Around You -> Puzzle
const iconList = [
  Briefcase,
  Workflow,
  Armchair,
  Gem,
  MessagesSquare,
  Puzzle,
];

// Per-pillar accent palette: tinted chip + matching number, bar & hover states
const pillarStyles = [
  {
    chip: "bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white",
    num: "text-amber-600",
    bar: "bg-amber-400",
    cardHover: "hover:border-amber-300",
    titleHover: "group-hover:text-amber-700",
  },
  {
    chip: "bg-sky-50 border-sky-200 text-sky-600 group-hover:bg-sky-500 group-hover:border-sky-500 group-hover:text-white",
    num: "text-sky-600",
    bar: "bg-sky-400",
    cardHover: "hover:border-sky-300",
    titleHover: "group-hover:text-sky-700",
  },
  {
    chip: "bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white",
    num: "text-emerald-600",
    bar: "bg-emerald-400",
    cardHover: "hover:border-emerald-300",
    titleHover: "group-hover:text-emerald-700",
  },
  {
    chip: "bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white",
    num: "text-rose-600",
    bar: "bg-rose-400",
    cardHover: "hover:border-rose-300",
    titleHover: "group-hover:text-rose-700",
  },
  {
    chip: "bg-violet-50 border-violet-200 text-violet-600 group-hover:bg-violet-500 group-hover:border-violet-500 group-hover:text-white",
    num: "text-violet-600",
    bar: "bg-violet-400",
    cardHover: "hover:border-violet-300",
    titleHover: "group-hover:text-violet-700",
  },
  {
    chip: "bg-teal-50 border-teal-200 text-teal-600 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-white",
    num: "text-teal-600",
    bar: "bg-teal-400",
    cardHover: "hover:border-teal-300",
    titleHover: "group-hover:text-teal-700",
  },
];

export default function WhyMangi({ onOpenConsultation }) {
  const { whyMangi } = siteConfig;

  // Two identical groups -> the -50% translate loops seamlessly
  const groups = [0, 1];

  return (
    <section id="why-mangi" className="w-full py-10 sm:py-14 bg-[#fdfbf7] border-t border-[#eae3d5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
            {whyMangi.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight mb-4">
            {whyMangi.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
            {whyMangi.subtitle}
          </p>
        </div>
      </div>

      {/* 6 Pillars — infinite auto-scrolling marquee (pauses on hover) */}
      <div className="marquee-wrap relative">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10" />

        <div className="marquee-track flex w-max">
          {groups.map((g) => (
            <div key={g} className="flex gap-7 sm:gap-8 pr-7 sm:pr-8" aria-hidden={g === 1}>
              {whyMangi.pillars.map((pillar, idx) => {
                const Icon = iconList[idx % iconList.length] || Target;
                const s = pillarStyles[idx % pillarStyles.length];
                return (
                  <div
                    key={`${g}-${pillar.title}`}
                    className={`w-[300px] sm:w-[340px] shrink-0 bg-white rounded-2xl p-7 border border-[#e8ded0] shadow-sm flex flex-col group transition-colors duration-300 ${s.cardHover}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${s.chip}`}
                        >
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className={`font-mono text-xs font-bold ${s.num}`}>
                          {pillar.number}
                        </span>
                      </div>

                      {/* Accent bar in the pillar's color */}
                      <div className={`h-1 w-10 rounded-full mb-3 ${s.bar}`} />

                      <h3
                        className={`font-serif text-xl sm:text-2xl font-semibold text-[#141413] mb-3 transition-colors ${s.titleHover}`}
                      >
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 text-center">
        <button
          onClick={() => onOpenConsultation('Why Mangi')}
          className="gold-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wide cursor-pointer shadow-md"
        >
          <span>Partner With Mangi Interiors</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
