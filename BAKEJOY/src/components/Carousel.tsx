import React, { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Nội dung overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="w-2/3 h-full flex flex-col justify-between py-10">
                
                {/* Delight in - góc trái phía trên */}
                <div className="text-white text-6xl font-extrabold text-left drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
                  Delight in
                </div>

                {/* Góc phải phía dưới */}
                <div className="text-right text-white self-end max-w-md">
                  <div className="text-4xl text-left font-extrabold mb-4 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.7)]">
                    every bites!
                  </div>
                  <p className="text-base text-left leading-relaxed mb-4 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.6)]">
                    Experience the joy of perfectly baked cakes, made with love and crafted to bring a smile to every celebration.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-white font-semibold shadow-lg">
                    Shop Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
        aria-label="Previous Slide"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-orange-400 transition-colors duration-300 z-10"
        aria-label="Next Slide"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
