// src/components/HeaderSection.tsx
import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <nav className="w-full px-8 py-5 bg-[#FFF8F3] flex items-center justify-between relative rounded-t-3xl">
      {/* Logo bên trái */}
      <div className="flex-shrink-0 text-3xl font-extrabold text-[#D46B55] tracking-wide">
        BAKEJÖY
      </div>

      {/* Menu giữa */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-[#406363] font-semibold text-sm tracking-wide">
        <a href="#" className="hover:text-[#D46B55] transition-colors">ABOUT</a>
        <a href="#" className="hover:text-[#D46B55] transition-colors">PRODUCTS</a>
        <a href="#" className="hover:text-[#D46B55] transition-colors">BLOG</a>
        <a href="#" className="hover:text-[#D46B55] transition-colors">CONTACT</a>
      </div>

      {/* Register bên phải */}
      <div className="flex-shrink-0">
        <a
          href="#"
          className="text-[#D46B55] border border-[#D46B55] rounded-full px-6 py-1.5 font-bold text-sm hover:bg-[#D46B55] hover:text-white transition-colors"
        >
          REGISTER
        </a>
      </div>
    </nav>
  );
};

export default HeaderSection;
