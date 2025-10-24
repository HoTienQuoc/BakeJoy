import React from "react";
import iconComment from "../images/icon-comment.png";
import croissant from "../images/croissant.png";

interface ChatBubbleProps {
  text: string;
  author: string;
  align: "left" | "right";
  imageSrc: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  author,
  align,
  imageSrc,
}) => {
  const isLeft = align === "left";

  return (
    <div
      className={`absolute w-[300px] text-sm text-gray-800 flex flex-col ${
        isLeft ? "left-[-200px]" : "right-[-200px]"
      } z-[50]`} // 💥 luôn trên ảnh
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <div className="relative flex items-center justify-center">
        {/* background bubble */}
        <img
          src={imageSrc}
          alt="chat bubble"
          className={`w-full h-auto drop-shadow-lg select-none pointer-events-none ${
            isLeft ? "scale-x-[-1]" : ""
          }`}
        />

        {/* text inside bubble (always left-aligned) */}
        <div
          className={`absolute top-[22%] bottom-[22%] w-[78%] flex flex-col justify-center text-left ${
            isLeft ? "left-[12%]" : "left-[10%]"
          }`}
        >
          <p className="text-[13px] leading-snug font-medium">{text}</p>
          <p className="mt-2 text-[12px] font-semibold text-rose-700">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialDisplay: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#2D544F] overflow-hidden">
      {/* background croissant */}
      <img
        src={croissant}
        alt="Croissant"
        className="absolute w-[500px] h-[350px] object-contain rounded-xl z-[0]"
      />

      {/* layer chứa 2 bubble */}
      <div className="relative w-[500px] h-[350px] flex items-center justify-center z-[40]">
        <ChatBubble
          text="BakeJoy made my daughter's birthday special with a cake that tasted as good as it looked!"
          author="Mike Johnson"
          align="left"
          imageSrc={iconComment}
        />
        <ChatBubble
          text="Their chocolate cake is the best I have ever tasted in town. Keep up the great work, BakeJoy!"
          author="Ellie Anderson"
          align="right"
          imageSrc={iconComment}
        />
      </div>
    </div>
  );
};

export default TestimonialDisplay;
