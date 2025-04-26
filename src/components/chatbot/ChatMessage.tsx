import React from "react";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  const messageClasses = isBot
    ? "bg-[rgba(3,90,157,1)] text-white rounded-[10px_2px_10px_10px]"
    : "bg-[rgba(101,218,101,1)] text-[rgba(51,51,51,1)] rounded-[2px_10px_10px_10px]";

  return (
    <div
      className={`w-full text-xl font-${isBot ? "semibold" : "bold"} ${
        isBot ? "leading-[26px]" : "text-center"
      } pt-[11px] pb-[${isBot ? "25" : "21"}px] px-[18px] ${messageClasses}`}
    >
      {message.includes("<br />")
        ? message.split("<br />").map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {part}
            </React.Fragment>
          ))
        : message}
    </div>
  );
};

export default ChatMessage;
