import OpenAI from "openai";

const useOpenAi = () => {
    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });
    const getTranslation = async (prompt: string, language: string) => {
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                store: true,
                messages: [
                    { role: 'system', content: `You are a language translator. you only translate text to ${language}` },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.5,
            });
            const response = completion.choices[0].message.content;
            return response;
        } catch (error) {
            console.error("Error fetching translation:", error);
            return "Translation failed. Please try again.";
        }

    }
    return { getTranslation };
}


export default useOpenAi;
const OPENAI_API_KEY = ''