import icons from "../ultis/icons";
import Search from "./Search";

const { AiOutlineArrowLeft, AiOutlineArrowRight, BiSearch } = icons;

function Header() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-6 w-full">
        <div className="flex gap-4 text-gray-400 items-center">
          <span>
            <AiOutlineArrowLeft size={24} />
          </span>
          <span>
            <AiOutlineArrowRight size={24} />
          </span>
        </div>
        <div className="w-1/2"><Search/></div>
      </div>
      <div>Login</div>
    </div>
  );
}

export default Header;
