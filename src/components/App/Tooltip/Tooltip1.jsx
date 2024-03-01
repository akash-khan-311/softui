import CodeBox from "../../../Shared/CodeBox/CodeBox";

export default function Tooltip1() {
  return (
    <CodeBox
      stringCode={`<div className="my-7">
  <div className="w-40">
    <div className="relative">
      <div className="absolute left-1/2 top-3 w-max max-w-xs bg-gray-700 text-white rounded-md px-3 py-2 opacity-0 transition-all" data-tip="improved workflow"></div>
      <button type="button" className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">Click me</button>
    </div>
  </div>
</div>`}
    >
      <div className="my-7">
  <div className="w-40">
    <div className="relative">
      <div
        className="absolute left-1/2 top-3 w-max max-w-xs bg-gray-700 text-white rounded-md px-3 py-2 opacity-0 transition-all"
        data-tip="improved workflow"
      >
      </div>
      <button type="button" className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">
        Click me
      </button>
    </div>
  </div>
</div>

    </CodeBox>
  );
}
