import React from 'react';
import { Leaf, Shield, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "Imagination meets Design",
    text:
      "A collection created from a child’s imagination and a parent’s eye for design.",
  },
  {
    icon: Shield,
    title: "Natural. Toxin‑free. Enduring.",
    text:
      "Crafted exclusively from robinia hardwood — natural, toxin-free, and built to last over 40 years.",
  },
  {
    icon: Heart,
    title: "Designed for Development",
    text:
      "Every piece is thoughtfully designed with child development at its heart.",
  },
];

const Benefits = () => {
  return (
    <section className="w-full px-6 md:px-10 py-12 md:py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {benefits.map(({ icon: Icon, title, text }, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur rounded-xl border border-stone-200 p-6 md:p-8 flex items-start gap-4"
          >
            <div className="shrink-0 rounded-full bg-stone-100 p-3 text-stone-700">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-stone-800">
                {title}
              </h3>
              <p className="mt-2 text-stone-600 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
