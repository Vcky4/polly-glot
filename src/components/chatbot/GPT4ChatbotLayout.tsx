"use client";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatActions from "./ChatActions";

interface Message {
  text: string;
  isBot: boolean;
}

const GPT4ChatbotLayout: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Select the language you <br /> me to translate into, type your text and hit send!",
      isBot: true,
    },
    { text: "How are you?", isBot: false },
    { text: "Comment allez-vous?", isBot: true },
  ]);

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages([...messages, { text: message, isBot: false }]);

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      // This is a simple mock translation - in a real app, you'd call a translation API
      const translations: Record<string, string> = {
        hello: "Bonjour",
        "how are you": "Comment allez-vous",
        "good morning": "Bonjour",
        "thank you": "Merci",
        goodbye: "Au revoir",
      };

      const lowerMessage = message.toLowerCase();
      const translation = translations[lowerMessage] || "Je ne comprends pas";

      setMessages((prev) => [...prev, { text: translation, isBot: true }]);
    }, 1000);
  };

  const handleActionClick = (actionType: string) => {
    // Handle different action button clicks
    console.log(`Action clicked: ${actionType}`);

    // Example implementation for help button
    if (actionType === "help") {
      setMessages([
        ...messages,
        {
          text: "You can type any text and I'll translate it to French. Try saying 'hello' or 'thank you'!",
          isBot: true,
        },
      ]);
    }
  };

  return (
    <div className="bg-white flex max-w-[390px] flex-col overflow-hidden items-stretch pb-8">
      <ChatHeader />
      <div className="bg-white self-center flex w-full max-w-[362px] flex-col items-stretch mt-[30px] pt-11 pb-[18px] px-6 rounded-[15px] border-[rgba(37,47,66,1)] border-solid border-4">
        {messages.map((msg, index) => (
          <div key={index} className={index > 0 ? "mt-[29px]" : ""}>
            <ChatMessage message={msg.text} isBot={msg.isBot} />
          </div>
        ))}
        <ChatInput onSendMessage={handleSendMessage} />
        <ChatActions onActionClick={handleActionClick} />
      </div>
    </div>
  );
};

export default GPT4ChatbotLayout;
