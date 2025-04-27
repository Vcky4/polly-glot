import React from "react";
import GPT4ChatbotLayout from "../components/chatbot/GPT4ChatbotLayout";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full mx-auto">
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
