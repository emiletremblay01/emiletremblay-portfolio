"use client";
import { useEffect, useState } from "react";
export default function SectionNav({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            visibleSections.set(
              entry.target.id,
              sections.findIndex((s) => s.id === entry.target.id),
            );
          else visibleSections.delete(entry.target.id);
        });
        const first = [...visibleSections].sort((a, b) => a[1] - b[1])[0];
        if (first) setActive(first[0]);
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const element = document.getElementById(s.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sections]);
  return (
    <nav className="section-nav" aria-label="Sections de la page">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-current={active === s.id ? "location" : undefined}
          onClick={() => setActive(s.id)}
        >
          <span className="nav-line" aria-hidden="true" />
          <span className="nav-number" aria-hidden="true">
            0{i + 1}
          </span>
          {s.label}
        </a>
      ))}
    </nav>
  );
}
