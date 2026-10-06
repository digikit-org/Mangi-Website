import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ArrowScroller — horizontal snap carousel with floating arrow buttons
 * and a thin gold progress bar. Unique to the Services section.
 */
export default function ArrowScroller({ children, className = '' }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Floating arrows — overlap the card edges */}
      <button
        onClick={() => nudge(-1)}
        disabled={!canLeft}
        aria-label="Scroll left"
        className={`absolute z-20 left-0 top-[38%] -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#faf6ee] text-[#4a4036] border border-[#e5dcd0] shadow-md flex items-center justify-center transition-all duration-200 hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] hover:scale-105 disabled:opacity-0 disabled:pointer-events-none cursor-pointer ${
          canLeft ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => nudge(1)}
        disabled={!canRight}
        aria-label="Scroll right"
        className={`absolute z-20 right-0 top-[38%] -translate-y-1/2 translate-x-1/2 w-11 h-11 rounded-full bg-[#faf6ee] text-[#4a4036] border border-[#e5dcd0] shadow-md flex items-center justify-center transition-all duration-200 hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] hover:scale-105 disabled:opacity-0 disabled:pointer-events-none cursor-pointer ${
          canRight ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
      >
        {children}
      </div>

      {/* Gold progress bar */}
      <div className="mt-5 h-[3px] w-full bg-[#eae3d5] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#caa368] to-[#c5a059] rounded-full transition-[width] duration-150"
          style={{ width: `${Math.max(12, progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
