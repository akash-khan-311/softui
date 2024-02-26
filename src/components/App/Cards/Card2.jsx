import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card2 = () => {
  return (
    <>
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
                This is Card Of Soft UI . Copy and paste if you need
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
    </>
  );
};

export default Card2;
