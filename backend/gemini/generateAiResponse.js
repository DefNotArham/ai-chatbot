import { GoogleGenAi } from "@google/genai";
import dotenv from "dotenv";
import { model } from "mongoose";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateAiResponse = async (userMessage) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: userMessage,
  });

  return response.text;
};

export default generateAiResponse;
