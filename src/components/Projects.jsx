import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import StackScroller from './scrollers/StackScroller';
import useReveal from '../hooks/useReveal';

export default function Projects({ onSelectProject }) {
  const { projects } = siteConfig;
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const revealRef = useReveal();

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projects.items
      : projects.items.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full py-10 sm:py-14 bg-[#faf8f5] border-t border-[#eae3d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8c6d3b] block mb-3">
              {projects.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2e2721] tracking-tight">
              {projects.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {projects.description}
            </p>
          </div>
        </div>

        {/* Project Categories Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 no-scrollbar">
          {projects.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-white shadow-md'
                  : 'bg-white border border-[#eae3d5] text-[#5c5349] hover:border-[#c5a059] hover:text-[#2e2721]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Rail — horizontal case-study scroller with automatic movement */}
        <div ref={revealRef}>
          <StackScroller activeCount={filteredProjects.length}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="reveal-card group cursor-pointer snap-start shrink-0 w-[86vw] sm:w-[46%] lg:w-[31.5%] bg-white rounded-2xl overflow-hidden border border-[#eae3d5] hover:border-[#c5a059]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Preview with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f4efe6]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  {/* Subtle warm gradient — NO BLACK */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e2721]/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#fdfbf7]/90 backdrop-blur-md border border-[#e5dcd0] text-[10px] uppercase font-bold tracking-wider text-[#3a322a]">
                      {project.category}
                    </span>
                  </div>

                  {/* Location Pill */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#caa368]" />
                    <span className="font-medium drop-shadow-sm">{project.location}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#fdfbf7]/80 backdrop-blur-md flex items-center justify-center text-[#3a322a] group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2e2721] mb-2 group-hover:text-[#8c6d3b] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6e6459] line-clamp-2 leading-relaxed mb-4">
                      {project.brief}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#f1ede5] flex items-center justify-between text-xs text-[#78716c]">
                    <span className="font-semibold text-[#3a322a]">{project.area}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#8c6d3b] group-hover:text-[#2e2721] transition-colors">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </StackScroller>
        </div>
      </div>
    </section>
  );
}
