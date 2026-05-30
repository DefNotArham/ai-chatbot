import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useChatroomStore = create((set) => ({
  ChatRooms: [],

  createChatRoom: async (sessionId, roomName) => {
    try {
      const response = await axios.post(`${API_URL}/chatroom/create-newChat`, {
        sessionId,
        roomName,
      });

      set((state) => ({
        ChatRooms: [...state.ChatRooms, response.data.room],
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useChatroomStore;
