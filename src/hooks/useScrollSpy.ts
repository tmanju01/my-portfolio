import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset = 200) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Check if we are near the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      let currentActive = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            currentActive = id;
          }
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}
