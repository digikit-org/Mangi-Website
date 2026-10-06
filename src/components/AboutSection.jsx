import React from "react";
import { ArrowRight, Compass, Hammer, ShieldCheck } from "lucide-react";
import { siteConfig } from "../data/siteData";

export default function AboutSection({ onOpenConsultation }) {
  const { about } = siteConfig;

  const principleIcons = [Compass, Hammer, ShieldCheck];

  // Per-principle accent theme: tinted chip + matching bar, title & badge dot
  const principleStyles = [
    {
      chip: "bg-violet-50 border-violet-200 text-violet-600 group-hover:bg-violet-500 group-hover:border-violet-500 group-hover:text-white",
      bar: "bg-violet-400",
      titleHover: "group-hover:text-violet-700",
      dot: "bg-violet-500",
    },
    {
      chip: "bg-sky-50 border-sky-200 text-sky-600 group-hover:bg-sky-500 group-hover:border-sky-500 group-hover:text-white",
      bar: "bg-sky-400",
      titleHover: "group-hover:text-sky-700",
      dot: "bg-sky-500",
    },
    {
      chip: "bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white",
      bar: "bg-emerald-400",
      titleHover: "group-hover:text-emerald-700",
      dot: "bg-emerald-500",
    },
  ];

  return (
    <section id="about" className="w-full py-8 sm:py-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Story, Right 3 Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Brand Manifesto from Google Doc */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
                {about.badge}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2e2721] tracking-tight leading-tight mb-2.5">
                {about.headline}
              </h2>
              <p className="font-serif text-base sm:text-lg text-[#8c6d3b] italic">
                {about.subheading}
              </p>
            </div>

            <div className="space-y-2.5 text-stone-600 text-[13px] sm:text-sm leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation("About Section")}
                className="gold-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs tracking-wide shadow-md group cursor-pointer"
              >
                <span>{about.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Pillars (Design with Purpose / Build with Precision / Deliver with Responsibility) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#e8ded0] shadow-sm">
              <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
                Our Core Philosophy
              </h3>
              {/*hello ji how are you*/}
              <div className="space-y-5">
                {about.principles.map((item, idx) => {
                  const Icon = principleIcons[idx] || Compass;
                  const s = principleStyles[idx % principleStyles.length];
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 sm:gap-4 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 mt-1 ${s.chip}`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <div
                          className={`h-1 w-10 rounded-full mb-2 ${s.bar}`}
                        />
                        <h4
                          className={`font-serif text-lg sm:text-xl font-semibold text-[#2e2721] mb-1 transition-colors ${s.titleHover}`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Architectural Quality Badges */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-2">
                {[
                  "Single-Point EPC Contract",
                  "LEED Compliant Engineering",
                  "Snag-Free Handover",
                ].map((label, i) => {
                  const dot = principleStyles[i % principleStyles.length].dot;
                  return (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-50 border border-stone-200 text-[11px] font-semibold text-stone-600 whitespace-nowrap"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
