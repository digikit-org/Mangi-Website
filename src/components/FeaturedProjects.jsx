import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FeaturedProjects({ onSelectProject }) {
  const { badge, title, description, ctaText, ctaHref, items } = siteConfig.featuredProjects;

  return (
    <section id="projects" className="w-full py-20 sm:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-6 max-w-xl">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {description}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#141413] hover:text-[#c5a059] transition-colors whitespace-nowrap group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {items.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#eae3d5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden bg-stone-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-[#141413] group-hover:text-[#8c6d3b] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 group-hover:text-white group-hover:bg-[#141413] group-hover:border-[#141413] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#78716c] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
