 
import CodeBox from '../../../Shared/CodeBox/CodeBox'
import { IoIosCloseCircle } from "react-icons/io";

const Badge6 = () => {
  return (
    <CodeBox text="Badge with icon">
      <div className="flex justify-center gap-5 flex-wrap items-center space-x-3">
        <span className="bg-gray-400 text-gray-400 px-2  py-.5 rounded-full bg-opacity-20 border-gray-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Disabled <IoIosCloseCircle />
        </span>
        <span className="bg-blue-400 text-blue-400 px-2  py-.5 rounded-full bg-opacity-20 border-blue-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Info <IoIosCloseCircle />
        </span>
        <span className="bg-green-400 text-green-400 px-2  py-.5 rounded-full bg-opacity-20 border-green-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Success <IoIosCloseCircle />
        </span>
        <span className="bg-yellow-400 text-yellow-400 px-2  py-.5 rounded-full bg-opacity-20 border-yellow-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Warning <IoIosCloseCircle />
        </span>
        <span className="bg-red-400 text-red-400 px-2  py-.5 rounded-full bg-opacity-20 border-red-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Error <IoIosCloseCircle />
        </span>
        <span className="bg-indigo-400 text-indigo-400 px-2  py-.5 rounded-full bg-opacity-20 border-indigo-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          New <IoIosCloseCircle />
        </span>
      </div>
    </CodeBox>
  );
}

export default Badge6