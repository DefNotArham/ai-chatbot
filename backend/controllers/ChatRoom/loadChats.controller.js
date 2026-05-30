import ChatRoom from "../../model/ChatRoom.model.js";

const loadChatsController = async (req, res) => {
  const { sessionId } = req.query;
  try {
    if (!sessionId)
      return res
        .status(400)
        .json({ success: false, message: "SessionID required" });

    const Chatrooms = await ChatRoom.find({
      sessionId,
    });

    res.status(200).json({ success: true, Chatrooms });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default loadChatsController;
