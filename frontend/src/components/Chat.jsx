import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

import useMessageStore from "../stores/Message.store.js";
import useChatroomStore from "../stores/Chatroom.store.js";

import { FaArrowRight } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import spinner from "../assets/spinner.svg";

const Chat = () => {
  const { chatroomId } = useParams();
  const { Messages, currentChatLoading, loadCurrentChat, askaiLoading, askAi } =
    useMessageStore();

  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!chatroomId) return;

      await loadCurrentChat(chatroomId);
    };

    fetchData();
  }, [chatroomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [Messages]);

  const messagesEndRef = useRef(null);

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
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          ))
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Area */}
      <div className="p-5 border-t border-white/10">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            if (askaiLoading) return;
            if (!input.trim()) return;

            await askAi(chatroomId, input);
            setInput("");
          }}
          className="bg-input-bg border border-white/10 rounded-3xl p-3 flex items-center gap-3"
        >
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => {
              if (askaiLoading) return;

              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();

                e.currentTarget.form.requestSubmit();
              }
            }}
            placeholder="Message AI..."
            className="flex-1 bg-transparent resize-none outline-none text-white placeholder:text-slate-400 min-h-10"
          />

          <button
            disabled={askaiLoading}
            className="bg-blue-600 hover:bg-blue-700 transition rounded-xl px-5 py-3 text-white cursor-pointer"
          >
            {askaiLoading ? (
              <img src={spinner} className="w-6 h-6 animate-spin" />
            ) : (
              <FaLocationArrow size={15} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
