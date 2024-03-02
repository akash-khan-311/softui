import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Skeleton5 = () => {
    return(
        <>
             <CodeBox stringCode={`<div className="flex flex-col bg-gray-300 w-72 h-80 animate-pulse rounded-xl p-4 gap-4">
  <div className="bg-gray-400 w-full h-32 animate-pulse rounded-md" />
  <div className="flex flex-col gap-2">
    <div className="bg-gray-400 w-full h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-4/5 h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-full h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-2/4 h-4 animate-pulse rounded-md" />
  </div>
</div>`}>
             <div className="flex justify-center">
             <div className="flex flex-col bg-gray-300 w-72 h-80 animate-pulse rounded-xl p-4 gap-4">
  <div className="bg-gray-400 w-full h-32 animate-pulse rounded-md" />
  <div className="flex flex-col gap-2">
    <div className="bg-gray-400 w-full h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-4/5 h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-full h-4 animate-pulse rounded-md" />
    <div className="bg-gray-400 w-2/4 h-4 animate-pulse rounded-md" />
  </div>
</div>
             </div>

             </CodeBox>
        </>
    )
}
export default Skeleton5;