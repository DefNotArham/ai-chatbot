import { OpenRouter } from "@openrouter/sdk";
import dotenv from "dotenv";

dotenv.config();

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const generateAiResponse = async (messages) => {
  const response = await openrouter.chat.send({
    chatRequest: {
      model: "cohere/north-mini-code:free",
      messages: messages,
    },
  });

  return response.choices[0].message.content;
};

export default generateAiResponse;
