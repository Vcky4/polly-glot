
import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-neutral-100 flex w-full flex-col justify-center mt-[34px] px-4 py-3 rounded-[10px] border-[rgba(88,110,136,1)] border-solid border-2">
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="bg-transparent outline-none w-full"
            aria-label="Message input"
          />
          <button type="submit" aria-label="Send message">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5299c79167be49cb9e0d9c7654e78228/a614f73883a82ea45748d62cf47596811b0e6e35?placeholderIfAbsent=true"
              alt="Send"
              className="aspect-[1] object-contain w-[25px]"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
