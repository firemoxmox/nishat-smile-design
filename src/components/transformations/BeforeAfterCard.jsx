import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

export default function BeforeAfterCard({
  beforeImg,
  afterImg,
  beforeLabel,
  afterLabel,
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(
      Math.max(((clientX - rect.left) / rect.width) * 100, 2),
      98,
    );
    setSliderPos(pos);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (dragging) updatePos(e.clientX);
    },
    [dragging, updatePos],
  );
  const onTouchMove = useCallback(
    (e) => {
      updatePos(e.touches[0].clientX);
    },
    [updatePos],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none cursor-ew-resize overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setDragging(false)}
    >
      {/* After image (full) */}
      <img
        src={afterImg}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
          loading="lazy"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize border-2 border-white"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onTouchStart={() => setDragging(true)}
      >
        <ArrowLeftRight className="w-4 h-4 text-primary" />
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
        {beforeLabel}
      </div>
      <div className="absolute bottom-3 right-3 z-10 bg-primary/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
        {afterLabel}
      </div>
    </div>
  );
}
