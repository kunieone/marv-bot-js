import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

async function getResponse(prevText) {
  const response = await new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    }),
  ).createCompletion({
    model: "text-davinci-003",
    prompt: prevText,
    temperature: 0.7,
    max_tokens: 64,
  });
  return response;
}

export class MarvBot {
  constructor(init) {
    this.memory = init;
  }
  async answer(input) {
    this.memory += input + "\n";
    let reply = await getResponse(this.memory);
    this.memory += reply + "\n";
    return reply["choices"][0]["text"];
  }
}
