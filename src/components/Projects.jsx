import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
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
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#141413] tracking-tight">
              {projects.title}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#6d665e] leading-relaxed">
              {projects.description}
            </p>
          </div>
        </div>

        {/* Project Categories Filter Bar from Google Doc */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 no-scrollbar">
          {projects.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#141413] text-white shadow-md'
                  : 'bg-white border border-[#eae3d5] text-stone-600 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Rail — horizontal case-study scroller */}
        <div ref={revealRef}>
          <StackScroller activeCount={filteredProjects.length}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="reveal-card group cursor-pointer snap-start shrink-0 w-[86vw] sm:w-[46%] lg:w-[31.5%] bg-white rounded-2xl overflow-hidden border border-[#eae3d5] hover:border-[#c5a059]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Preview with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase font-bold tracking-wider text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Location Pill */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#caa368]" />
                    <span>{project.location}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#141413] mb-2 group-hover:text-[#8c6d3b] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                      {project.brief}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-semibold text-stone-800">{project.area}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#8c6d3b] group-hover:text-stone-900 transition-colors">
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
