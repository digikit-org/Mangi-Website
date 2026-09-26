import React, { useRef, useState, useCallback } from 'react';
import { Users, Layout, PenTool, Hammer, KeyRound, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const iconMap = {
  Users: Users,
  Layout: Layout,
  PenTool: PenTool,
  Hammer: Hammer,
  KeyRound: KeyRound,
};

// Per-step accent theme: tinted chip + matching number, bar & hover states
const stepStyles = [
  {
    chip: "bg-sky-50 border-sky-200 text-sky-600 group-hover:bg-sky-500 group-hover:border-sky-500 group-hover:text-white",
    num: "text-sky-600",
    bar: "bg-sky-400",
    cardHover: "hover:border-sky-300",
  },
  {
    chip: "bg-violet-50 border-violet-200 text-violet-600 group-hover:bg-violet-500 group-hover:border-violet-500 group-hover:text-white",
    num: "text-violet-600",
    bar: "bg-violet-400",
    cardHover: "hover:border-violet-300",
  },
  {
    chip: "bg-rose-50 border-rose-200 text-rose-600 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white",
    num: "text-rose-600",
    bar: "bg-rose-400",
    cardHover: "hover:border-rose-300",
  },
  {
    chip: "bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white",
    num: "text-amber-600",
    bar: "bg-amber-400",
    cardHover: "hover:border-amber-300",
  },
  {
    chip: "bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white",
    num: "text-emerald-600",
    bar: "bg-emerald-400",
    cardHover: "hover:border-emerald-300",
  },
];

export default function Process() {
  const { process } = siteConfig;

  // Mobile slider state: track the active card for the dots
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    if (!card) return;
    const w = card.getBoundingClientRect().width + 24; // gap-6
    setActive(Math.min(process.steps.length - 1, Math.max(0, Math.round(el.scrollLeft / w))));
  }, [process.steps.length]);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    if (!card) return;
    const w = card.getBoundingClientRect().width + 24;
    el.scrollTo({ left: i * w, behavior: 'smooth' });
  };

  return (
    <section id="process" className="w-full py-10 sm:py-14 bg-[#faf8f5] border-t border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {process.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
              {process.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {process.description}
            </p>
          </div>
        </div>

        {/* 5-Step Workflow: horizontal snap slider on mobile, grid on sm+ */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:overflow-visible relative"
        >
          {process.steps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || Users;
            const s = stepStyles[idx % stepStyles.length];
            return (
              <div
                key={step.step}
                className={`relative w-[78vw] max-w-[320px] shrink-0 snap-start bg-white rounded-2xl p-6 border border-[#e8ded0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group sm:w-auto ${s.cardHover}`}
              >
                {/* Connecting arrow for large screens */}
                {idx < process.steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-7 h-7 rounded-full bg-[#fdfbf7] border border-[#e8ded0] flex items-center justify-center text-[#8c6d3b]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}

                <div>
                  {/* Step Circle with Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 mb-4 ${s.chip}`}
                  >
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Accent bar in the step's color */}
                  <div className={`h-1 w-10 rounded-full mb-3 ${s.bar}`} />

                  {/* Step Number & Title */}
                  <div className="mb-2">
                    <span className={`font-mono text-[11px] font-bold tracking-wider block mb-1 ${s.num}`}>
                      STEP {step.step}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#141413]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium italic">
                  {step.summary}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile-only dots — tap to jump to a step */}
        <div className="mt-4 flex justify-center gap-2 sm:hidden">
          {process.steps.map((step, i) => (
            <button
              key={step.step}
              onClick={() => goTo(i)}
              aria-label={`Go to step ${step.step}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? `w-6 ${stepStyles[i % stepStyles.length].bar}` : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
