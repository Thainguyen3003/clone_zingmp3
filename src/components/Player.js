import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);
      console.log(response);
    };

    fetchDetailSong();
  }, [curSongId]);

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
