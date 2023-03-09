import React from "react";

const Player = () => {
  return (
    <div className="bg-main-400 px-5 h-full flex">
      <div className="w-[30%] flex-auto border border-red-500 ">Detail</div>
      <div className="w-[40%] flex-auto border border-red-500 ">
        Main Player
      </div>
      <div className="w-[30%] flex-auto border border-red-500 ">Volumn</div>
    </div>
  );
};

export default Player;
