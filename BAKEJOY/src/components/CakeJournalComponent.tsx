import React from 'react';

import image1 from '../images/deva-williamson-1.jpg';
import image2 from '../images/deva-williamson-2.jpg';
import image3 from '../images/katie.jpg';



const CakeJournalComponent: React.FC = () => {
  return (
    <div className="bg-[#FFF8F3] min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#E94F37] text-center mb-10">
          Cake Journal
        </h1>

        {/* Các nút filter */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          <button className="px-5 py-2 border border-[#174C4F] text-[#174C4F] text-sm font-semibold rounded-full hover:bg-[#174C4F] hover:text-white transition">
            TIPS & TRICK
          </button>
          <button className="px-5 py-2 bg-[#174C4F] text-white text-sm font-semibold rounded-full hover:bg-[#12393B] transition">
            NEW ARTICLE
          </button>
          <button className="px-5 py-2 border border-[#174C4F] text-[#174C4F] text-sm font-semibold rounded-full hover:bg-[#174C4F] hover:text-white transition">
            PROMOTIONS
          </button>
        </div>

        {/* Các bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bài 1 */}
          <div>
            <img
              src={image1}
              alt="Our Favorite Cakes"
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#E94F37] mb-2">
              Our Favorite Cakes that Always Make It to The Best Seller
            </h3>
            <a
              href="#"
              className="text-[#174C4F] text-sm hover:underline"
            >
              Read More
            </a>
          </div>

          {/* Bài 2 */}
          <div>
            <img
              src={image2}
              alt="Birthday Cake"
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#E94F37] mb-2">
              Designing Your Own Customized Dream Birthday Cake
            </h3>
            <a
              href="#"
              className="text-[#174C4F] text-sm hover:underline"
            >
              Read More
            </a>
          </div>

          {/* Bài 3 */}
          <div>
            <img
              src={image3}
              alt="Occasion Cake"
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#E94F37] mb-2">
              Choosing the Right Cake for Any Occasion and Party: A Guide
            </h3>
            <a
              href="#"
              className="text-[#174C4F] text-sm hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeJournalComponent;
