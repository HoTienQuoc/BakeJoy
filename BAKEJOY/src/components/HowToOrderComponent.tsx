import React from 'react';

const HowToOrderComponent: React.FC = () => {
  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-teal-200/50 rounded-b-full"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-12">How to Order</h1>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 w-64 text-center shadow-lg">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h2 className="text-lg font-semibold text-red-600">Choose</h2>
            <p className="text-gray-600 text-sm mt-2">Pick your favorite cake flavor and design.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 w-64 text-center shadow-lg">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h2 className="text-lg font-semibold text-red-600">Customize</h2>
            <p className="text-gray-600 text-sm mt-2">Add personal touches and special requests.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 w-64 text-center shadow-lg">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h2 className="text-lg font-semibold text-red-600">Order</h2>
            <p className="text-gray-600 text-sm mt-2">Place and pay your order via online.</p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg p-6 w-64 text-center shadow-lg">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">4</span>
            </div>
            <h2 className="text-lg font-semibold text-red-600">Wait</h2>
            <p className="text-gray-600 text-sm mt-2">Your cake delivered right to your door.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 text-red-200 text-4xl font-cursive transform rotate-12 opacity-50 pointer-events-none">bakejoy</div>
    </div>
  );
};

export default HowToOrderComponent;