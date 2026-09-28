import React, { useState } from 'react';

interface Props {
  categories: string[];
}

export default function ProjectFilter({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    const cards = document.querySelectorAll<HTMLElement>('.gsap-card');
    
    cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'All' || cardCategory === category) {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-10">
      {['All', ...categories].map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              isActive
                ? 'bg-content-primary text-void font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'bg-white/[0.04] text-content-secondary hover:text-content-primary hover:bg-white/[0.08] border border-white/[0.06]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
