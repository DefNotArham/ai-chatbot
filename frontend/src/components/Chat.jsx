import React from "react";
import { useParams } from "react-router-dom";
import useMessageStore from "../stores/Message.store.js";
import { useEffect } from "react";

const Chat = () => {
  const { chatroomId } = useParams();
  const { Messages, currentChatLoading, loadCurrentChat } = useMessageStore();

  useEffect(() => {
    const fetchData = async () => {
      if (!chatroomId) return;

      await loadCurrentChat(chatroomId);
    };

    fetchData();
  }, [chatroomId]);

  return (
    <div className="flex flex-col h-full w-[80%] bg-chat-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {currentChatLoading ? (
          <p className="text-white">Loading...</p>
        ) : (
          Messages.map((m) => (
            <div
              key={m._id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-3 rounded-2xl max-w-[70%] text-white ${
                  m.role === "user" ? "bg-blue-600" : "bg-white/10"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="p-5 border-t border-white/10">
        <form className="bg-input-bg border border-white/10 rounded-3xl p-3 flex items-center gap-3">
          <textarea
            placeholder="Message AI..."
            className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-slate-400 min-h-10"
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-5 py-3 text-white cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
