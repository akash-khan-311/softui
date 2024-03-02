import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Skeleton4 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
  <div className="flex p-4 space-x-4 sm:px-8">
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300" />
    <div className="flex-1 py-2 space-y-4">
      <div className="w-full h-3 rounded bg-gray-300" />
      <div className="w-5/6 h-3 rounded bg-gray-300" />
    </div>
  </div>
  <div className="p-4 space-y-4 sm:px-8">
    <div className="w-full h-4 rounded bg-gray-300" />
    <div className="w-full h-4 rounded bg-gray-300" />
    <div className="w-3/4 h-4 rounded bg-gray-300" />
  </div>
</div>`}
      >
        <div className="flex justify-center">
          <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
            <div className="flex p-4 space-x-4 sm:px-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300" />
              <div className="flex-1 py-2 space-y-4">
                <div className="w-full h-3 rounded bg-gray-300" />
                <div className="w-5/6 h-3 rounded bg-gray-300" />
              </div>
            </div>
            <div className="p-4 space-y-4 sm:px-8">
              <div className="w-full h-4 rounded bg-gray-300" />
              <div className="w-full h-4 rounded bg-gray-300" />
              <div className="w-3/4 h-4 rounded bg-gray-300" />
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Skeleton4;
