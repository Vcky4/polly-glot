import React from "react";

interface ChatActionsProps {
  onActionClick: (actionType: string) => void;
}

const ChatActions: React.FC<ChatActionsProps> = ({ onActionClick }) => {
  return (
    <div className="self-center flex w-[230px] max-w-full items-stretch gap-5 justify-between mt-[21px]">
      <button
        onClick={() => onActionClick("voice")}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        aria-label="Voice input"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/4dee0b981ab9c4370b9d1304fec3cc95047b7db4?placeholderIfAbsent=true"
          alt="Voice input"
          className="aspect-[1.52] object-contain w-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] shrink-0"
        />
      </button>
      <button
        onClick={() => onActionClick("settings")}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        aria-label="Settings"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/e1e94a57467642e3a53555f094501c9ed5eac7f0?placeholderIfAbsent=true"
          alt="Settings"
          className="aspect-[1.52] object-contain w-[50px] shrink-0"
        />
      </button>
      <button
        onClick={() => onActionClick("help")}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        aria-label="Help"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/42860df14bdca9bd48035a01c914fb78ced13950?placeholderIfAbsent=true"
          alt="Help"
          className="aspect-[1.52] object-contain w-[50px] shrink-0"
        />
      </button>
    </div>
  );
};

export default ChatActions;
