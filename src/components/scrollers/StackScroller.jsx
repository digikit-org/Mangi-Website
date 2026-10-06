import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

/**
 * StackScroller — a horizontal rail of project cards with:
 *  - Automatic photograph movement (autoplay with smooth loop)
 *  - Pause on hover / touch
 *  - Snap scrolling and manual arrow controls
 *  - Dual progress bars (base + gold)
 *  - Pure beige / gold styling — NO BLACK
 */
export default function StackScroller({ children, activeCount = 0 }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
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
  }, [update, activeCount]);

  // Re-check after the filter changes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: 'smooth' });
    update();
  }, [activeCount, update]);

  const step = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    const w = card ? card.getBoundingClientRect().width + 28 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;

    if (dir > 0 && el.scrollLeft >= max - 20) {
      // Smoothly loop back to start when reaching the end
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (dir < 0 && el.scrollLeft <= 20) {
      // Loop to end
      el.scrollTo({ left: max, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dir * w, behavior: 'smooth' });
    }
  }, []);

  // Automatic movement for project photographs
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      step(1);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, step]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {children}
      </div>

      {/* Dual progress bars — Warm beige & luxury gold */}
      <div className="mt-6 relative h-[3px] w-full bg-[#eae3d5] rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-[#e5dcd0] rounded-full transition-[width] duration-150"
          style={{ width: '100%' }}
        />
        <div
          className="absolute inset-y-0 left-0 bg-[#c5a059] rounded-full transition-[width] duration-300"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      {/* Controls & Autoplay status */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-[#8c6d3b] font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span>Auto-advancing projects (hover to pause)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => step(-1)}
            aria-label="Previous projects"
            className="w-10 h-10 rounded-full border border-[#eae3d5] bg-white text-[#4a4036] flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => step(1)}
            aria-label="More projects"
            className="w-10 h-10 rounded-full border border-[#eae3d5] bg-white text-[#4a4036] flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
