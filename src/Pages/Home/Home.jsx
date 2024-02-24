import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mx-auto relative ">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-32 h-max w-full m-auto grid grid-cols-2 gap-20 md:gap-60 opacity-40"
        >
          <div className="blur-[100px] h-56 bg-gradient-to-br from-cyan-600 to-cyan-900"></div>
          <div className="blur-[100px] h-56 bg-gradient-to-r from-purple-600 to-purple-900"></div>
        </div>
        <div className="text-white text-center">
          <div className="max-w-[60rem] mx-auto mt-40 relative space-y-5 z-40">
            <h1 className="text-6xl font-bold ">
              Embark on a Journey of Design Excellence with{" "}
              <span className="text-yellow-400">Aero UI</span> For Coding 20x
              Faster{" "}
            </h1>
            <p className="text-xl">
              Welcome to <span className="text-yellow-400">Aero UI,</span> where
              innovation takes flight. Explore our meticulously crafted
              components designed to elevate your projects. Redefine UI design
              with Aero UI, one component at a time.
            </p>
            <div className="flex items-center justify-center gap-x-3">
              <Link to={"/components/avatar"}>
                <Button color="amber" className="capitalize" size="lg">
                  Components
                </Button>
              </Link>
              <Link to={"/documention"}>
                <Button className="capitalize" size="lg">
                  Documentions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
