import CodeBox from "../../../Shared/CodeBox/CodeBox"

const Button19 = () => {
  return (
    <>
      <CodeBox stringCode={`<button smooth duration={500} className=' group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-fit cursor-pointer gap-3'>
          Portfolio
          <span className='group-hover:rotate-90 duration-300'>
            <FaArrowRight />
          </span>
        </button>`}>
        <button smooth duration={500} className=' group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-fit cursor-pointer gap-3'>
          Portfolio
          <span className='group-hover:rotate-90 duration-300'>
            <FaArrowRight />
          </span>
        </button>
      </CodeBox>
    </>
  )
}

export default Button19