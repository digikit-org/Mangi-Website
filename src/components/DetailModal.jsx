import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';

export default function DetailModal({ item, onClose, onStartProject }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#2e2721]/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#e8ded0] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Image Area */}
        {item.image ? (
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#f4efe6] shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2e2721]/80 via-[#2e2721]/30 to-transparent" />

            <div className="absolute bottom-4 left-5 right-5 sm:left-8 sm:right-8">
              {item.category && (
                <span className="px-2.5 py-1 rounded-full bg-[#c5a059] text-white font-bold text-[10px] tracking-wider uppercase inline-block mb-2 shadow-xs">
                  {item.category}
                </span>
              )}
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ) : (
          <div className="bg-[#f5efe6] border-b border-[#e7e0d4] px-6 py-5 text-[#2e2721] flex items-center justify-between shrink-0">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8c6d3b] block">
                Mangi Interiors Portfolio
              </span>
              <h3 className="font-serif text-2xl font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#fdfbf7]/90 hover:bg-[#ede5d6] flex items-center justify-center text-[#2e2721] transition-colors cursor-pointer shadow-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Case Study Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-[#4a4036]">
          {/* Metadata Grid: Location, Project Type, Area, Scope */}
          {(item.location || item.projectType || item.area || item.scope) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#faf8f5] border border-[#e8ded0] text-xs">
              {item.location && (
                <div>
                  <span className="text-[#8c8275] font-bold uppercase tracking-wider block">Location</span>
                  <strong className="text-[#2e2721] text-xs sm:text-sm">{item.location}</strong>
                </div>
              )}
              {item.projectType && (
                <div>
                  <span className="text-[#8c8275] font-bold uppercase tracking-wider block">Project Type</span>
                  <strong className="text-[#2e2721] text-xs sm:text-sm">{item.projectType}</strong>
                </div>
              )}
              {item.area && (
                <div>
                  <span className="text-[#8c8275] font-bold uppercase tracking-wider block">Area</span>
                  <strong className="text-[#2e2721] text-xs sm:text-sm">{item.area}</strong>
                </div>
              )}
              {item.scope && (
                <div>
                  <span className="text-[#8c8275] font-bold uppercase tracking-wider block">Scope</span>
                  <strong className="text-[#2e2721] text-xs sm:text-sm">{item.scope}</strong>
                </div>
              )}
            </div>
          )}

          {/* Section: The Brief */}
          {item.brief && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2e2721] mb-1.5 flex items-center gap-2">
                <span>The Brief</span>
              </h4>
              <p className="text-[#5c5349] leading-relaxed text-xs sm:text-sm">
                {item.brief}
              </p>
            </div>
          )}

          {/* Section: Our Approach */}
          {item.approach && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2e2721] mb-1.5">
                Our Approach
              </h4>
              <p className="text-[#5c5349] leading-relaxed text-xs sm:text-sm">
                {item.approach}
              </p>
            </div>
          )}

          {/* Section: The Solution */}
          {item.solution && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2e2721] mb-1.5">
                The Solution
              </h4>
              <p className="text-[#5c5349] leading-relaxed text-xs sm:text-sm">
                {item.solution}
              </p>
            </div>
          )}

          {/* Section: Project Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2e2721] mb-3">
                Project Highlights
              </h4>
              <ul className="space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a4036]">
                    <CheckCircle2 className="w-4 h-4 text-[#8c6d3b] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: The Result */}
          {item.result && (
            <div className="p-4 rounded-xl bg-[#faf6ee] border border-[#e8ded0]">
              <h4 className="font-serif text-base font-bold text-[#8c6d3b] mb-1">
                The Result
              </h4>
              <p className="text-xs sm:text-sm text-[#2e2721] leading-relaxed font-medium">
                {item.result}
              </p>
            </div>
          )}

          {/* Fallback for Services / General items */}
          {item.description && !item.brief && (
            <p className="text-[#5c5349] leading-relaxed text-sm">
              {item.description}
            </p>
          )}

          {/* Quality Standards Guarantee */}
          <div className="flex flex-wrap items-center gap-4 text-[#6e6459] border-t border-[#f1ede5] pt-4 text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#8c6d3b]" />
              <span>100% Quality Audited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8c6d3b]" />
              <span>On-Time Turnkey Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#8c6d3b]" />
              <span>Dedicated Project Accountability</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#faf8f5] border-t border-[#e8ded0] flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#6e6459] hover:text-[#2e2721] px-4 py-2 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onStartProject(item.title);
            }}
            className="gold-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase cursor-pointer shadow-md"
          >
            <span>Inquire About This Space</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
