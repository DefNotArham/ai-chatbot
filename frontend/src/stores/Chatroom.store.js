import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useChatroomStore = create((set) => ({
  ChatRooms: [],

  loadChats: async (sessionId) => {
    try {
      const response = await axios.get(`${API_URL}/chatroom/load-chats`, {
        params: { sessionId },
      });

      console.log("LOAD CHATS RESPONSE:", response.data);

      set((state) => ({
        ChatRooms: response.data.Chatrooms,
      }));
    } catch (error) {
      console.log(error);
    }
  },

  createChatRoom: async (sessionId, roomName) => {
    try {
      const response = await axios.post(`${API_URL}/chatroom/create-newChat`, {
        sessionId,
        roomName,
      });

      if (response.data.success)
        set((state) => ({
          ChatRooms: [...state.ChatRooms, response.data.room],
        }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useChatroomStore;
