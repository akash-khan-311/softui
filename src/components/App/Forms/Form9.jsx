/* eslint-disable react/no-unescaped-entities */
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form9 = () => {
    return(
        <div>
             <CodeBox  stringCode={`<div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <div className="relative bg-white max-w-lg rounded-lg shadow">
      <div className="p-5">
        <h3 className="text-2xl mb-0.5 font-medium" />
        <p className="mb-4 text-sm font-normal text-gray-800" />
        <div className="text-center">
          <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
            Login to your account
          </p>
          <p className="mt-2 text-sm leading-4 text-slate-600">
            You must be logged in to perform this action.
          </p>
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-[18px] w-[18px] " />
            Continue with GitHub
          </button>
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] " />Continue with
            Google
          </button>
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google" className="h-[18px] w-[18px] " />Continue with
            LinkedIn
          </button>
        </div>
        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
          <div className="h-px w-full bg-slate-200" />
          OR
          <div className="h-px w-full bg-slate-200" />
        </div>
        <form className="w-full">
         
          <input name="email" type="email" autoComplete="email" required className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Email Address"  />
         
          <input name="password" type="password" autoComplete="current-password" required className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Password"  />
          <p className="mb-3 mt-2 text-sm text-gray-500">
            <a href="#!"  className="text-blue-800 hover:text-blue-600">Reset your password?</a>
          </p>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
            Continue
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?
          <a href="#!" className="font-medium text-[#4285f4]">Sign up</a>
        </div>
      </div>
    </div>
  </div>`}>
             <div className="flex justify-center" >
  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <div className="relative bg-white max-w-lg rounded-lg shadow">
      <div className="p-5">
        <h3 className="text-2xl mb-0.5 font-medium" />
        <p className="mb-4 text-sm font-normal text-gray-800" />
        <div className="text-center">
          <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
            Login to your account
          </p>
          <p className="mt-2 text-sm leading-4 text-slate-600">
            You must be logged in to perform this action.
          </p>
        </div>
        <div className="mt-7 flex flex-col gap-2">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-[18px] w-[18px] " />
            Continue with GitHub
          </button>
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] " />Continue with
            Google
          </button>
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google" className="h-[18px] w-[18px] " />Continue with
            LinkedIn
          </button>
        </div>
        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
          <div className="h-px w-full bg-slate-200" />
          OR
          <div className="h-px w-full bg-slate-200" />
        </div>
        <form className="w-full">
         
          <input name="email" type="email" autoComplete="email" required className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Email Address"  />
         
          <input name="password" type="password" autoComplete="current-password" required className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Password"  />
          <p className="mb-3 mt-2 text-sm text-gray-500">
            <a href="#!"  className="text-blue-800 hover:text-blue-600">Reset your password?</a>
          </p>
          <button type="submit" className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
            Continue
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?
          <a href="#!" className="font-medium text-[#4285f4]">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</div>

             </CodeBox>
        </div>
    )
}
export default Form9;   