import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Skeleton1 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<div className="p-4 bg-white rounded shadow w-[400px]">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-gray-300 h-12 w-12" />
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>
    </div>
  </div>
</div>`}
      >
        <div className="flex justify-center">
        <div className="p-4 bg-white rounded shadow w-[400px]">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-300 h-12 w-12" />
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded" />
                <div className="h-4 bg-gray-300 rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </CodeBox>
    </>
  );
};
export default Skeleton1;
