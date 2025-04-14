"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { BotIcon, Loader2Icon } from "lucide-react";
import Markdown from "react-markdown";
import { Message } from "./Chat";

function ChatMessage({ message }: { message: Message }) {
  const isHuman = message.role === "human";
  const { user } = useUser();

  return (
    <div className={`chat ${isHuman ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          {isHuman ? (
            user?.imageUrl && (
              <Image
                src={user?.imageUrl}
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />
            )
          ) : (
            <div className="h-10 w-10 bg-cyan-600 flex items-center justify-center">
              <BotIcon className="text-white h-7 w-7 " />
            </div>
          )}
        </div>
      </div>

      <div
        className={`chat-bubble prose rounded-xl ${isHuman && "bg-cyan-800 text-white"}`}
      >
        {message.message === "Thinking..." ? (
          <div className="flex items-center justify-center">
            <Loader2Icon className="animate-spin h-5 w-5 text-cyan-400" />
          </div>
        ) : (
          <Markdown>{message.message}</Markdown>
        )}
      </div>
    </div>
  );
}
export default ChatMessage;