import ChatRoom from "../../model/ChatRoom.model.js";

const createNewChatController = async (req, res) => {
  const { roomName, sessionId } = req.body;

  try {
    if (!sessionId)
      return res.status(404).json({
        success: false,
        message: "Session ID required",
      });

    if (!roomName)
      return res
        .status(400)
        .json({ success: false, message: "Chat name required" });

    const newRoom = new ChatRoom({
      name: roomName,
      sessionId,
    });

    await newRoom.save();

    res.status(200).json({
      success: true,
      room: newRoom,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export default createNewChatController;
