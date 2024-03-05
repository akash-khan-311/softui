 
import CodeBox from '../../../Shared/CodeBox/CodeBox'

const Badge7 = () => {
  return (
    <CodeBox
      text="Badges by size"
      stringCode={`
        <span className="bg-red-400 text-red-400 px-1  py-.25 rounded-full bg-opacity-20 border-red-400 border-.5 text-xs">
        Small
        </span>
        <span className="bg-orange-400 text-orange-400 px-2  py-.5 rounded-full bg-opacity-20 border-orange-400 border-.5 text-sm">
        Medium
        </span>
        <span className="bg-yellow-400 text-yellow-400 px-4  py-1 rounded-full bg-opacity-20 border-yellow-400 border-.5 text-md">
        Large
        </span>
        <span className="bg-green-400 text-green-400 px-6  py-1.5 rounded-full bg-opacity-20 border-green-400 border-.5 text-lg">
        Extra Large
        </span>
    `}
    >
      <div className="flex justify-center gap-5 flex-wrap items-center space-x-3">
        <span className="bg-red-400 text-red-400 px-2  py-.25 rounded-full bg-opacity-20 border-red-400 border-.5 text-xs">
          Small
        </span>
        <span className="bg-orange-400 text-orange-400 px-2  py-.5 rounded-full bg-opacity-20 border-orange-400 border-.5 text-sm">
          Medium
        </span>
        <span className="bg-yellow-400 text-yellow-400 px-4  py-1 rounded-full bg-opacity-20 border-yellow-400 border-.5 text-md">
          Large
        </span>
        <span className="bg-green-400 text-green-400 px-6  py-1.5 rounded-full bg-opacity-20 border-green-400 border-.5 text-lg">
          Extra Large
        </span>
      </div>
    </CodeBox>
  );
}

export default Badge7