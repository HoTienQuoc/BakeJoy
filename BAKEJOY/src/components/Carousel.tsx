import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../images/deva-williamson-S2jw81lfrG0-unsplash.jpg";
import image2 from "../images/deva-williamson-ntfGWVbBiO0-unsplash.jpg";
import image3 from "../images/katie-rosario-QNyRp21hb5I-unsplash.jpg";

interface Slide {
  title1: string;
  title2: string;
  description: string;
  image: string;
  label: string;
}

const slides: Slide[] = [
  {
    title1: "Delight in",
    title2: "every bites!",
    description:
      "Experience the joy of perfectly baked cakes, made with love and crafted to bring a smile to every celebration.",
    image: image1,
    label: "— Choco Croissant ( 0.6$ )",
  },
  {
    title1: "Taste the",
    title2: "freshness!",
    description:
      "From oven to you — enjoy pastries that melt in your mouth, baked every morning.",
    image: image2,
    label: "— Strawberry Danish ( 0.8$ )",
  },
  {
    title1: "Sweet and",
    title2: "crunchy!",
    description:
      "Perfectly flaky layers that make every bite unforgettable.",
    image: image3,
    label: "— Almond Puff ( 1.0$ )",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[600px] bg-[#FFF8F3] overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <img
        key={slide.image}
        src={slide.image}
        alt={slide.title2}
        className="absolute inset-0 w-full h-full object-contain opacity-90 transition-all duration-700 ease-in-out z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col gap-6">
        {/* Title 1 */}
        <h1 className="text-6xl md:text-7xl font-bold text-[#2D6753] leading-tight text-left">
          {slide.title1}
        </h1>

        {/* Title 2 — nằm bên phải nhưng text căn trái */}
        <div className="w-full flex justify-end">
          <h3 className="text-5xl md:text-6xl font-extrabold text-[#E25B45] leading-tight text-left w-1/2">
            {slide.title2}
          </h3>
        </div>

        {/* Description — nằm bên trái, căn trái */}
        {/* Description — nằm bên phải, căn trái */}
        <div className="w-full flex justify-end">
          <p className="text-[#3D6A5A] text-lg md:text-xl leading-relaxed text-left max-w-xl">
            {slide.description}
          </p>
        </div>


        {/* Label + Button giữ nguyên ở giữa */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <p className="text-[#2D6753] font-semibold text-lg">{slide.label}</p>
          <button className="bg-[#E25B45] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d0503c] transition-all shadow-md">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm rounded-full p-3 border border-[#e67342] text-[#e67342] hover:bg-[#e67342] hover:text-white transition-all"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm rounded-full p-3 border border-[#e67342] text-[#e67342] hover:bg-[#e67342] hover:text-white transition-all"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
