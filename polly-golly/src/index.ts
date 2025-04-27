import OpenAI from "openai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

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

function handleOptions(): Response {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === 'OPTIONS') {
      // Handle CORS preflight
      return handleOptions();
    }

    const openai = new OpenAI({
      // @ts-ignore
      apiKey: env.OPENAI_API_KEY,
    });

    try {
      const body = await request.json();
	  //@ts-ignore
      const { prompt, language } = body;

      if (!prompt || !language || typeof prompt !== 'string' || typeof language !== 'string') {
        return withCors(new Response('Invalid request', { status: 400 }));
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          { role: 'system', content: `You are a language translator. Only translate text to ${language}` },
          { role: 'user', content: prompt }
        ],
        temperature: 0.5,
      });

      const result = completion.choices[0]?.message?.content ?? '';

      return withCors(new Response(JSON.stringify({ result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));

    } catch (e) {
      console.error(e);
      return withCors(new Response('Internal Server Error', { status: 500 }));
    }
  }
} satisfies ExportedHandler<Env>;
