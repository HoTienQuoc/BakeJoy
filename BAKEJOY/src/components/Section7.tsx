import React from "react";
import image1 from '../images/image1.png';

const Section7 = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="relative flex justify-between items-center h-screen px-10 bg-[#FBE4D9] text-[#2E5D55] font-sans overflow-hidden z-10">
      {/* SVG Background Layer */}
      <div className="absolute inset-0 z-0">
      </div>

      {/* Left: Image with blob */}
      <div className="relative w-[500px] h-[500px] flex-shrink-0 z-10">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <path
            fill="#f4f0f1"
            d="M47,-50C60.3,-33.7,70.1,-16.8,71.1,1C72.1,18.9,64.3,37.7,51,49.7C37.7,61.7,18.9,66.8,-1.1,67.8C-21,68.9,-42.1,66,-57,54C-71.9,42.1,-80.8,21,-81.6,-0.8C-82.4,-22.7,-75.2,-45.3,-60.3,-61.7C-45.3,-78.1,-22.7,-88.1,-2.9,-85.2C16.8,-82.3,33.7,-66.4,47,-50Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src={image1}
          alt="Ảnh của tôi"
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] object-cover -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]"
        />
      </div>

      {/* Right: Text + Form */}
      <div className="max-w-[700px] flex flex-col justify-center p-8 ml-12 z-10">
        <div className="mb-6">
          <span className="block text-[3.8rem] font-bold mb-2 text-[#D46B55]">
            Ready to taste
          </span>
          <span className="block text-[3.8rem] font-bold mb-2 text-[#D46B55]">
            the magic?
          </span>
          <span className="block text-lg leading-relaxed text-[#2E5D55]">
            Take the first step towards sweet satisfaction – place your order now
            or subscribe to our newsletter for updates and promo.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[450px]">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 text-lg rounded-md outline-none border-none bg-[#f4f0f1] text-black placeholder-[#325C5C]"
          />
          <button
            type="submit"
            className="self-end px-6 py-3 text-lg rounded-md bg-[#325C5C] hover:bg-[#325C5C] text-white cursor-pointer w-fit transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section7;
