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

      set(() => ({
        ChatRooms: response.data.Chatrooms,
      }));
    } catch (error) {
      console.log(error);
    }
  },

  createChatRoom: async (userMessage, sessionId) => {
    try {
      const response = await axios.post(`${API_URL}/chatroom/create-chatroom`, {
        userMessage,
        sessionId,
      });

      set((state) => ({
        Chatrooms: [response.data.chatroom, ...state.ChatRooms],
      }));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useChatroomStore;
