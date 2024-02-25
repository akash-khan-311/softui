import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner5 = () => {
  return (
    <div>
      <CodeBox stringCode={`
<div className="relative w-6 h-6 flex items-center justify-center"><div className="w-3 h-3 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div><div className="w-3 h-3 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div></div>
<div className="relative w-8 h-8 flex items-center justify-center"><div className="w-4 h-4 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div><div className="w-4 h-4 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div></div>
<div className="relative w-10 h-10 flex items-center justify-center"><div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div><div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div></div>
      `}>
        <div className="flex flex-wrap gap-5 justify-evenly items-center">
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="w-3 h-3 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div>
            <div className="w-3 h-3 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div>
          </div>

          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div>
            <div className="w-4 h-4 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div>
          </div>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-yellow-600"></div>
            <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-yellow-600 absolute"></div>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner5;
