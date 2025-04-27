
"use client";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatActions from "./ChatActions";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import useOpenAi from "@/hooks/useOpenAi";

interface Message {
  text: string;
  isBot: boolean;
}

type Language = "french" | "spanish" | "german";


const GPT4ChatbotLayout: React.FC = () => {
  const openai = useOpenAi()
  const [isTranslating, setIsTranslating] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Select the language you <br /> me to translate into, type your text and hit send!",
      isBot: true,
    },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("french");

  const bottomRef = useScrollToBottom(messages);

  const handleSendMessage = async (message: string) => {
    if (!message || isTranslating) return;
    setMessages([...messages, { text: message, isBot: false }]);
    setIsTranslating(true);
    const res = await openai.getTranslation(message, selectedLanguage);
    const translation = res.replace(/<br \/>/g, "<br />");
    setIsTranslating(false);
    setMessages((prev) => [...prev, { text: translation, isBot: true }]);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language as Language);
    setMessages([
      ...messages,
      {
        text: `I'll now translate to ${language}. Try saying 'hello' or 'thank you'!`,
        isBot: true,
      },
    ]);
  };

  return (
    <div className="bg-white flex max-w-[390px] flex-col overflow-hidden items-stretch pb-8">
      <ChatHeader />
      <div className="bg-white self-center flex w-full max-w-[362px] flex-col items-stretch mt-[30px] pt-11 pb-[18px] px-6 rounded-[15px] border-[rgba(37,47,66,1)] border-solid border-4">
        <div className="overflow-y-auto max-h-[400px] space-y-[29px]">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isBot={msg.isBot} />
          ))}
          {isTranslating && (
            <div className="flex items-center">
              <span className="text-gray-500 animate-pulse">
                Translating<span className="dot-anim">.</span>
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
        <ChatActions setSelectedLanguage={handleLanguageChange} selectedLanguage={selectedLanguage} />
      </div>
    </div>
  );
};

export default GPT4ChatbotLayout;
