import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button7 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<button className="relative py-2 px-8 text-black text-sm font-bold  overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-900 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">HOVER ME!</button>
<button className="px-8 py-1 shadow-2xl text-white text-base bg-blue-600 outline outline-offset-2 outline-1 outline-blue-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]"><a className="font-semibold" href="#!">Button</a></button>
<button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-1">
  <span className="relative z-10 text-green-500 group-hover:text-white  duration-500">Hover Me !</span>
  <span className="absolute w-full h-full bg-gradient-to-r from-green-700 to-green-200 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
  <span className="absolute w-full h-full bg-gradient-to-r from-green-700 to-green-200 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
</button>
`}
      >
        <div className="flex justify-evenly items-center">
          <button className="relative py-2 px-8 text-black text-sm font-bold  overflow-hidden bg-white rounded-lg transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-900 before:to-blue-400 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
            HOVER ME!
          </button>

          <button className="px-8 py-1 shadow-2xl text-white text-base bg-blue-600 outline outline-offset-2 outline-1 outline-blue-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]">
            <a className="font-semibold" href="#!">
              Button
            </a>
          </button>

          <button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-1">
            <span className="relative z-10 text-green-500 group-hover:text-white  duration-500">
              Hover Me !
            </span>
            <span className="absolute w-full h-full bg-gradient-to-r from-green-700 to-green-200 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
            <span className="absolute w-full h-full bg-gradient-to-r from-green-700 to-green-200 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
          </button>
        </div>
      </CodeBox>
    </div>
  );
};
export default Button7;
