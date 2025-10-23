import React from "react";

const HowToOrderComponent: React.FC = () => {
  const steps = [
    { title: "Choose", description: "Pick your favorite cake flavor and design." },
    { title: "Customize", description: "Add personal touches and special requests." },
    { title: "Order", description: "Place and pay your order via online." },
    { title: "Wait", description: "Your cake delivered right to your door." },
  ];

  return (
    <div className="relative bg-[#FBE4D9] min-h-[90vh] flex flex-col items-center justify-start pt-10 pb-6">
      {/* Tiêu đề */}
      <h1 className="text-[#d94b33] text-4xl md:text-5xl font-bold text-center mb-14">
        How to Order
      </h1>

      {/* Danh sách bước */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              className={`relative w-[200px] h-[380px] bg-white rounded-[140px] shadow-md flex flex-col items-center text-center transition-all duration-300 ${
                isEven ? "translate-y-[70px]" : ""
              }`}
            >
              {/* Gạch đỏ */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-32 bg-[#d94b33] ${
                  isEven ? "top-[90px]" : "bottom-[90px]"
                }`}
              />

              {/* Nội dung */}
              <div
                className={`z-10 px-5 absolute left-1/2 -translate-x-1/2 w-full ${
                  isEven ? "bottom-10" : "top-10"
                }`}
              >
                <h2 className="text-[#d94b33] text-lg font-semibold mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-600 text-sm leading-snug">
                  {step.description}
                </p>
              </div>

              {/* Số thứ tự */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-[#27594a] text-white text-2xl font-extrabold flex items-center justify-center rounded-full shadow-md ${
                  isEven ? "-top-8" : "-bottom-8"
                }`}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Watermark */}
      <div className="absolute top-8 right-10 text-[#d94b33]/20 text-6xl italic font-serif rotate-12 select-none pointer-events-none">
        bakejoy
      </div>
    </div>
  );
};

export default HowToOrderComponent;
