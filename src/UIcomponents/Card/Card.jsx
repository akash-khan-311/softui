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
    </div>
  );
};

export default Card;
