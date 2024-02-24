import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner1 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
  <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
</div>`}
      >
        <div className="flex justify-center py-12">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.1s]" />
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner1;
