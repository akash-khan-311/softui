import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input7 = () => {
    return(
        <div>
             <CodeBox stringCode={`<div className="max-w-sm mx-auto">
  <label htmlFor="photobutton" className="text-xs font-medium text-gray-500">Your Photo</label>
  <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
    <input id="photobutton" type="file" className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
    <button type="submit" className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Save</button>
  </div>
</div>`}>
             <div className="max-w-sm mx-auto">
  <label htmlFor="photobutton" className="text-xs font-medium text-gray-500">Your Photo</label>
  <div className="relative z-0 mt-0.5 flex w-full -space-x-px">
    <input id="photobutton" type="file" className="block w-full cursor-pointer appearance-none rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
    <button type="submit" className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Save</button>
  </div>
</div>

             </CodeBox>
        </div>
    )
}
export default Input7;