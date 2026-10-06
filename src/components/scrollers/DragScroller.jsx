import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MoveHorizontal, MoveRight } from 'lucide-react';

/**
 * DragScroller — edge-bleed strip with:
 *  - Automatic photograph movement (gentle auto-scroll)
 *  - Dragging with mouse / touch
 *  - Pause on hover / touch
 */
export default function DragScroller({ children, hint = 'Drag to explore' }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setDragging(true);
    startX.current = e.pageX;
    startScroll.current = el.scrollLeft;
  };

  const onMouseMove = useCallback((e) => {
    const el = trackRef.current;
    if (!el || !isDragging) return;
    e.preventDefault();
    el.scrollLeft = startScroll.current - (e.pageX - startX.current);
  }, [isDragging]);

  const endDrag = useCallback(() => {
    setIsDragging(false);
    setDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', endDrag);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
    };
  }, [isDragging, onMouseMove, endDrag]);

  // Gentle auto-movement when not interacting
  useEffect(() => {
    if (isDragging || isHovered) return;

    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const card = el.querySelector(':scope > *');
        const step = card ? card.getBoundingClientRect().width + 24 : 300;
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [isDragging, isHovered]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        className={`drag-scroll flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2 select-none ${
          dragging ? 'dragging' : ''
        }`}
      >
        {children}
      </div>

      {/* Drag hint pill */}
      <div className="mt-6 flex items-center gap-3 text-[#78716c]">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#eae3d5] bg-white text-[11px] font-semibold uppercase tracking-wider text-[#4a4036] shadow-xs">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#c5a059]" />
          {hint}
        </span>
        <span className="hidden sm:block h-px flex-1 bg-[#eae3d5]" />
        <MoveRight className="w-4 h-4 text-[#c5a059]" />
      </div>
    </div>
  );
}
