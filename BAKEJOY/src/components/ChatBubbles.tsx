import React from "react";

const BubbleChat: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Container chính */}
      <div className="relative flex justify-center items-center w-[750px] h-[420px] bg-gray-50 rounded-2xl shadow-lg">
        {/* Ảnh trung tâm */}
        <img
          src="https://images.unsplash.com/photo-1541976076758-95bbf9c1f2c3?w=500"
          alt="Cake"
          className="absolute w-[350px] h-[350px] object-cover rounded-full shadow-2xl z-[1]"
        />

        {/* Bubble bên trái */}
        <div className="absolute left-0 top-1/2 -translate-x-[25%] -translate-y-1/2 z-[2] flex flex-col items-end">
          <div className="relative bg-[#563444] text-white text-center p-4 rounded-2xl shadow-lg max-w-[240px] text-[16px]">
            BakeJoy made my daughter's birthday special with a cake that tasted
            as good as it looked!
            <span className="block mt-2 text-sm opacity-80">— Mike Johnson</span>

            {/* Đuôi bubble bên trái */}
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-[#563444]" />
          </div>
        </div>

        {/* Bubble bên phải */}
        <div className="absolute right-0 top-1/2 translate-x-[25%] -translate-y-1/2 z-[2] flex flex-col items-start">
          <div className="relative bg-[#eb6841] text-white text-center p-4 rounded-2xl shadow-lg max-w-[240px] text-[16px]">
            Their chocolate cake is the best I have ever tasted in town. Keep up
            the great work, BakeJoy!
            <span className="block mt-2 text-sm opacity-80">— Ellie Anderson</span>

            {/* Đuôi bubble bên phải */}
            <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-[#eb6841]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleChat;
