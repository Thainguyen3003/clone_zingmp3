import icons from "../ultis/icons";

const { BiSearch } = icons;

function Search() {
  return (
    <div className="w-full flex items-center bg-[#DDE4E4] rounded-[20px]">
      <span className="h-10 pl-4 flex items-center justify-center text-gray-500">
        <BiSearch size={24} />
      </span>
      <input
        type="text"
        className="outline-none w-full bg-[#DDE4E4] px-4 py-2 rounded-[20px] h-10 text-gray-500"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
}

export default Search;
