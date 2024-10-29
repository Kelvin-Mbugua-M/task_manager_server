import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Harry Fettel",
    messages: [
      { id: 1, sender: "Harry Fettel", content: "Hey, can we talk?", time: "9:30 am" },
      { id: 2, sender: "You", content: "Sure, what's up?", time: "9:32 am" },
    ],
  },
  {
    id: 2, 
    name: "Frank Garcia", 
    messages: [
      { id: 1, sender: "Frank Garcia", content: "Hello! How are you?", time: "8:30 am" },
      { id: 2, sender: "You", content: "Doing well, thanks!", time: "8:35 am" },
    ],
  },
  {
    id: 3,
    name: "Maria Jeremy",
    messages: [
      { id: 1, sender: "Maria Jeremy", content: "Can you send the report?", time: "7:45 am" },
      { id: 2, sender: "You", content: "Sure, give me a moment.", time: "7:50 am" },
    ],
  },
];

function Projects() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <ContactList contacts={contacts} setSelectedChat={setSelectedChat} />
      <ChatArea selectedChat={selectedChat} />
    </div>
  );
}

const ContactList = ({ contacts, setSelectedChat }) => (
  <div className="w-80 h-full bg-gray-850 p-6 flex flex-col space-y-6 overflow-y-auto">
    <div className="flex items-center bg-gray-700 rounded-full px-3 py-2 mb-4">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-gray-300 flex-1 outline-none"
      />
    </div>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} onClick={() => setSelectedChat(contact)} />
    ))}
  </div>
);

const ContactItem = ({ contact, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600"
  >
    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
      {contact.name[0]}
    </div>
    <div className="ml-3 flex-1">
      <div className="text-sm font-semibold">{contact.name}</div>
      <div className="text-xs text-gray-400 truncate">
        {contact.messages[contact.messages.length - 1].content}
      </div>
    </div>
    <div className="text-xs text-gray-400">
      {contact.messages[contact.messages.length - 1].time}
    </div>
  </div>
);

const ChatArea = ({ selectedChat }) => (
  <div className="flex-1 bg-gray-850 p-6 flex flex-col">
    {selectedChat ? (
      <>
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">{selectedChat.name}</div>
          <div className="text-xs text-gray-400">Online</div>
        </div>
        <div className="flex-1 bg-gray-800 rounded-lg p-4 mb-4 overflow-y-auto">
          {selectedChat.messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "You" ? "justify-end" : ""} mb-2`}>
              <div
                className={`p-3 rounded-lg ${msg.sender === "You" ? "bg-blue-600" : "bg-gray-700"} max-w-xs`}
              >
                <div className="text-sm">{msg.content}</div>
                <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg outline-none"
          />
          <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </>
    ) : (
      <div className="flex items-center justify-center flex-1 text-gray-500">
        Select a contact to start chatting
      </div>
    )}
  </div>
);

export default Projects;
