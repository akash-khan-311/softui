import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

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
            Documantion
          </Link>
        </Typography>
      </ul>
    );
  };

  return (
    <nav className="mx-auto bg-blue-gray-900 ">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-0">
        <Link to={"/"}>
          <Typography
            as="a"
            color="white"
            variant="h3"
            className="cursor-pointer py-1.5 w-72"
          >
            <img src={logo} alt="Aero UI" />
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div></div>
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
