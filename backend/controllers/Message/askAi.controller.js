import generateAiResponse from "../../openrouter/generateAiResponse.js";
import ChatRoom from "../../model/ChatRoom.model.js";
import Message from "../../model/Message.model.js";

const askAiController = async (req, res) => {
  const { chatroomId } = req.params;
  const { userMessage } = req.body;

  try {
    const chatroom = await ChatRoom.findById(chatroomId);

    if (!chatroom)
      return res
        .status(404)
        .json({ success: false, message: "Chatroom not found" });

    if (!userMessage) {
      return res.status(400).json({
        success: false,
        message: "Message required",
      });
    }

    const userMsg = await Message.create({
      role: "user",
      content: userMessage,
      chatroom: chatroom._id,
    });

    const previousMessages = await Message.find({
      chatroom: chatroom._id,
    }).sort({ createdAt: 1 });

    const messages = previousMessages.map((msg) => ({
      role: msg.role === "ai" ? "assistant" : msg.role,
      content: msg.content,
    }));

    const aiResponse = await generateAiResponse([
      {
        role: "user",
        content: userMessage,
      },
    ]);

    const aiMsg = await Message.create({
      role: "ai",
      content: aiResponse,
      chatroom: chatroom._id,
    });

    res.status(200).json({ success: true, messages: [userMsg, aiMsg] });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export default askAiController;
