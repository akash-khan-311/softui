import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button14 = () => {
  return (
    <>
      <CodeBox
        text={"Hello World Button"}
        stringCode={`<button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">Hello World</button>
<button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">Hello World</button>
<button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">Hello World</button>`}
      >
        <div className="flex justify-evenly items-center">
            
          <button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">
            Hello World
          </button>
          <button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">
            Hello World
          </button>
          <button className="py-1 px-5 bg-red-200 transition-all duration-300 hover:bg-red-400">
            Hello World
          </button>
        </div>
      </CodeBox>
    </>
  );
};
export default Button14;
