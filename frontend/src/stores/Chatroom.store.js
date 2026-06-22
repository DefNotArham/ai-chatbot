import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useChatroomStore = create((set) => ({
  ChatRooms: [],
  createChatLoading: false,
  loadCurrentChatLoading: false,

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
      set({ createChatLoading: true });

      const response = await axios.post(`${API_URL}/chatroom/create-chatroom`, {
        userMessage,
        sessionId,
      });

      set((state) => ({
        ChatRooms: [response.data.chatroom, ...state.ChatRooms],
        createChatLoading: false,
      }));

      return response.data;
    } catch (error) {
      console.log(error);
      set({ createChatLoading: false });
    }
  },
}));

export default useChatroomStore;
