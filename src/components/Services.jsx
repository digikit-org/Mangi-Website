import React, { useState } from 'react';
import { PenTool, Layout, Compass, ShieldCheck, Building2, Armchair, ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import ArrowScroller from './scrollers/ArrowScroller';
import useReveal from '../hooks/useReveal';

const iconMap = {
  PenTool: PenTool,
  Layout: Layout,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  Armchair: Armchair,
};

export default function Services({ onSelectService, onOpenConsultation }) {
  const { whatWeDo } = siteConfig;
  const [activeTab, setActiveTab] = useState('sectors'); // 'sectors' or 'capabilities'
  const revealRef = useReveal();

  return (
    <section id="services" className="w-full py-10 sm:py-14 bg-[#f5f0e6]/45 border-t border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {whatWeDo.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight">
              {whatWeDo.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed mb-4">
              {whatWeDo.description}
            </p>
            {/* View Switcher: Sector Solutions vs Core Expertise */}
            <div className="inline-flex rounded-lg bg-stone-200/70 p-1 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('sectors')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'sectors'
                    ? 'bg-white text-[#2e2721] shadow-sm'
                    : 'text-[#6e6459] hover:text-[#2e2721]'
                }`}
              >
                End-to-End Solutions
              </button>
              <button
                disabled
                aria-disabled="true"
                className="px-3 py-1.5 rounded-md text-[#9e9284] cursor-not-allowed"
              >
                Our Expertise (6 Pillars)
              </button>
            </div>
          </div>
        </div>

        {/* Scroller rail — shared by both tabs */}
        <div ref={revealRef}>
          <ArrowScroller key={activeTab}>
            {activeTab === 'sectors'
              ? whatWeDo.categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => onSelectService(cat)}
                    className="reveal-card group cursor-pointer snap-start shrink-0 w-[82vw] sm:w-[46%] lg:w-[31.5%] bg-white rounded-2xl overflow-hidden border border-[#eae3d5] hover:border-[#c5a059]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#f4efe6] relative">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2e2721]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e2721] group-hover:text-[#8c6d3b] transition-colors">
                            {cat.title}
                          </h3>
                          <div className="w-8 h-8 rounded-full border border-[#eae3d5] bg-[#faf8f5] flex items-center justify-center text-[#78716c] group-hover:text-white group-hover:bg-[#c5a059] group-hover:border-[#c5a059] transition-all shrink-0">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-[#6e6459] leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#f1ede5] flex items-center justify-between text-xs font-semibold text-[#8c6d3b]">
                        <span>Explore Space Requirements</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))
              : whatWeDo.capabilities.map((cap) => {
                  const IconComp = iconMap[cap.icon] || PenTool;
                  return (
                    <div
                      key={cap.id}
                      onClick={() => onSelectService(cap)}
                      className="reveal-card group cursor-pointer snap-start shrink-0 w-[82vw] sm:w-[46%] lg:w-[31.5%] bg-white rounded-2xl p-7 border border-[#eae3d5] hover:border-[#c5a059]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-[#faf6ee] border border-[#e8ded0] flex items-center justify-center text-[#8c6d3b] group-hover:bg-[#8c6d3b] group-hover:text-white transition-all duration-300">
                            <IconComp className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <div className="w-8 h-8 rounded-full border border-[#eae3d5] bg-[#faf8f5] flex items-center justify-center text-[#78716c] group-hover:text-white group-hover:bg-[#c5a059] group-hover:border-[#c5a059] transition-all">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e2721] mb-3 group-hover:text-[#8c6d3b] transition-colors">
                          {cap.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#6e6459] leading-relaxed">
                          {cap.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#f1ede5] flex items-center text-xs font-semibold text-[#8c6d3b]">
                        <span>Consult our specialists</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                })}
          </ArrowScroller>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#e8ded0] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif text-xl font-semibold text-[#2e2721]">
              Need a custom commercial turnkey solution?
            </h4>
            <p className="text-xs sm:text-sm text-[#6e6459] mt-1">
              From concept drawings to final handover keys, we take complete responsibility.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Services Section')}
            className="gold-btn px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm uppercase tracking-wide whitespace-nowrap cursor-pointer"
          >
            <span>Discuss Your Project</span>
          </button>
        </div>
      </div>
    </section>
  );
}
