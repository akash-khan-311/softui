import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner9 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent" />
<div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent" />
<div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent" />
<div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>`}
      >
        <div className="flex flex-wrap justify-evenly space-x-4">
          <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent" />
          <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent" />
          <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent" />
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner9;
