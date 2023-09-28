import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import React , { useEffect, useState} from "react";
import { IoClose } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { calculateTime } from "@/utils/CalculateTime";

function SearchMessages() {

  const[{currentChatUser , messages} , dispatch] = useStateProvider();
  const [searchTerm, setsearchTerm] = useState("")
  const [searchedMessages , setSearchedMessages] = useState([])


useEffect(() => {
  if(searchTerm)
  {
    setSearchedMessages(messages.filter(message => message.type === "text" && message.message.includes(searchTerm)))
  }
  else{
    setSearchedMessages([])
  }
})


  return <div className="border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col max-h-screen z-10">
    <div className="h-16 px-4 py-5 flex gap-10 bg-panel-header-background items-center text-primary-strong">
      <IoClose className="cursor-pointer text-2xl text-icon-lighter"
      onClick={()=>dispatch({type : reducerCases.SET_MESSAGE_SEARCH})}
      />
      <span>Search Messages</span>
    </div>
    <div className="overflow-auto h-full custom-scrollbar">
        <div className="flex items-center flex-col w-full">
          <div className="flex px-5 items-center h-14 gap-3 w-full">
            <div className="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
      <div>
        <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-lg"/>
      </div>
      <div>
        <input 
        type="text" 
        placeholder="search messages" 
        className="bg-transparent text-sm focus:outline-none text-white w-full"
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        >
        </input>
      </div>
    </div>
          </div>
          <span className="mt-10 text-secondary">
            {!searchTerm.length && `Search for message with ${currentChatUser.name}`}
          </span>
        </div> 
        <div className="flex justify-center flex-col h-full">
          {
            searchTerm.length > 0 &&  !searchedMessages.length && (<span className="text-secondary w-full justify-center flex">
              No messages found
            </span>
            )
          }
          <div className="flex flex-col w-full h-full">
              {
                searchedMessages.map((message) => <div className="flex cursor-pointer justify-center hover:bg-background-default-hover w-full px-5 border-b-[0.1px] border-secondary py-5">
                  <div className="text-sm text-secondary">
                    {calculateTime(message.createdAt)}
                  </div>
                  <div className="text-icon-green">{message.message}</div>
                </div>)
              }
          </div>
        </div>
    </div>
  </div>;
}

export default SearchMessages;
