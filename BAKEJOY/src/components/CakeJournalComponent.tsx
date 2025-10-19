import React from 'react';

const CakeJournalComponent: React.FC = () => {
  return (
    <div className="bg-amber-100 min-h-screen flex flex-col items-center py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-teal-200/50 rounded-b-full"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8">Cake Journal</h1>
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition">Tips & Trick</button>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">New Article</button>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">Promotions</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200.png?text=Our+Favorite+Cakes" alt="Our Favorite Cakes" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">Our Favorite Cakes that Always Make It to The Best Seller</h3>
              <a href="#" className="text-gray-600 text-sm mt-2 inline-block hover:underline">Read More</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200.png?text=Birthday+Cake" alt="Designing Your Own Customized Dream Birthday Cake" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">Designing Your Own Customized Dream Birthday Cake</h3>
              <a href="#" className="text-gray-600 text-sm mt-2 inline-block hover:underline">Read More</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/300x200.png?text=Occasion+Cake" alt="Choosing the Right Cake for Any Occasion" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-600">Choosing the Right Cake for Any Occasion and Party: A Guide</h3>
              <a href="#" className="text-gray-600 text-sm mt-2 inline-block hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 text-red-200 text-4xl font-cursive transform rotate-12 opacity-50 pointer-events-none">bakejoy</div>
    </div>
  );
};

export default CakeJournalComponent;