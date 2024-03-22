import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/aeroui.svg";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const NavList = () => {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-medium"
        >
          <Link
            to={"/components/avatar"}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Components
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-medium"
        >
          <Link
            to={"/blocks"}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Blocks
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-medium"
        >
          <Link
            to={"/Documantion"}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Documentation
          </Link>
        </Typography>
      </ul>
    );
  };

  return (
    <nav className="mx-auto fixed top-0 py-2 w-full border-b-2 navbar border-orange-400 z-10">
      <div className="flex items-center justify-between max-w-8xl mx-auto px-5  ">
        <Link to={"/"} className="flex ">
          <img className="w-10" src={logo} alt="soft ui" />
          <h2 className=" text-3xl font-bold logo-text">Soft UI</h2>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
};

export default Navbar;
