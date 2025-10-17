// src/components/FooterSection.tsx
import React from "react";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#325C5C] text-white py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="flex flex-col space-y-3 text-base">
          <h2 className="text-3xl font-extrabold tracking-wide">BAKEJÖY</h2>
          <p>( +123 ) 456 7890</p>
          <p className="font-semibold">bakejoy.cakeshop@mail.com</p>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
          {/* Column 1 */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Shop Cakes</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Store Locations</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Cake Journal</a>
            <a href="#" className="hover:underline">Recipes</a>
            <a href="#" className="hover:underline">Our Story</a>
            <a href="#" className="hover:underline">Our Values</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Refund Policy</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
