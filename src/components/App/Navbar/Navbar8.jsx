import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";
const Navbar8 = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <CodeBox>
        <nav className="border-b bg-gray-400">
          <div className="container relative max-w-screen-lg mx-auto flex justify-between h-14">
            {/* Brand */}
            <a
              href="#!"
              className="flex items-center cursor-pointer  px-2 ml-3"
            >
              {/* Logo */}
              <div className="rounded bg-purple-400 text-white font-bold px-4 flex justify-center text-3xl pt-0.5">
                Soft UI
              </div>
            </a>
            {/* Navbar Toggle Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="block md:hidden text-black p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5"
              type="button"
              aria-controls="navbar-main"
              aria-expanded={showMenu}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {/* Nav Links */}
            <ul
              className={`md:flex text-black text-base mr-3 origin-top z-10 ${
                showMenu
                  ? "block absolute top-14 border-b bg-white w-full p-2"
                  : "hidden"
              }`}
              id="navbar-main"
            >
              <li
                className={`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black ${
                  showMenu && "py-1"
                }`}
              >
                <a href="#!">Laravel</a>
              </li>
              <li
                className={`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black ${
                  showMenu && "py-1"
                }`}
              >
                <a href="#!">Livewire</a>
              </li>
              <li
                className={`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black ${
                  showMenu && "py-1"
                }`}
              >
                <a href="#!">TailwindCSS</a>
              </li>
              <li
                className={`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black ${
                  showMenu && "py-1"
                }`}
              >
                <a href="#!">Alpine JS</a>
              </li>
              <li
                className={`px-3 cursor-pointer transition-all duration-300 hover:bg-purple-50 flex items-center hover:text-black ${
                  showMenu && "py-1"
                }`}
              >
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </CodeBox>
    </>
  );
};
export default Navbar8;
