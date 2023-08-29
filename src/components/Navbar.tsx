import { ChangeEvent, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function Navbar({ onSearch }: any) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const logoutFunc = () => {
    localStorage.clear();
    window.location.href = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

  return (
    <nav className="bg-blue-600 py-4 px-6 flex items-center justify-between">
      <div className="text-white text-3xl font-semibold cursor-pointer">
        POST APP
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange} // Call handleChange on input change
          className="px-3 py-2 border rounded-md outline-none focus:border-blue-400 transition-colors"
        />
        <button
          onClick={openModal}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors"
        >
          Create Post
        </button>
        <BiLogOut
          onClick={logoutFunc}
          size={24}
          className="text-white cursor-pointer"
        />
      </div>
    </nav>
  );
}
