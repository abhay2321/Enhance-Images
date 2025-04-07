import React from "react";
import { TbLoader3 } from "react-icons/tb";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <TbLoader3 className="animate-spin text-4xl text-blue-500" />
    </div>
  );
}

export default Loading;
