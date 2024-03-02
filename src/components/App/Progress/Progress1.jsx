import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Progress1 = () => {
  return (
    <>
      <CodeBox
      text={'Progress Bar'}
        stringCode={`<div className="max-w-lg block p-4 mx-auto"><div className="w-full h-4 bg-gray-400 rounded-full"><div className="w-3/4 h-full text-center text-xs text-white bg-blue-500 rounded-full">75%</div></div></div>`}
      >
        <div className="max-w-lg block p-4 mx-auto">
          <div className="w-full h-4 bg-gray-400 rounded-full">
            <div className="w-3/4 h-full text-center text-xs text-white bg-blue-500 rounded-full">
              75%
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Progress1;
