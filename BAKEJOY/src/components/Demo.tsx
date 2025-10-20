import React from 'react';
import laptopImage from '../images/deva-williamson-1.jpg'; // hoặc ảnh từ public


interface ChatBubbleProps {
  message: string;
  author: string;
  direction: 'left' | 'right';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, author, direction }) => {
  const isLeft = direction === 'left';

  return (
    <div className={`relative max-w-xs p-6 rounded-3xl bg-[#FFF3EF] text-[#CC6F68] shadow-md
      ${isLeft ? 'mr-auto' : 'ml-auto'}`}
    >
      {/* Đuôi móc cong */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-7 bg-[#FFF3EF] shadow-md
          ${isLeft
            ? 'right-[-14px] rounded-tr-[20px] rounded-br-[20px]'
            : 'left-[-14px] rounded-tl-[20px] rounded-bl-[20px]'
          }`}
      />
      <p className="text-sm leading-6">{message}</p>
      <p className="mt-4 font-semibold">{author}</p>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="relative min-h-screen bg-[#2D544F] flex flex-col items-center justify-center py-20 px-6">
      {/* Wave trên */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#F9E7DD] rounded-b-[50%_40%]"></div>
      {/* Wave dưới */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F9E7DD] rounded-t-[50%_40%]"></div>

      <div className="relative flex items-center gap-16 max-w-5xl w-full z-10">
        {/* Chat trái */}
        <ChatBubble
          direction="left"
          message="BakeJoy made my daughter's birthday special with a cake that tasted as good as it looked!"
          author="Mike Johnson"
        />

        {/* Ảnh laptop nằm giữa, z-index thấp */}
        <div className="relative z-0 w-[380px] h-[270px] drop-shadow-lg bg-white rounded-lg overflow-hidden">
          <img
            src={laptopImage}
            alt="Laptop with cake"
            className="object-contain w-full h-full rounded-lg"
          />
        </div>

        {/* Chat phải */}
        <ChatBubble
          direction="right"
          message="Their chocolate cake is the best I have ever tasted in town. Keep up the great work, BakeJoy!"
          author="Ellie Anderson"
        />
      </div>
    </div>
  );
};

export default Demo;
