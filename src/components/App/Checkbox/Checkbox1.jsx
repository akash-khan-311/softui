import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox1 = () => {
  return (
    <>
      <CodeBox stringCode={`
      <input type="checkbox" className="cursor-pointer h-4 w-4 rounded-md"/>
      <input type="checkbox" className="cursor-pointer h-5 w-5 rounded-md"/>
      <input type="checkbox" className="cursor-pointer h-6 w-6 rounded-md"/>
      <input type="checkbox" className="cursor-pointer h-8 w-8 rounded-md"/>
      `}>
       <div className="flex flex-wrap gap-5 justify-evenly items-center">
       <input
        type="checkbox"
        className="cursor-pointer h-4 w-4 rounded-md"
      />
       <input
        type="checkbox"
        className="cursor-pointer h-5 w-5 rounded-md"
      />
       <input
        type="checkbox"
        className="cursor-pointer h-6 w-6 rounded-md"
      />
       <input
        type="checkbox"
        className="cursor-pointer h-8 w-8 rounded-md"
      />
       </div>

      </CodeBox>
    </>
  );
};

export default Checkbox1;
