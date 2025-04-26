import React from "react";
import GPT4ChatbotLayout from "../components/chatbot/GPT4ChatbotLayout";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            PollyGlot Translation Assistant
          </h1>
          <p className="text-gray-600 mt-2">
            Your AI-powered language translation companion
          </p>
        </header>

        <section className="flex justify-center">
          <GPT4ChatbotLayout />
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2023 PollyGlot. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
