import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input11 = () => {
  return (
    <CodeBox stringCode={` <div className="flex shadow-sm justify-center">
    <input value="Copy Me" readOnly="" className="py-1 indent-2 rounded-s-lg focus:outline-none" name="text" type="text"/>
    <button className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="pointer-events-none">
        <rect width="24" height="24"></rect>
        <rect x="4" y="8" width="12" height="12" rx="1" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect>
        <path d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"></path></svg>
    </button>
  </div>`}>
      <div className="flex shadow-sm justify-center">
        <input
          value="Copy Me"
          readOnly=""
          className="py-1 indent-2 rounded-s-lg focus:outline-none"
          name="text"
          type="text"
        />
        <button className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none"
          >
            <rect width="24" height="24"></rect>
            <rect
              x="4"
              y="8"
              width="12"
              height="12"
              rx="1"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></rect>
            <path
              d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 2"
            ></path>
          </svg>
        </button>
      </div>
    </CodeBox>
  );
};
export default Input11;
