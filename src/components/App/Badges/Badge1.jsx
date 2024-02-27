import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge = () => {
  return (
    <div>
      <CodeBox
        text={"sample"}
        stringCode={`<span className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Information</span>
<span className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Error</span>
<span className="bg-green-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Success</span>
<span className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">Warning</span>`}
      >
        <div className="flex justify-evenly flex-wrap gap-3">
          <span className="bg-blue-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">
            Information
          </span>
          <span className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">
            Error
          </span>
          <span className="bg-green-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">
            Success
          </span>
          <span className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-sm text-white">
            Warning
          </span>
        </div>
      </CodeBox>
    </div>
  );
};
export default Badge;
