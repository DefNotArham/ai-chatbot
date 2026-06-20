import { GoogleGenAi } from "@google/genai";
import dotenv from "dotenv";
import { model } from "mongoose";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateChatTitle = async (userMessage) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: `
Generate a short chat title based on the user's message.

Rules:
- Maximum 5 words
- No quotation marks
- No punctuation at the end
- Return only the title

User message:
${userMessage}
`,
  });
  return response.text.trim();
};

export default generateChatTitle;
