import CodeBox from "../../../Shared/CodeBox/CodeBox";

export default function Tooltip1() {
  return (
    <CodeBox
      stringCode={`<div className="my-7">
      <div className="w-40">
        <div
        className="relative before:absolute before:content-[attr(data-tip)] before:px-3 before:py-2 before:left-1/2 before:top-3 before:w-max before:max-w-xs before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"

          data-tip="improved workflow"
        >
        <button type="button" class="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">Click me</button>

        </div>
      </div>
      </div>`}
    >
      <div className="my-7">
        <div className="w-40">
          <div
            className="relative
                before:absolute
                 before:content-[attr(data-tip)] 
                 before:px-3 before:py-2 
                  before:left-1/2 before:top-3
                   before:w-max 
                  before:max-w-xs
                  before:bg-gray-700 before:text-white before:rounded-md before:opacity-0
                  before:transition-all    

                  after:absolute
                  after:left-1/2 after:top-3
                  after:h-0 after:w-0
                  after:-translate-x-1/2 after:border-8
                  after:border-t-gray-700
                  after:border-l-transparent
                  after:border-b-transparent
                  after:border-r-transparent
                  after:opacity-0
                  after:transition-all

                  hover:before:opacity-100 hover:after:opacity-100
    "
            data-tip="improved workflow"
          >
            <button
              type="button"
              className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400"
            >
              Click me
            </button>
          </div>
        </div>
      </div>
    </CodeBox>
  );
}
