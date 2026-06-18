import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import useChatroomStore from "../stores/Chatroom.store.js";

const Sidebar = () => {
  const { ChatRooms, loadChats, createChatRoom } = useChatroomStore();

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");

    if (sessionId) {
      loadChats(sessionId);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-sidebar-background p-6 w-[20%]">
      <h1 className="text-3xl font-bold">AI Assistant</h1>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-azure-blue flex items-center gap-1 text-sm w-full mt-6 h-10 px-3 rounded-lg font-bold cursor-pointer"
        >
          <FaPlus />
          New Chat
        </button>

        <div className="flex flex-col gap-2 mt-5 w-full">
          {ChatRooms.map((c) => (
            <div
              className="bg-white/4 text-sm h-10 px-3 w-full rounded-lg cursor-pointer flex items-center overflow-hidden"
              onClick={() => navigate(`/chatroom/${c?._id}`)}
              key={c?._id}
            >
              <span className="truncate w-full">{c?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
