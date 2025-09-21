import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "./../assets/assets";
import moment from "moment";

const Sidebar = () => {
  const { chats, setSelectedChat, theme, setTheme, user, navigate } =
    useAppContext();
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </span>
        New Chat
      </button>

      {/* Search Chat */}
      <div
        className="flex items-center gap-2 p-3 mt-4 border border-gray-400
      dark:border-white/20 rounded-md"
      >
        <img src={assets.search_icon} className="w-4 not-dark:invert" />
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search Chat"
          className="text-xs w-full placeholder:text-gray-400 outline-none"
        />
      </div>

      {/* Recent Chats */}

      {chats.length > 0 && <p className="mt-4 text-sm">Recent Chats</p>}
      <div className="max-h-80 overflow-y-auto pr-2">
        {chats
          .filter((chat) =>
            chat.messages[0]
              ? chat.messages[0]?.content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              key={chat._id}
              className="mt-2 p-2 px-4 dark:bg-[#57317C]/10 border
            border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer
            flex justify-between group"
            >
              <div>
                <p className="truncate w-full">
                  {chat.messages.length > 0
                    ? chat.messages[0].content.slice(0, 32)
                    : chat.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                  {moment(chat.updatedAt).startOf("hour").fromNow()}
                </p>
              </div>
              <img
                src={assets.bin_icon}
                className="hidden group-hover:block w-4 cursor-pointer not-dark:invert"
              />
            </div>
          ))}
      </div>
      {/* position fix */}
      <div className="fixed bottom-0 z-10 pb-5 bg-white dark:dark:bg-transparent">
        {/* Community Images */}
        <div
          onClick={() => navigate("/community")}
          className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer
      hover:scale-105 transition-all"
        >
          <img src={assets.gallery_icon} className="w-4.5 not-dark:invert" />
          <p className="flex flex-col text-sm">Community Images</p>
        </div>

        {/* Credit purchases Option */}
        <div
          onClick={() => navigate("/credits")}
          className="flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer
      hover:scale-105 transition-all"
        >
          <img src={assets.diamond_icon} className="w-4.5 dark:invert" />
          <div className="flex flex-col text-sm">
            <p>Credits: {user?.credits}</p>
            <p className="text-sm text-gray-400">
              Purchase credits to use AuraAI
            </p>
          </div>
        </div>
        {/* Dark mode toggle */}
        <div
          className="flex justify-between items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md"
        >
          <div className="flex items-center gap-2 text-sm">
           <img src={assets.theme_icon} className="w-4 not-dark:invert " />
           <p>Dark Mode</p>
            </div>
            <label className="relative inline-flex cursor-pointer">
              <input onClick={()=>setTheme(theme === "dark" ? "light":"dark")} type="checkbox" className="sr-only peer" 
              checked={theme === "dark"} />
              <div className="w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-[#3896fa] transition-all"></div>
              <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform 
              peer-checked:translate-x-4"></span>
            </label>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Sidebar;
