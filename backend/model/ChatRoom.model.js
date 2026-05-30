import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
  {
    name: { type: String, default: "New Chat" },
    sessionId: { type: String, required: true },
  },
  { timestamps: true },
);

const ChatRoom = mongoose.model("chatroom", ChatRoomSchema);

export default ChatRoom;
