import { useState, useEffect, useRef } from "react";

export function useScrollSpy(ids: string[], rootMargin = "-10% 0px -40% 0px") {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    // Use IntersectionObserver to avoid forced reflows on scroll
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: rootMargin,
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [ids, rootMargin]);

  return activeId;
}
