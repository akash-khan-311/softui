import CodeBox from "../../../Shared/CodeBox/CodeBox";

const ErrorPage1 = () => {
    return(
        <>
             <CodeBox stringCode={`<div className="bg-white dark:bg-gray-800  border dark:border-gray-900 rounded-md flex items-center justify-center mx-4">
  <div className="flex flex-col items-center py-16">
    <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" />
    <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
    <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
    <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
    <button className="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
  </div>
</div>`}>
                
        <div className=" ">
  <div className="bg-white dark:bg-gray-800  border dark:border-gray-900 rounded-md flex items-center justify-center mx-4">
    <div className="flex flex-col items-center py-16">
      <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" />
      <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
      <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
      <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
      <button className="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
    </div>
  </div>
</div>

    
             </CodeBox>
        </>
    )
}
export default ErrorPage1;