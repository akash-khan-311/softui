import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge4 = () => {
    return(
        <>
             <CodeBox stringCode={`<span className="py-1 px-2.5 border-none rounded bg-gray-200 text-xl text-gray-800 font-medium">Disabled</span>
  <span className="py-1 px-2.5 border-none rounded bg-blue-100 text-xl text-blue-800 font-medium">Info</span>
  <span className="py-1 px-2.5 border-none rounded bg-green-100 text-xl text-green-800 font-medium">Success</span>
  <span className="py-1 px-2.5 border-none rounded bg-yellow-100 text-xl text-yellow-800 font-medium">Warning</span>
  <span className="py-1 px-2.5 border-none rounded bg-red-100 text-xl text-red-800 font-medium">Error</span>
  <span className="py-1 px-2.5 border-none rounded bg-indigo-100 text-xl text-indigo-800 font-medium">New</span>`}>
            <div className="flex justify-center gap-5 flex-wrap items-center space-x-3">
  <span className="py-1 px-2.5 border-none rounded bg-gray-200 text-xl text-gray-800 font-medium">Disabled</span>
  <span className="py-1 px-2.5 border-none rounded bg-blue-100 text-xl text-blue-800 font-medium">Info</span>
  <span className="py-1 px-2.5 border-none rounded bg-green-100 text-xl text-green-800 font-medium">Success</span>
  <span className="py-1 px-2.5 border-none rounded bg-yellow-100 text-xl text-yellow-800 font-medium">Warning</span>
  <span className="py-1 px-2.5 border-none rounded bg-red-100 text-xl text-red-800 font-medium">Error</span>
  <span className="py-1 px-2.5 border-none rounded bg-indigo-100 text-xl text-indigo-800 font-medium">New</span>
</div>

             </CodeBox>
        </>
    )
}
export default Badge4;