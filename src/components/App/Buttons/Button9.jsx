import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button9 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<button className="group flex items-center cursor-pointer font-medium text-[17px] bg-[#ad5389] bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] text-[white] tracking-wider pl-[0.9em] pr-[1.3em] py-[0.8em] rounded-2xl border-[none]">
  <svg height={24} width={24} className="rotate-[30deg] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)] mr-[3px] group-hover:translate-x-[5px]  group-hover:rotate-90" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" />
  </svg>
  <span className="transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[7px]">Launch</span>
</button> 
<button className="text-[purple] uppercase no-underline text-[17px] font-[bold] relative transition-all duration-500 ease-in-out overflow-hidden px-5 py-2.5 border-2 border-solid border-[purple] hover:text-[white] before:content-[''] before:absolute before:h-full before:w-[0%] before:skew-x-[45deg] before:bg-[purple] before:z-[-1] before:transition-all before:duration-500 before:-left-10 before:top-0 hover:before:w-[160%]">Button</button>`}
      >
        <div className="flex items-center justify-evenly">
          <button className="group flex items-center cursor-pointer font-medium text-[17px] bg-[#ad5389] bg-[linear-gradient(to_right,#0f0c29,#302b63,#24243e)] text-[white] tracking-wider pl-[0.9em] pr-[1.3em] py-[0.8em] rounded-2xl border-[none]">
            <svg
              height={24}
              width={24}
              className="rotate-[30deg] transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)] mr-[3px] group-hover:translate-x-[5px]  group-hover:rotate-90 "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              />
            </svg>
            <span className="transition-transform duration-[0.5s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[7px]">
              Launch
            </span>
          </button>
          <button className="text-[purple] uppercase no-underline text-[17px] font-[bold] relative transition-all duration-500 ease-in-out overflow-hidden px-5 py-2.5 border-2 border-solid border-[purple] hover:text-[white] before:content-[''] before:absolute before:h-full before:w-[0%] before:skew-x-[45deg] before:bg-[purple] before:z-[-1] before:transition-all before:duration-500 before:-left-10 before:top-0 hover:before:w-[160%]">
            Button
          </button>
        </div>
      </CodeBox>
    </div>
  );
};
export default Button9;
