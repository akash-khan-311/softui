import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge = () => {
  return (
    <div>
      <CodeBox
        text={"Simple Badges"}
        stringCode={`<span className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Information</span>
<span className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Error</span>
<span className="bg-green-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Success</span>
<span className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Warning</span>`}
      >
        <div className="flex justify-center gap-5 flex-wrap items-center space-x-3">
          <span className="bg-gray-500 px-2 py-0.5  text-sm rounded-sm text-white">
            Disabled
          </span>
          <span className="bg-blue-500 px-2 py-0.5  text-sm rounded-sm text-white">
            Info
          </span>
          <span className="bg-green-500 px-2 py-0.5  text-sm rounded-sm text-green-900">
            Success
          </span>
          <span className="bg-yellow-500 px-2 py-0.5  text-sm rounded-sm text-yellow-900">
            Warning
          </span>
          <span className="bg-red-500 px-2 py-0.5  text-sm rounded-sm text-white">
            Error
          </span>
          <span className="bg-indigo-500 px-2 py-0.5  text-sm rounded-sm text-white">
            New
          </span>
        </div>
      </CodeBox>
    </div>
  );
};
export default Badge;
