import OpenAI from "openai";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, HEAD, OPTIONS",
  "Access-Control-Max-Age": "86400",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
  "Allow": "GET, POST, PUT, DELETE, HEAD, OPTIONS",
};

function handleOptions(request: Request): Response {
  const headers = new Headers(corsHeaders);
  return new Response(null, { status: 204, headers });
}

function withCors(response: Response): Response {
  const newHeaders = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeaders)) {
    newHeaders.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (request.method === "OPTIONS") {
      return handleOptions(request);
    }

    if (pathname === "/translate") { // <== fix here!
      const openai = new OpenAI({
        // @ts-ignore
        apiKey: env.OPENAI_API_KEY,
      });

      try {
        const body = await request.json();
        //@ts-ignore
        const { prompt, language } = body;

        if (!prompt || !language || typeof prompt !== "string" || typeof language !== "string") {
          return withCors(new Response("Invalid request", { status: 400 }));
        }

        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          store: true,
          messages: [
            { role: "system", content: `You are a language translator. Only translate text to ${language}` },
            { role: "user", content: prompt },
          ],
          temperature: 0.5,
        });

        const result = completion.choices[0]?.message?.content ?? "";

        return withCors(new Response(JSON.stringify({ result }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }));

      } catch (error) {
        console.error(error);
        return withCors(new Response("Internal Server Error", { status: 500 }));
      }
    }

    // fallback for unknown routes
    return withCors(new Response("Not Found", { status: 404 }));
  }
} satisfies ExportedHandler<Env>;
