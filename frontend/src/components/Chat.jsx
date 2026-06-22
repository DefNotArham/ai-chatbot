import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col h-full w-[80%] bg-chat-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl max-w-[70%]">
            How does AI work?
          </div>
        </div>

        {/* AI Message */}
        <div className="flex justify-start">
          <div className="bg-white/10 text-white px-4 py-3 rounded-2xl max-w-[70%]">
            AI works by using neural networks to learn patterns from large
            amounts of data and generate responses.
          </div>
        </div>
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
