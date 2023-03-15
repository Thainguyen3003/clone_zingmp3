import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player } from "../../components";

function Public() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-main-300">
      <div className="flex w-full h-full">
        <div className="w-[240px] min-h-screen flex-none border border-blue-500">
          <SidebarLeft />
        </div>
        <div className="flex-auto border border-red-500">
          <Outlet />
        </div>
        <div className="w-[329px] hidden 1600:flex flex-none border border-green-500 animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className="flex-none h-[90px]">
        <Player />
      </div>
    </div>
  );
}

export default Public;
