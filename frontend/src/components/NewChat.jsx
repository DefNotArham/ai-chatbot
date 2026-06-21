import React from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useChatroomStore from "../stores/Chatroom.store.js";

const NewChat = () => {
  const [input, setInput] = useState("");

  const { ChatRooms, createChatRoom } = useChatroomStore();
  const sessionId = localStorage.getItem("sessionId");

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <h1 className="text-4xl font-bold">How can I help you today?</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!input.trim()) return;

          await createChatRoom(input, sessionId);
        }}
        className="bg-input-bg border border-white/10 rounded-3xl p-4 flex items-center gap-3 w-[80%] mt-5"
      >
        <textarea
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-transparent resize-none border-none outline-none text-white placeholder:text-slate-400 min-h-7"
        />

        <button className="w-[42px] h-[42px] rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white flex items-center justify-center cursor-pointer">
          <FaArrowRight size={15} />
        </button>
      </form>
    </div>
  );
};

export default NewChat;
