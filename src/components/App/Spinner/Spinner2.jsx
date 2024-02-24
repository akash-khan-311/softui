import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner2 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="flex-col gap-4 w-full flex items-center justify-center">
  <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
</div>`}
      >
        <div className="flex justify-center items-center py-12">
          <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};

export default Spinner2;
