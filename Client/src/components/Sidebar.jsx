import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "./../assets/assets";

const Sidebar = () => {
  const { chats, setSelectedChat, theme, setTheme, user } = useAppContext();
  const [search, setSearch] = useState("");
  return (
    <div
      className="flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r
  border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="md:max-w-20 max-w-14"
          src={theme === "light" ? assets.AuraLogo : assets.AuraLogo}
          alt="Aura"
        />
        <h4 className="font-bold md:text-3xl text-2xl">AuraAI</h4>
      </div>
      {/* New Chat Button */}
      <button
        className="flex justify-center gap-1 items-center w-full py-2 mt-10
      text-white bg-gradient-to-r from-[#29e6ff] to-[#3896fa] text-sm rounded-md
        cursor-pointer"
      >
        <span className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
       <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      
        </span>
        New Chat
      </button>
    </div>
  );
};

export default Sidebar;
