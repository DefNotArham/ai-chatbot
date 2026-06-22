import { OpenRouter } from "@openrouter/sdk";
import dotenv from "dotenv";

dotenv.config();

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const generateChatTitle = async (userMessage) => {
  const response = await openrouter.chat.send({
    chatRequest: {
      model: "cohere/north-mini-code:free",
      messages: [
        {
          role: "user",
          content: `
Generate a short chat title based on the user's message.

Maximum 5 words.
No quotation marks.
No punctuation.
Return only the title.

User message:
${userMessage}
        `,
        },
      ],
    },
  });

  return response.choices[0].message.content.trim();
};

export default generateChatTitle;
