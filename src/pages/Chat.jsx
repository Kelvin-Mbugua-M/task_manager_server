import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { contacts,months,days } from "../data/data";
function Chats() {
  return <div className="h-24 w"></div>;
}
const Chat = () => {
  const [selectedChat,setSelectedChat] = useState(null)
  const [time, setTime] = useState({
    day: "",
    date: "",
    year: "",
    month: "",
    hour: "",
    minute: "",
    seconds:''
  });
  setInterval(() => {
    const dateToday = new Date();
    setTime({ ...time, day: dateToday.getDay(), date: dateToday.getDate(),year:dateToday.getFullYear(),month:dateToday.getMonth(),hour:dateToday.getHours(),minute:dateToday.getMinutes(),seconds:dateToday.getSeconds() });
  },500);

  return (
    <div className="w-full h-full bg-white/5 backdrop-blur-sm flex flex-row gap-0">
      <div className="h-full w-[360px] p-2 bg-white/10 backdrop-blur-md shadow-md overflow-y-auto">
        {" "}
        <div className="flex h-10 w-auto">
          <input
            type="text"
            name=""
            id=""
            className="border-none outline-none rounded-l-md pl-3 bg-black/50 backdrop-blur-md text-orange-500/80 text-sm placeholder:text-sm placeholder:text-gray-300/60"
            placeholder="search contacts"
          />
          <button className="h-auto w-8 flex items-center justify-center bg-black/50 rounded-r-md border-none outline-none ">
            <FaMagnifyingGlass className="text-orange-500" />
          </button>
        </div>
        {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} onClick={() => setSelectedChat(contact)} />
    ))}
      </div>
      <div className="h-full w-full">
        <div className="w-full h-auto text-sm text-gray-700/80 m-0 ml-4">{`${time.date} ${days[time.day]} ${months[time.month] }   ${time.year} `} {`${time.hour} ${time.minute} :  ${time.seconds} hrs`}</div>
        <div className="w-full h-full">
        <ChatArea selectedChat={selectedChat} />
        </div>
      </div>
    </div>
  );
};
const ContactItem = ({ contact, onClick }) => (
  <div
    onClick={onClick}
    className="w-full mt-2 mb-2 flex items-center p-3 bg-white/20 backdrop-blur-lg rounded-md cursor-pointer hover:bg-white/30"
  >
    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white font-bold">
      <CgProfile className="text-2xl" />
    </div>
    <div className="ml-3 flex-1">
      <div className="text-sm font-semibold">{contact.name}</div>
      <div className="text-xs text-gray-700/55 truncate overflow-ellipsis w-24">{contact.messages[contact.messages.length - 1].content}</div>
    </div>
    <div className="text-xs text-gray-700/60 overflow-ellipsis w-12">{contact.messages[contact.messages.length - 1].time}</div>
  </div>
);
const ChatArea = ({ selectedChat }) => (
  <div className="flex-1  p-6 flex flex-col h-full">
    {selectedChat ? (
      <div className="h-full w-full">
        <div classNam=" flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">{selectedChat.name}</div>
          <div className="text-xs text-gray-400">Online</div>
        </div>
        <div className="border-[1px] border-teal-300/50 outline-none  flex-1 bg-teal-400/5 backdrop-blur-2xl rounded-l-md p-4 mb-4 h-4/5 shadow-inner overflow-y-auto">
          {selectedChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : ""
              } mb-2`}
            >
              <div
                className={`p-3 rounded-lg backdrop-blur-3xl  ${
                  msg.sender === "You" ? "bg-black/20" : "bg-blue-600/20"
                } max-w-xs`}
              >
                <article className="text-sm ">{msg.content}</article>
                <article className="text-xs text-slate-400 mt-1">{msg.time}</article>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-black/40 backdrop-blur-3xl text-gray-300 px-4 py-2 rounded-l-md rounded-r-sm outline-none placeholder:text-sm"
          />
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-sm w-16 outline-none border-none">
            Send
          </button>
        </div>
      </div>
    ) : (
      <div className="h-full w-full bg-teal-400/5 backdrop-filter-md border-[1px] rounded-lg border-teal-300/50 flex items-center justify-center flex-1 text-gray-500">
        Select a contact to start chatting
      </div>
    )}
  </div>
);
export default Chat;
