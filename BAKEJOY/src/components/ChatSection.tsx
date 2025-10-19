import React from 'react';
import ChatBubble from './Demo';
import laptopImage from '../images/deva-williamson-ntfGWVbBiO0-unsplash.jpg'; // hoặc ảnh từ public

const ChatSection: React.FC = () => {
  return (
    <div className="relative bg-teal-900 py-16 flex flex-col items-center overflow-hidden">
      {/* Sóng trên nếu cần */}
      <div className="absolute top-0 left-0 w-full">
        {/* SVG sóng có thể thêm ở đây */}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 relative z-10">
        {/* Bubble trái */}
        <div className="md:order-1 order-2 w-full md:w-auto">
          <ChatBubble/>
        </div>

        {/* Ảnh trung tâm */}
        <div className="md:order-2 order-1">
          <img
            src={laptopImage}
            alt="Laptop with pastries"
            className="w-[350px] md:w-[500px] object-contain"
          />
        </div>

        {/* Bubble phải */}
        
      </div>

      {/* Sóng dưới nếu cần */}
      <div className="absolute bottom-0 left-0 w-full">
        {/* SVG sóng */}
      </div>
    </div>
  );
};

export default ChatSection;
