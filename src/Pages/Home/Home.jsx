import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-white text-center">
          <div className="max-w-[60rem] mx-auto mt-40  space-y-5">
            <h1 className="text-6xl font-bold ">
              Embark on a Journey of Design Excellence with <span className="text-yellow-400">Aero UI</span>{" "}
              For Coding 20x Faster{" "}
            </h1>
            <p className="text-xl">
              Welcome to <span className="text-yellow-400">Aero UI,</span> where innovation takes flight. Explore our
              meticulously crafted components designed to elevate your projects.
              Redefine UI design with Aero UI, one component at a time.
            </p>
            <div className="flex items-center justify-center gap-x-3">
              <Link to={"/components"}>
                <Button color="amber" className="capitalize" size="lg">
                  Components
                </Button>
              </Link>
              <Link to={'/documention'}>
                <Button  className="capitalize" size="lg">
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
