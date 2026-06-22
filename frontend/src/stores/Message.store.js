import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useMessageStore = create((set) => ({
  Messages: [],
  currentChatLoading: false,
  askaiLoading: false,

  loadCurrentChat: async (chatroomId) => {
    try {
      set({ currentChatLoading: true });

      const response = await axios.get(
        `${API_URL}/chatroom/load-currentChat/${chatroomId}`,
      );

      set({
        Messages: response.data.messages,
        currentChatLoading: false,
      });
    } catch (error) {
      console.log(error);
      set({ currentChatLoading: false });
    }
  },

  askAi: async (chatroomId, userMessage) => {
    try {
      set({ askaiLoading: true });

      const response = await axios.post(
        `${API_URL}/message/askAi/${chatroomId}`,
        { userMessage },
      );

      set((state) => ({
        Messages: [...state.Messages, ...response.data.messages],
        askaiLoading: false,
      }));
    } catch (error) {
      console.log(error);

      set({ askaiLoading: false });
    }
  },
}));

export default useMessageStore;
