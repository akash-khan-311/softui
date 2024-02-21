
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input2 = () => {
  return (
    <>
      <CodeBox
        text={"Placeholder"}
        stringCode={`<input placeholder="Enter text here" className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" />`}
      >
        <input
          placeholder="Enter text here"
          className="p-2 border-2 border-gray-300 rounded-md text-base text-gray-700 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          type="text"
        />
      </CodeBox>
    </>
  );
};

export default Input2;
