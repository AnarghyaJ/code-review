import { Configuration, OpenAIApi } from "openai";
const defaultEngine: string = 'gpt-3.5-turbo';

export module RequestHandler {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    export async function getListOFEngines() {
        return await openai.listEngines();
    }

    export async function getCompletion(prompt: string, engine: string) {
        return await openai.createChatCompletion({
            model: engine ?? defaultEngine,
            messages: [{ role: 'user', content: prompt }],
            stream: true,
        });
    }

}
