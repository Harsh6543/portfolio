import { useState, useEffect } from "react"; 

/**
 * useScrollSpy — tracks which section is currently in the viewport.
 * Returns the id of the active section.
 *
 * @param {string[]} sectionIds  - array of section id strings (without #)
 * @param {number}   offset      - px from top where activation triggers
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
