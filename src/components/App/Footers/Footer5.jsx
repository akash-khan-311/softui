import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Footer5 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<footer className="text-center bg-blue-gray-800">
  {/* Sign-up form section */}
  <div className="px-6 pt-6">
    <form action="">
      <div className="flex flex-col md:flex-row items-center justify-center py-6">
        <div className="md:mr-4 mb-3 md:mb-0">
          <p className="text-gray-200">
            <strong className="capitalize">Sign up for our newsletter</strong>
          </p>
        </div>
        <div className="flex items-center">
          <input
            placeholder="Enter your email"
            className="px-2 py-[3px] bg-transparent text-base text-white border border-r-0 rounded-l-md focus:outline-none"
            name="email"
            type="email"
          />
          <button className="bg-blue-500 text-white py-1 px-3 rounded-r-md cursor-pointer hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
  {/* Copyright section */}
  <div className="w-full p-4 text-center text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    ©  2024 Copyright{" "}
    <a className="text-white font-semibold" href="#!">
      Aero UI
    </a>
  </div>
</footer>
`}
      >
        <footer className="text-center bg-blue-gray-800">
          {/* Sign-up form section */}
          <div className="px-6 pt-6">
            <form action="">
              <div className="flex flex-col md:flex-row items-center justify-center py-6">
                <div className="md:mr-4 mb-3 md:mb-0">
                  <p className="text-gray-200">
                    <strong className="capitalize">
                      Sign up for our newsletter
                    </strong>
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="Enter your email"
                    className="px-2 py-[3px] bg-transparent text-base text-white border border-r-0 rounded-l-md focus:outline-none"
                    name="email"
                    type="email"
                  />
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-r-md cursor-pointer hover:bg-blue-600 focus:outline-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Copyright section */}
          <div
            className="w-full p-4 text-center text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright{" "}
            <a className="text-white font-semibold" href="#!">
              Aero UI
            </a>
          </div>
        </footer>
      </CodeBox>
    </>
  );
};

export default Footer5;
