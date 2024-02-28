import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Input3 = () => {
  return (
    <>
      <CodeBox
        text={"Input With Button"}
        stringCode={`<div className="flex items-center">
  <input placeholder="Enter your email" className="max-w-[250px] px-3 py-[11px] text-base text-black border border-r-0 rounded-l-md focus:outline-none" name="email" type="email" />
  <button className="bg-blue-500 text-white py-3 px-6 rounded-r-md cursor-pointer hover:bg-blue-600 focus:outline-none">Subscribe</button>
</div>`}
      >
        <div className="flex justify-center">
          <div className="flex items-center justify-center flex-wrap">
            <input
              placeholder="Enter your email"
              className="max-w-[250px] mb-2 sm:mb-0 rounded-r-md sm:rounded-r-none px-3 py-[11px] text-base text-black border border-r-0 rounded-l-md focus:outline-none"
              name="email"
              type="email"
            />
            <button className="bg-blue-500 text-white py-3 px-6 rounded-r-md rounded-l-md sm:rounded-l-none cursor-pointer hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Input3;
