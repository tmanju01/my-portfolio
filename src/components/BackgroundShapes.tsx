"use client";

import { useEffect, useState } from "react";

export default function BackgroundShapes() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating Polygon 1 */}
      <svg
        className="absolute top-[10%] left-[5%] w-24 h-24 text-sky-200/40 animate-[spin_10s_linear_infinite]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
      </svg>

      {/* Floating Polygon 2 */}
      <svg
        className="absolute top-[60%] left-[15%] w-16 h-16 text-cyan-300/30 animate-[spin_15s_linear_infinite_reverse]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 95,30 95,75 50,95 5,75 5,30" />
      </svg>

      {/* Floating Polygon 3 */}
      <svg
        className="absolute top-[30%] right-[10%] w-32 h-32 text-blue-200/30 animate-[spin_20s_linear_infinite]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,0 90,20 100,60 75,100 25,100 0,60 10,20" />
      </svg>

      {/* Floating Polygon 4 */}
      <svg
        className="absolute bottom-[20%] right-[20%] w-20 h-20 text-emerald-200/30 animate-[spin_12s_linear_infinite_reverse]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,0 100,50 50,100 0,50" />
      </svg>
      
      {/* Floating Polygon 5 */}
      <svg
        className="absolute top-[80%] left-[45%] w-24 h-24 text-teal-200/30 animate-[spin_18s_linear_infinite]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="25,0 75,0 100,50 75,100 25,100 0,50" />
      </svg>
    </div>
  );
}
