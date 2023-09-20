"use client";
import React from "react";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="z-100 flex items-center justify-between bg-white p-2">
      <div className="flex">
        <MenuIcon className="mr-4" />
        <div className="relative h-auto w-24">
          <Image fill src="youtube_logo.svg" alt="Youtube Logo" />
        </div>
      </div>
      <div className="flex w-80 border">
        <input
          className="w-full rounded-md border-0 border-gray-300 "
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="w-10 bg-slate-400" />
      </div>
      <div className="flex gap-2">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <div className="w-6 h-6">
          <Avatar
            src="https://yt3.googleusercontent.com/yti/AOXPAcV01qhzxoeTw-l46W8uaOiZLgpo26MwzCX0kh_RBA=s88-c-k-c0x00ffffff-no-rj"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
