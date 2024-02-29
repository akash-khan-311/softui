import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button13 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<button className="cursor-pointer relative text-lg text-[rgb(193,163,98)] bg-transparent font-semibold transition-all duration-[0.3s] ease-[cubic-bezier(0.23,1,0.320,1)] overflow-hidden px-6 py-2.5 rounded-[34px] border-2 border-solid border-[rgb(193,163,98)] before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:z-[-1] before:bg-[rgb(193,163,98)] before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.23,1,0.320,1)] before:m-auto before:rounded-[inherit] before:inset-0 before:scale-0 hover:before:scale-[3] hover:scale-[1.1] active:scale-[1] hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]">Subscribe</button>
<button className="group relative cursor-pointer align-middle no-underline text-[inherit] p-0 border-0 outline-none bg-transparent w-48 h-auto flex items-center"><span className="group-hover:w-full group-hover:translate-x-1 translate-y-0 group-hover:translate-y-0 group-hover:bg-black transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] relative block w-12 h-12 m-0 rounded-[1.625rem] bg-[#282936]" aria-hidden="true"><span className="icon arrow  bg-transparent group-hover:translate-x-4 translate-y-0 group-hover:translate-y-0 group-hover:bg-white transition-all bg-none absolute m-auto inset-y-0 duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] w-[1.125rem] h-0.5 left-2.5 before:absolute before:content-[''] before:top-[-0.29rem] before:w-2.5 before:h-2.5 before:rotate-45 before:border-r-2 before:border-r-white before:border-t-2 before:border-t-white before:border-solid before:right-px"></span></span><span className="button-text group-hover:text-white transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] absolute text-[#282936] font-bold leading-[1.6] text-center uppercase ml-[1.85rem] mr-0 my-0 px-0 py-3 inset-0">Learn More</span></button>        `}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <button className="cursor-pointer relative text-lg text-[rgb(193,163,98)] bg-transparent font-semibold transition-all duration-[0.3s] ease-[cubic-bezier(0.23,1,0.320,1)] overflow-hidden px-6 py-2.5 rounded-[34px] border-2 border-solid border-[rgb(193,163,98)] before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:z-[-1] before:bg-[rgb(193,163,98)] before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.23,1,0.320,1)] before:m-auto before:rounded-[inherit] before:inset-0 before:scale-0 hover:before:scale-[3] hover:scale-[1.1] active:scale-[1] hover:text-[#212121] hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)]">
            Hover Me
          </button>
          {/*  */}
          <button className="group relative cursor-pointer align-middle no-underline text-[inherit] p-0 border-0 outline-none bg-transparent w-48 h-auto flex items-center">
            <span
              className="group-hover:w-full group-hover:translate-x-1 translate-y-0 group-hover:translate-y-0 group-hover:bg-black transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] relative block w-12 h-12 m-0 rounded-[1.625rem] bg-[#282936]"
              aria-hidden="true"
            >
              <span className="icon arrow  bg-transparent group-hover:translate-x-4 translate-y-0 group-hover:translate-y-0 group-hover:bg-white transition-all bg-none absolute m-auto inset-y-0 duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] w-[1.125rem] h-0.5 left-2.5 before:absolute before:content-[''] before:top-[-0.29rem] before:w-2.5 before:h-2.5 before:rotate-45 before:border-r-2 before:border-r-white before:border-t-2 before:border-t-white before:border-solid before:right-px"></span>
            </span>
            <span className="button-text group-hover:text-white transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] absolute text-[#282936] font-bold leading-[1.6] text-center uppercase ml-[1.85rem] mr-0 my-0 px-0 py-3 inset-0">
              Learn More
            </span>
          </button>
        </div>
      </CodeBox>
    </>
  );
};
export default Button13;
