const LeftToolTip = () => {
  return (
    <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-10 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Left Tooltip
      </span>
      <div
        id="tooltip-animation"
        role="tooltip"
        className="absolute invisible group-hover:visible opacity-0
            group-hover:opacity-100 whitespace-nowrap inline-block px-3 py-2
            text-sm font-medium text-white transition-all duration-300
            bg-gray-700 rounded-lg shadow-sm tooltip dark:bg-gray-700 transform            
            left-[-100px]"
      >
        <span
          className="absolute inner-block border-[7px] top-1/2
                -translate-y-1/2 right-[-6px] 
                border-l-0 border-b-transparent border-t-transparent
                border-r-gray-700 rotate-180"
        ></span>
        Tooltip text
      </div>
    </button>
  );
};

export default LeftToolTip;
