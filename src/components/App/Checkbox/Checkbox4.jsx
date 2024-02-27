import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox4 = () => {
  return (
    <div>
      <CodeBox stringCode={`<input type="checkbox" id="react-option" value="" className="hidden peer" required=""/><label htmlFor="react-option" className=" items-center justify-center w-10 h-10 [box-shadow:1px_1px_0px_2px_#1e1e1e] duration-300 hover:[box-shadow:1px_1px_0px_1px_#000] hover:translate-y-0.5 hover:translate-x-0.5 bg-neutral-700 border-2 border-gray-800 rounded-full cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_2px_#28AB6B] peer-checked:border-none peer-checked:hover:[box-shadow:1px_1px_0px_1px_#28AB6B] peer-checked:bg-neutral-50 peer-checked:text-gray-800"><span className="text-lg font-semibold">4</span></label>`}>
      <div className="flex justify-center items-center">
      <input
          type="checkbox"
          id="react-option"
          value=""
          className="hidden peer"
          required=""
        />
        <label
          htmlFor="react-option"
          className="flex items-center justify-center w-10 h-10 [box-shadow:1px_1px_0px_2px_#1e1e1e] duration-300 hover:[box-shadow:1px_1px_0px_1px_#000] hover:translate-y-0.5 hover:translate-x-0.5 bg-neutral-700 border-2 border-gray-800 rounded-full cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_2px_#28AB6B] peer-checked:border-none peer-checked:hover:[box-shadow:1px_1px_0px_1px_#28AB6B] peer-checked:bg-neutral-50 peer-checked:text-gray-800"
        >
          <span className="text-lg font-semibold">4</span>
        </label>
      </div>
      </CodeBox>
    </div>
  );
};
export default Checkbox4;
