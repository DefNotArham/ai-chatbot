import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const useMessageStore = create((set) => ({
  Messages: [],
  currentChatLoading: false,

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
}));

export default useMessageStore;
