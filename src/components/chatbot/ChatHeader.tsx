import React from "react";

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-[rgba(13,24,46,1)] flex w-full flex-col overflow-hidden text-[43px] text-[rgba(50,205,50,1)] font-extrabold whitespace-nowrap pb-3.5 px-[70px]">
      <div className="flex flex-col relative aspect-[1.513] gap-[15px] overflow-hidden py-[57px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/8c32da3cff5dd070f746dd3330f5c090f929cbf9?placeholderIfAbsent=true"
          alt="Background pattern"
          className="absolute h-full w-full object-cover inset-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/1a7bf6bf94e329c49e7d4baaca379064c1bf214e?placeholderIfAbsent=true"
          alt="PollyGlot logo"
          className="aspect-[1.12] object-contain w-[95px] shrink-0"
        />
        <h1 className="relative basis-auto">PollyGlot</h1>
      </div>
    </div>
  );
};

export default ChatHeader;
