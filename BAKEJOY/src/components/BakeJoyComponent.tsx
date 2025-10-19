import React from 'react';

const BakeJoyComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-teal-200/50 rounded-b-full"></div>
      <div className="container mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 break-words">
            Best Choice for Every Occasion
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            At BAKEJOY, we turn simple ingredients into delectable works of edible art. Satisfy your cravings with our irresistible pastries and baked goods, delivered fresh from the oven for you truly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-gray-700 text-xl">+</span>
            </div>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">QUALITY INGREDIENTS</button>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">PERSONALIZED DESIGNS</button>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">ON-TIME DELIVERY</button>
            <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">AFFORDABLE PRICES</button>
            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">VALUES</button>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/200x200.png?text=Delicious+Cake" alt="Delicious Cake" className="w-48 h-48 object-cover rounded" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 text-red-200 text-4xl font-cursive transform rotate-12 opacity-50 pointer-events-none">bakejoy</div>
    </div>
  );
};

export default BakeJoyComponent;