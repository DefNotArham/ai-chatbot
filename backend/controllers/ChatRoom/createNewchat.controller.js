import ChatRoom from "../../model/ChatRoom.model.js";
import Message from "../../model/Message.model.js";

import generateAiResponse from "../../ai/generateAiResponse.js";
import generateChatTitle from "../../ai/generateChatTitle.js";

const createNewchat = async (req, res) => {
  const { userMessage, sessionId } = req.body;

  try {
    if (!userMessage)
      return res.status(400).json({
        success: false,
        message: "Message required",
      });

    const chatroom = new ChatRoom({
      name: "New Chat",
      sessionId,
    });

    const message = new Message({
      role: "user",
      content: userMessage,
      chatroom: chatroom._id,
    });

    const aiResponse = await generateAiResponse(userMessage);
    const title = await generateChatTitle(userMessage);
  } catch (error) {}
};

export default createNewchat;
