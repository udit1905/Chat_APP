import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import { HOST } from "@/utils/ApiRoutes";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";

function ImageMessage({ message }) {
  const [{currentChatUser , userInfo}] = useStateProvider();
  return <div className={`p-1 rounded-lg ${message.senderId === currentChatUser.id ? "bg-incoming-background" : "bg-outgoing-background"}`}>
    <div className="realtive">
      <Image src={`${HOST}/${message.message}`}
      className="rounded-lg"
      alt="asset"
      height={300}
      width={300}
      />
      <div className="absolute bottom-1 right-1 flex items-end gap-1">
        <span>
           <span className="text-[11px] text-bubble-meta pt-1 min-w-fit">
               {calculateTime(message.createdAt)}
            </span>
            <span>
                {
                  message.senderId === userInfo.id && <MessageStatus messageStatus={message.messageStatus}/>
                }
            </span>
        </span>
      </div>
    </div>
  </div>;
}

export default ImageMessage;
