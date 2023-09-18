"use client";
import React from "react";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="flex justify-between items-center p-2 z-100 bg-white">
      <div className="flex">
        <MenuIcon className="mr-4" />
        <div className="relative h-auto w-24">
          <Image fill src="youtube_logo.svg" alt="Youtube Logo" />
        </div>
      </div>
      <div className="flex w-80 border">
        <input
          className="rounded-md w-full border-0 border-gray-300 "
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="bg-slate-400 w-10"/>
      </div>
      <div className="flex gap-2">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
      </div>
    </div>
  );
}

export default Header;
