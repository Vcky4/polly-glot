import React from "react";

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-[rgba(13,24,46,1)] flex w-full flex-col overflow-hidden text-[43px] text-[rgba(50,205,50,1)] font-extrabold whitespace-nowrap pb-3.5 px-[70px]">
      <div className="flex flex-col relative aspect-[1.513] gap-[15px] overflow-hidden py-[57px]">
        <img
          src="/header.png"
          alt="Background pattern"
          className="absolute h-full w-full object-cover inset-0"
        />
      </div>
    </div>
  );
};

export default ChatHeader;
