import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * StackScroller — a horizontal rail of cards with:
 *  - snap scrolling,
 *  - thin dual progress bars (base + gold),
 *  - arrows pinned at the header right,
 *  - center-on-click.
 * Unique to the Projects section.
 */
export default function StackScroller({ children, activeCount = 0 }) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

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

  // Re-check after the filter changes (different card counts)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    update();
  }, [activeCount, update]);

  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(':scope > *');
    const w = card ? card.getBoundingClientRect().width + 28 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-7 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {children}
      </div>

      {/* Dual progress bars */}
      <div className="mt-6 relative h-[3px] w-full bg-[#eae3d5] rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-stone-300/60 rounded-full transition-[width] duration-150"
          style={{ width: '100%' }}
        />
        <div
          className="absolute inset-y-0 left-0 bg-[#141413] rounded-full transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      {/* Arrow controls */}
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          onClick={() => step(-1)}
          aria-label="Previous projects"
          className="w-10 h-10 rounded-full border border-[#eae3d5] bg-white text-stone-600 flex items-center justify-center hover:bg-[#141413] hover:text-white hover:border-[#141413] transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => step(1)}
          aria-label="More projects"
          className="w-10 h-10 rounded-full border border-[#eae3d5] bg-white text-stone-600 flex items-center justify-center hover:bg-[#141413] hover:text-white hover:border-[#141413] transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
