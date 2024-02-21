import CodeBox from "../../Shared/CodeBox/CodeBox";

const Button = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-start">
      <CodeBox
        stringCode={` <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none">Default</button>
 <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Green</button> 
 <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>`}
      >
        <div className="flex flex-wrap gap-4 justify-evenly items-center">
          {/* 1,2,3 */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
          >
            Default
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Green
          </button>
          <div>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Red
            </button>
          </div>
        </div>
      </CodeBox>
      <CodeBox
        stringCode={`<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"><svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path></svg>Loading...</button>
<button className="text-white font-medium text-base inline-block outline-none  cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 py-3">Button</button>>
<button className="border-2 border-blue-500 bg-blue-500 rounded-full px-4 py-3 transition-colors duration-200 ease-in-out text-white text-lg font-semibold flex items-center justify-center hover:bg-blue-600">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-2">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
  </svg> <span>Create</span>
</button>`}
      >
        <div className="flex flex-wrap gap-4 justify-evenly items-center">
          {/* 1,2,3 */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
          <button className="text-white font-medium text-base inline-block outline-none py-2 cursor-pointer  transition-shadow bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 hover:shadow-md active:shadow-inner active:translate-y-0.1 transform-gpu border-none rounded-md px-8 ">
            Button
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-800 bg-blue-500 rounded-full px-4 text-base py-1 transition-colors duration-200 ease-in-out text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="mr-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
            </svg>
            <span>Create Button</span>
          </button>
        </div>
      </CodeBox>
      <CodeBox stringCode={`<button className="relative flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 border-2 border-white rounded-full shadow-md text-white font-bold text-base transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:border-opacity-0"><span>Apply Now</span><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"/></svg></button>
<button className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Button</button>
<button className="hover:brightness-110  hover:animate-pulse font-bold py-2 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Hover on me</button>`}>
        <div className="flex flex-wrap gap-4 justify-evenly items-center ">
        <button className="relative flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 border-2 border-white rounded-full shadow-md text-white font-bold text-base transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:border-opacity-0"><span>Apply Now</span><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"/></svg></button>
<button className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85">Button</button>
<button className="hover:brightness-110  hover:animate-pulse font-bold py-2 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Hover on me</button>

        </div>
      </CodeBox>
    </div>
  );
};

export default Button;
