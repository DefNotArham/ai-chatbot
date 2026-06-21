import ChatRoom from "../../model/ChatRoom.model.js";
import Message from "../../model/Message.model.js";

import generateAiResponse from "../../gemini/generateAiResponse.js";
import generateChatTitle from "../../gemini/generateChatTitle.js";

const createNewchatController = async (req, res) => {
  const { userMessage, sessionId } = req.body;

  try {
    if (!userMessage)
      return res.status(400).json({
        success: false,
        message: "Message required",
      });
    const chatroom = await ChatRoom.create({
      name: "New Chat",
      sessionId,
    });

    const userMsg = await Message.create({
      role: "user",
      content: userMessage,
      chatroom: chatroom._id,
    });

    const aiResponse = await generateAiResponse(userMessage);

    const assistantMsg = await Message.create({
      role: "ai",
      content: aiResponse,
      chatroom: chatroom._id,
    });

    const title = await generateChatTitle(userMessage);

    chatroom.name = title;
    await chatroom.save();

    res.status(200).json({
      success: true,
      chatroom,
      messages: [userMsg, assistantMsg],
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default createNewchatController;
