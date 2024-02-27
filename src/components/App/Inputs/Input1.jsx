import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input1 = () => {
  return (
    <>
      <CodeBox
        text={"Simple Text Input"}
        stringCode={`<div>
    <label htmlFor="username" className="block text-gray-200">username</label>
    <div className="mt-2">
        <input type="text" name="username" id="username" className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"/>
    </div>
</div>


// Input-2


<div className=" h-10 flex items-center justify-center bg-white overflow-hidden cursor-pointer shadow-[2px_2px_10px_rgba(0,0,0,0.075)] pl-[15px] rounded-[10px]">
<input
  type="text"
  name="text"
  className="input w-[170px] h-full text-[0.9em] caret-[rgb(255,81,0)] border-[none] outline-none"
  id="input"
  placeholder="Search"
/>
<label htmlFor="input" className=" cursor-text px-3 py-0">
  <svg viewBox="0 0 512 512" className="searchIcon w-[13px]">
    <path
      className="fill-[rgb(114,114,114)]"
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>
</label>
<div className="border h-2/5 w-[1.3px] bg-[rgb(223,223,223)]" />
<button className="micButton bg-transparent h-10 cursor-pointer duration-[0.3s] pl-3 pr-[15px] py-0 border-[none] hover:bg-[rgb(255,230,230)] hover:duration-[0.3s]">
  <svg viewBox="0 0 384 512" className=" w-3">
    <path
      className="fill-[rgb(255,81,0)]"
      d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
    />
  </svg>
</button>
</div>
`}
      >
        <div className="flex flex-col lg:flex-row  justify-evenly items-center">
          {/* Input1 */}
          <div>
            <label htmlFor="username" className="block text-gray-200 ">
              username
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="username"
                name="username"
                className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="mt-6   h-10 flex items-center justify-center bg-white overflow-hidden cursor-pointer shadow-[2px_2px_10px_rgba(0,0,0,0.075)] pl-[15px] rounded-[10px]">
            <input
              type="text"
              name="text"
              className="input w-[170px] h-full text-[0.9em] caret-[rgb(255,81,0)] border-[none] outline-none"
              id="input"
              placeholder="Search"
            />
            <label htmlFor="input" className=" cursor-text px-3 py-0">
              <svg viewBox="0 0 512 512" className="searchIcon w-[13px]">
                <path
                  className="fill-[rgb(114,114,114)]"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </label>
            <div className="border h-2/5 w-[1.3px] bg-[rgb(223,223,223)]" />
            <button className="micButton bg-transparent h-10 cursor-pointer duration-[0.3s] pl-3 pr-[15px] py-0 border-[none] hover:bg-[rgb(255,230,230)] hover:duration-[0.3s]">
              <svg viewBox="0 0 384 512" className=" w-3">
                <path
                  className="fill-[rgb(255,81,0)]"
                  d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
                />
              </svg>
            </button>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Input1;
