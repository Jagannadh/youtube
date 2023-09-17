"use client";
import React from "react";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";

function Header({ items }: { items: string[] }) {
  return (
    <div className="flex">
      <MenuIcon className="mr-2" />
      <div className="relative w-24 h-auto">
        <Image fill src="youtube_logo.svg" alt="Youtube Logo" />
      </div>
    </div>
  );
}

export default Header;
