import logo from "../assets/logo-zingmp3.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle =
  "py-2 px-[25px] font-bold flex gap-4 text-[13px] text-[#32323D] items-center";
const activeStyle =
  "py-2 px-[25px] font-bold flex gap-4 text-[13px] text-[#0F7070] items-center";

function SidebarLeft() {
  return (
    <div className="flex flex-col bg-[#DDE4E4]">
      <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center">
        <img src={logo} alt="logo" className="w-[120px] h-10 " />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
          >
            {item.icons}
            <span className="">{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SidebarLeft;
