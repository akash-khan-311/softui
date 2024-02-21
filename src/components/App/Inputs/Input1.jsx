import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Input1 = () => {
    return (
        <>
              <CodeBox
        text={"Simple Text Input"}
        stringCode={`<div>
    <label htmlFor="username" className="block text-gray-200">username</label>
    <div className="mt-2">
        <input type="text" name="username" id="username" className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"/>
    </div>
</div>`}
      >
        <div>
          <label htmlFor="username" className="block text-gray-200 ">
            username
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="username"
              name="username"
              className="block w-64 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>
      </CodeBox>
        </>
    );
};

export default Input1;