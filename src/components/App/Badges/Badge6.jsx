 
import CodeBox from '../../../Shared/CodeBox/CodeBox' 

const Badge6 = () => {
  return (

    <CodeBox text="Badge with icon">

    <CodeBox
      text="Badge with icon"
      stringCode={`
      <span className="bg-gray-400 text-gray-400 px-2  py-.5 rounded-full bg-opacity-20 border-gray-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Disabled{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-blue-400 text-blue-400 px-2  py-.5 rounded-full bg-opacity-20 border-blue-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Info{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-green-400 text-green-400 px-2  py-.5 rounded-full bg-opacity-20 border-green-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Success{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-yellow-400 text-yellow-400 px-2  py-.5 rounded-full bg-opacity-20 border-yellow-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Warning{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-red-400 text-red-400 px-2  py-.5 rounded-full bg-opacity-20 border-red-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Error{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-indigo-400 text-indigo-400 px-2  py-.5 rounded-full bg-opacity-20 border-indigo-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          New{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
    `}
    >
      <div className="flex justify-center gap-5 flex-wrap items-center space-x-3">
        <span className="bg-gray-400 text-gray-400 px-2  py-.5 rounded-full bg-opacity-20 border-gray-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Disabled{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-blue-400 text-blue-400 px-2  py-.5 rounded-full bg-opacity-20 border-blue-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Info{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-green-400 text-green-400 px-2  py-.5 rounded-full bg-opacity-20 border-green-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Success{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-yellow-400 text-yellow-400 px-2  py-.5 rounded-full bg-opacity-20 border-yellow-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Warning{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-red-400 text-red-400 px-2  py-.5 rounded-full bg-opacity-20 border-red-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          Error{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
        <span className="bg-indigo-400 text-indigo-400 px-2  py-.5 rounded-full bg-opacity-20 border-indigo-400 border-.5 text-sm flex justify-center gap-1 items-center pr-1">
          New{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
          </svg>
        </span>
      </div>
    </CodeBox>
  );
}

export default Badge6