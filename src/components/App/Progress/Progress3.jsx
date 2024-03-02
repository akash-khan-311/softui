import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Progress3 = () => {
    return(
        <>
             <CodeBox stringCode={`<div className="relative p-4  max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
        In Progress
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-blue-600">
        70%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{width: '70%'}} className="rounded-full bg-blue-500" />
  </div>
</div>`}>
             <div className="relative p-4  max-w-sm mx-auto">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
        In Progress
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-blue-600">
        70%
      </span>
    </div>
  </div>
  <div className="flex rounded-full h-2 bg-gray-200">
    <div style={{width: '70%'}} className="rounded-full bg-blue-500" />
  </div>
</div>

             </CodeBox>
        </>
    )
}
export default Progress3;