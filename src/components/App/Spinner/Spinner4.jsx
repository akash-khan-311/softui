import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner4 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`
    <div className="w-10 h-10  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]"><div className="w-8 h-8  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-5 h-5  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>

    <div className="w-16 h-16  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]"><div className="w-12 h-12  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-8 h-8  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>

    <div className="w-20 h-20  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
      `}
      >
        <div className="flex flex-wrap gap-5 justify-evenly items-center">
          <div className="w-10 h-10  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]">
            <div className="w-8 h-8  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
              <div className="w-5 h-5  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
            </div>
          </div>
          <div className="w-16 h-16  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]">
            <div className="w-12 h-12  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
              <div className="w-8 h-8  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
            </div>
          </div>
          <div className="w-20 h-20  border-l-2 border-yellow-500 rounded-full flex justify-center items-center animate-[spin_1.6s_linear_infinite]">
            <div className="w-16 h-16  border-b-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
              <div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner4;
