import React from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { calculateTime } from "@/utils/CalculateTime";

function ChatLIstItem({data , isContactPage = false}) {
   
  const[{ userInfo , currentChatUser } , dispatch] = useStateProvider();
  const handleContactClick = () => {
      // if(currentChatUser?.id === data?.id)
      // {
        if(!isContactPage)
        {
          dispatch({
            type:reducerCases.CHANGE_CURRENT_CHAT_USER , 
            user: {
              name: data.name,
              about: data.about,
              profilePicture: data.profilePicture,
              email: data.email,
              id: userInfo.id === data.senderId ? data.receiverId : data.senderId,
            }
          })
        }
        else
        {
          dispatch({type:reducerCases.CHANGE_CURRENT_CHAT_USER , user:{...data}})
          dispatch({type:reducerCases.SET_ALL_CONTACTS_PAGE})
        }
          
      // }
  }
  return <div 
  className={`flex cursor-pointer items-center hover:bg-background-default-hover`}
  onClick={handleContactClick}
  >
    <div className="min-w-fit px-5 pt-3 pb-1">
      <Avatar type="lg" image={data?.profilePicture}/> 
    </div>
    <div className="min-h-full fle flex-col justify-center mt-3 pr-2 w-full">
      <div className="flex justify-between">
        <div>
          <span className="text-white">{data?.name}</span>
        </div>
        {/* {
          isContactPage && (
            <div>
              <span className={`${!data.totalUnreadMessages > 0 ? "text-secondary" : "text-icon-green"} text-sm`}>
                {calculateTime(data.createdAt)}
              </span>
            </div>
          )
        }
        {
          data.totalUnreadMessages > 0 && <span className="bg-icon-green px-[5px] rounded-full text-sm">
            {totalUnreadMessages}
          </span>
        } */}
      </div>
    </div>
  </div>;
}

export default ChatLIstItem;
