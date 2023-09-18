import React from "react";

function SidebarRow({ title, Icon }: { title: string; Icon: React.FC }) {
  return (
    <div className="flex items-center py-1.5 hover:bg-gray-200">
      <Icon />
      <div className="ml-2">{title}</div>
    </div>
  );
}

export default SidebarRow;
