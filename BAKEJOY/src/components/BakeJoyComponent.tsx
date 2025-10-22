import React from 'react';
import image1 from '../images/Unknown.jpeg'

const BakeJoyComponent: React.FC = () => {
  return (
    <div className="bg-[#FFF8F3] relative overflow-hidden min-h-[400px]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 py-12">
        
        {/* Text left */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#BF5841] leading-snug">
            Best Choice for <br /> Every Occasion
          </h1>
          <p className="mt-4 text-[#566C6B] text-sm md:text-base font-light leading-relaxed">
            At BAKEJOY, we turn simple ingredients into delectable works of edible art. Satisfy your cravings with our irresistible pastries and baked goods, delivered fresh from the oven for you truly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <div className="bg-[#D8D5D0] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
              <span className="text-[#6C695F] text-xl font-bold select-none">+</span>
            </div>
            <button className="bg-[#3B5E5A] text-white px-6 py-2 rounded-full text-xs md:text-sm hover:bg-[#2C4B48] transition">
              QUALITY INGREDIENTS
            </button>
            <button className="bg-[#3B5E5A] text-white px-6 py-2 rounded-full text-xs md:text-sm hover:bg-[#2C4B48] transition">
              PERSONALIZED DESIGNS
            </button>
            <button className="bg-[#3B5E5A] text-white px-6 py-2 rounded-full text-xs md:text-sm hover:bg-[#2C4B48] transition">
              ON-TIME DELIVERY
            </button>
            <button className="bg-[#3B5E5A] text-white px-6 py-2 rounded-full text-xs md:text-sm hover:bg-[#2C4B48] transition">
              AFFORDABLE PRICES
            </button>
            <button className="bg-[#D8D5D0] text-[#6C695F] px-6 py-2 rounded-full text-xs md:text-sm">
              VALUES
            </button>
          </div>
        </div>
        
        {/* Image right */}
        <div className="mt-10 md:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-[260px] mx-auto md:mx-0">
            <img
              src={image1}
              alt="Delicious Cake"
              className="w-64 h-64 object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Text bakejoy nghiêng */}
      <div
        className="absolute top-10 right-10 text-[#BF5841] text-6xl font-cursive opacity-20 pointer-events-none select-none"
        style={{ transform: 'rotate(15deg)' }}
      >
        bakejoy
      </div>
    </div>
  );
};

export default BakeJoyComponent;
