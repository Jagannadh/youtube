"use client";
import React from "react";
import Image from "next/image";
import { Avatar } from "@material-ui/core";

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}: {
  image: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  channelImage: string;
}) {
  return (
    <div className="mb-10 w-72">
      <div className="relative h-36 w-64">
        <Image fill src={image} alt="" />
      </div>
      <div className="mt-2.5 flex pr-7">
        <Avatar src={channelImage} alt={channel} />
        <div className="ml-4 ">
          <h4 className="mb-1 text-sm">{title}</h4>
          <p className="text-sm text-gray-500">{channel}</p>
          <p className="text-sm text-gray-500">
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
