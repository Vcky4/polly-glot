
const useOpenAi = () => {
    const getTranslation = async (prompt: string, language: string) => {
        try {
            const completion = await fetch("https://polly-golly.okon-victor-u.workers.dev/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt, language }),
            }).then((res) => res.json());
            console.log(completion);
            const response = completion;
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