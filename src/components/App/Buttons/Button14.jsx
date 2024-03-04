import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="border-b">
      <div className="container relative max-w-screen-lg mx-auto flex justify-between h-14">
        {/* Brand */}
        <a
          href="#!"
          className="flex items-center cursor-pointer hover:bg-purple-50 px-2 ml-3"
        >
          {/* Logo */}
          <div className="rounded bg-purple-400 text-white font-bold w-10 h-10 flex justify-center text-3xl pt-0.5">
            A
          </div>
          <div className="text-gray-700 font-semibold ml-2">Alphabet Tech</div>
        </a>
        {/* Navbar Toggle Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block md:hidden text-gray-700 p-2 rounded hover:border focus:border focus:bg-gray-100 my-2 mr-5"
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
          className={`md:flex text-gray-700 text-base mr-3 origin-top z-10 ${
            showMenu
              ? "block absolute top-14 border-b bg-white w-full p-2"
              : "hidden"
          }`}
          id="navbar-main"
        >
          <li
            className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${
              showMenu && "py-1"
            }`}
          >
            <a href="#!">Laravel</a>
          </li>
          <li
            className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${
              showMenu && "py-1"
            }`}
          >
            <a href="#!">Livewire</a>
          </li>
          <li
            className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${
              showMenu && "py-1"
            }`}
          >
            <a href="#!">TailwindCSS</a>
          </li>
          <li
            className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${
              showMenu && "py-1"
            }`}
          >
            <a href="#!">Alpine JS</a>
          </li>
          <li
            className={`px-3 cursor-pointer hover:bg-purple-50 flex items-center hover:text-gray-800 ${
              showMenu && "py-1"
            }`}
          >
            <a href="#!">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
