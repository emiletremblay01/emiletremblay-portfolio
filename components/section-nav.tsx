"use client";
import { useEffect, useState } from "react";
export default function SectionNav({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
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
          <span className="nav-line" />
          <span className="nav-number">0{i + 1}</span>
          {s.label}
        </a>
      ))}
    </nav>
  );
}
