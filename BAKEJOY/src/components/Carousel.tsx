import React, { useState } from 'react';
import croissant from '../images/deva-williamson-1.jpg';
import '../App.css';
import { ChevronRight,ChevronLeft } from 'lucide-react';


const Carousel: React.FC = () => {
  const slides = [
    { id: 1, image: croissant, title: 'Thiên nhiên tươi đẹp' },
    { id: 2, image: croissant, title: 'Thành phố hiện đại' },
    { id: 3, image: croissant, title: 'Đỉnh núi hùng vĩ' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-screen h-full flex-shrink-0 relative">
            {/* Ảnh nền */}
            <div className="w-full h-full bg-[#FFF8F3] flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chữ */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] text-white max-w-xl">
              <div className="flex flex-col items-start text-5xl font-bold leading-none">
                <span
                  style={{
                    transform: 'translate(10px, -100px)',
                    fontFamily: 'CustomFont',
                    fontSize: '3rem',
                    letterSpacing: '0.1em',
                    color: '#325C5C',
                  }}
                >
                  Delight in
                </span>

                <span
                  style={{
                    transform: 'translate(250px, -10px)',
                    fontFamily: 'CustomFont',
                    fontSize: '3rem',
                    letterSpacing: '0.08em',
                    color: '#D46B55',
                    display: 'inline-block',
                  }}
                >
                  every bites!
                </span>

                <p
                  className="mt-6 text-base text-[#325C5C] font-normal max-w-xs md:max-w-md lg:max-w-lg"
                  style={{ marginLeft: 'calc(var(--custom-offset, 270px))' }}
                >
                  Experience the joy of perfectly baked cakes, made with love and crafted to bring a smile to every celebration.
                </p>

                {/* Nút và text sản phẩm */}
                <div
                  className="mt-4 flex items-center space-x-12"
                  style={{
                    fontSize: 'var(--custom-font-size, 0.875rem)',
                    transform: 'translateX(var(--custom-translate-x, 25px))',
                  }}
                >
                  <span className="text-[#325C5C] font-semibold" style={{ fontSize: 'inherit' }}>
                    — Choco Croissant (0.6$)
                  </span>
                  <button
                    className="bg-[#D46B55] hover:bg-yellow-600 text-white font-bold rounded-full"
                    style={{
                      fontSize: 'calc(var(--custom-font-size, 0.875rem) * 0.85)',
                      padding: '0.375rem 1.5rem',
                      marginLeft: '40px',
                    }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-[#325C5C] text-4xl font-bold drop-shadow-lg hover:scale-110 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={60}/>

      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 text-[#325C5C] text-4xl font-bold drop-shadow-lg hover:scale-110 transition"
        aria-label="Next Slide"
      >
        <ChevronRight size={60}/>

      </button>
    </div>
  );
};

export default Carousel;
