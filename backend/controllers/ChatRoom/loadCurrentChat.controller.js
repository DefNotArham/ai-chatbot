import ChatRoom from "../../model/ChatRoom.model.js";
import Message from "../../model/Message.model.js";

const loadCurrentChatController = async (req, res) => {
  const { chatroomId } = req.params;

  try {
    const chatroom = await ChatRoom.findById(chatroomId);

    if (!chatroom) {
      return res.status(404).json({
        success: false,
        message: "Chatroom not found",
      });
    }

    const messages = await Message.find({
      chatroom: chatroom._id,
    });

    res.status(200).json({
      success: true,
      chatroom,
      messages,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default loadCurrentChatController;
