import { FaPlus } from "react-icons/fa6";

import useChatroomStore from "../stores/Chatroom.store.js";
import { useEffect } from "react";

const Sidebar = () => {
  const { ChatRooms, loadChats, createChatRoom } = useChatroomStore();

  useEffect(() => {
    const fetchData = async () => {
      await loadChats(sessionId);
    };

    fetchData();
  }, [ChatRooms]);

  return (
    <div className="bg-sidebar-background p-6">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
      <div>
        <button className="bg-azure-blue flex items-center gap-1 text-sm w-50 mt-6 h-10 px-3 rounded-lg font-bold cursor-pointer">
          <FaPlus />
          New Chat
        </button>

        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
