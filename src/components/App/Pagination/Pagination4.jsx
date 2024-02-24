import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Pagination4 = () => {
    return (
        <div>
            <CodeBox stringCode={`<div className="container mx-auto px-4">
  <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
    {/* Previous Page Button */}
    <a className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-600 bg-orange-800 text-white  hover:border-gray-200" href="#!" title="Previous Page">
      <span className="sr-only">Previous Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </a>
    {/* Page Buttons (1 to 5) */}
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 1">1</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 2">2</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border  border-white  text-white pointer-events-none" href="#!" aria-current="page" title="Page 3">3</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 4">4</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 5">5</a>
    {/* Next Page Button */}
    <a className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-600 bg-orange-800 text-white  hover:border-gray-200" href="#!" title="Next Page">
      <span className="sr-only">Next Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </a>
  </nav>
</div>`}>
           <div className="container mx-auto px-4">
  <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
    {/* Previous Page Button */}
    <a className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-600 bg-orange-800 text-white  hover:border-gray-200" href="#!" title="Previous Page">
      <span className="sr-only">Previous Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </a>
    {/* Page Buttons (1 to 5) */}
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 1">1</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 2">2</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border  border-white  text-white pointer-events-none" href="#!" aria-current="page" title="Page 3">3</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 4">4</a>
    <a className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-600    text-white  hover:border-gray-200" href="#!" title="Page 5">5</a>
    {/* Next Page Button */}
    <a className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-600 bg-orange-800 text-white  hover:border-gray-200" href="#!" title="Next Page">
      <span className="sr-only">Next Page</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </a>
  </nav>
</div>

            </CodeBox>
        </div>
    );
};

export default Pagination4;