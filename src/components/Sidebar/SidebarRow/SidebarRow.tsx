import React from "react";

function SidebarRow({ title, Icon }: { title: string; Icon: React.FC }) {
  return (
    <div className="group flex items-center py-1.5 cursor-pointer hover:bg-gray-200">
      {/* @ts-ignore */}
      <Icon className="group-hover:text-red-500"/>
      <div className="ml-4 group-hover:font-semibold">{title}</div>
    </div>
  );
}

export default SidebarRow;
