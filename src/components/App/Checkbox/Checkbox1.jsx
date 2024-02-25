import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox1 = () => {
  return (
    <>
      <CodeBox stringCode={`<input type="checkbox" className=" h-4 w-4 accent-green-600 focus:accent-yellow-600" />
<input type="checkbox" className=" h-5 w-5 accent-green-600 focus:accent-yellow-600" />
<input type="checkbox" className=" h-6 w-6 accent-green-600 focus:accent-yellow-600" />`}>
       <div className="flex flex-wrap gap-5 justify-evenly items-center">
        
       <input type="checkbox" className=" h-4 w-4 accent-green-600 focus:accent-yellow-600" />
       <input type="checkbox" className=" h-5 w-5 accent-green-600 focus:accent-yellow-600" />
       <input type="checkbox" className=" h-6 w-6 accent-green-600 focus:accent-yellow-600" />

       
       
       </div>

      </CodeBox>
    </>
  );
};

export default Checkbox1;
