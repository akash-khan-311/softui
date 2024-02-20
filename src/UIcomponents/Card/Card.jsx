import CodeBox from "../../Shared/CodeBox/CodeBox";

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <CodeBox
        text={"Default Card"}
        stringCode={` <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">This is Card Of Aero UI . Copy and paste if you need</h5>
    <p className="font-normal text-gray-700 -400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque illum illo cupiditate necessitatibus fugiat consectetur labore sint ex consequuntur..</p>
 </a>`}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <a className="block cursor-pointer max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              This is Card Of Aero UI . Copy and paste if you need
            </h5>
            <p className="font-normal text-gray-700 -400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque illum illo cupiditate necessitatibus fugiat
              consectetur labore sint ex consequuntur..
            </p>
          </a>
        </div>
      </CodeBox>
      <CodeBox
        text={"Card With Button"}
        stringCode={`     <div className="max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700">
        <button>
          <h5 className="mb-2 text-2xl text-left font-bold tracking-tight  text-white">Noteworthy technology acquisitions 2021</h5>
        </button>
        <p className="mb-3 font-normal  text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 ">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>`}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <div className="max-w-sm p-6 rounded-lg shadow bg-gray-800 border-gray-700">
            <button>
              <h5 className="mb-2 text-2xl text-left font-bold tracking-tight  text-white">
                This is Card Of Aero UI . Copy and paste if you need
              </h5>
            </button>
            <p className="mb-3 font-normal  text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque illum illo cupiditate necessitatibus fugiat
              consectetur labore sint ex consequuntur..
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 ">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </CodeBox>
      <CodeBox
        text={"Card With Image"}
        stringCode={`   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg cursor-pointer" src="https://i.ibb.co/PcJZWSP/Thunderbolt-Cruiser.jpg" alt />
      <div className="p-5">
        <button>
          <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </button>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>`}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg cursor-pointer"
              src="https://i.ibb.co/PcJZWSP/Thunderbolt-Cruiser.jpg"
              alt
            />

            <div className="p-5">
              <button>
                <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </button>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </CodeBox>
      <CodeBox
        text={"Pricing Card"}
        stringCode={`    <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="flex flex-col">
          <span className="text-xl font-semibold ">Beginner</span>
          <span className="text-6xl font-semibold ">Free</span>
        </div>
        <p className="mt-3 mb-3 text-base">Etiam ac convallis enim, eget euismod dolor.</p>
        <ul className="mb-6 text-sm">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Aenean quis</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Morbi semper</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Tristique enim nec</span>
          </li>
        </ul>
        <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">Get Started</button>
    </div>



    <div className="bg-gray-900 p-6 rounded-lg shadow-md w-80">
        <div className="flex flex-col">
        <span className="text-xl font-semibold text-white">Beginner</span>
        <span className="text-6xl font-semibold text-white">Free</span>
        </div>
        <p className="mt-3 mb-3 text-base text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
        <ul className="mb-6 text-sm text-gray-400">
        <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Aenean quis</span>
        </li>
        <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Morbi semper</span>
        </li>
        <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2 text-purple-400">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Tristique enim nec</span>
        </li>
        </ul>
        <button type="button" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out">Get Started</button>
  </div>
  

      `}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <div className="bg-white p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col">
              <span className="text-xl font-semibold ">Beginner</span>
              <span className="text-6xl font-semibold ">Free</span>
            </div>
            <p className="mt-3 mb-3 text-base">
              Etiam ac convallis enim, eget euismod dolor.
            </p>
            <ul className="mb-6 text-sm">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Aenean quis</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Morbi semper</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tristique enim nec</span>
              </li>
            </ul>
            <button
              type="button"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md w-80">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-white">Beginner</span>
              <span className="text-6xl font-semibold text-white">Free</span>
            </div>
            <p className="mt-3 mb-3 text-base text-gray-400">
              Etiam ac convallis enim, eget euismod dolor.
            </p>
            <ul className="mb-6 text-sm text-gray-400">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Aenean quis</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Morbi semper</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 mr-2 text-purple-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tristique enim nec</span>
              </li>
            </ul>
            <button
              type="button"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              Get Started
            </button>
          </div>
        </div>
      </CodeBox>
      <CodeBox
        text={"Gradient Card"}
        stringCode={`<div className="max-w-[400px] bg-gradient-to-tr from-[#07102d] to-[#3a3c54] border border-[#545a6a] rounded-[20px] p-6"><span className="font-semibold text-[14px] text-blue-500 mb-2">Download Now!</span><h2 className="font-semibold text-white text-2xl mb-4">Download our mobile application.</h2><p className="text-[#9799a7] text-[13px]">Download Lorem mobile banking app for IOS & Android to manage your online money.</p><div className="flex justify-center mt-4 space-x-4"><button className="flex items-center justify-between rounded-[10px] py-2 px-4 bg-blue-500 hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300"><span className="h-[25px] w-[25px]"><svg width="25" height="25" viewBox="0 0 34 34" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3l14.9542 13.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z" fill="white"></path></svg></span><div className="text-white flex flex-col text-left"><span className="text-sm">Get it on</span><span className="text-sm font-bold">Google Play</span></div></button><button className="flex items-center justify-between rounded-[10px] py-2 px-4 bg-white hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300"><span className="h-[25px] w-[25px]"><svg fill="#000000" width="34" height="34" viewBox="-52.01 30 860.035 660.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path></svg></span><div className="text-black flex flex-col text-left"><span className="text-sm">Download from</span><span className="text-sm font-bold">App Store</span></div></button></div></div>
`}
      >
        <div className="max-w-[400px] bg-gradient-to-tr from-[#07102d] to-[#3a3c54] border border-[#545a6a] rounded-[20px] p-6"><span className="font-semibold text-[14px] text-blue-500 mb-2">Download Now!</span><h2 className="font-semibold text-white text-2xl mb-4">Download our mobile application.</h2><p className="text-[#9799a7] text-[13px]">Download Lorem mobile banking app for IOS & Android to manage your online money.</p><div className="flex justify-center mt-4 space-x-4"><button className="flex items-center justify-between rounded-[10px] py-2 px-4 bg-blue-500 hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300"><span className="h-[25px] w-[25px]"><svg width="25" height="25" viewBox="0 0 34 34" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3l14.9542 13.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z" fill="white"></path></svg></span><div className="text-white flex flex-col text-left"><span className="text-sm">Get it on</span><span className="text-sm font-bold">Google Play</span></div></button><button className="flex items-center justify-between rounded-[10px] py-2 px-4 bg-white hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300"><span className="h-[25px] w-[25px]"><svg fill="#000000" width="34" height="34" viewBox="-52.01 30 860.035 660.035" xmlns="http://www.w3.org/2000/svg"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path></svg></span><div className="text-black flex flex-col text-left"><span className="text-sm">Download from</span><span className="text-sm font-bold">App Store</span></div></button></div></div>
      </CodeBox>
    </div>
  );
};

export default Card;
