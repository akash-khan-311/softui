import Navbar1 from "../../components/App/Navbar/Navbar1";
import Navbar2 from "../../components/App/Navbar/Navbar2";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      {/* Basic Navbar */}
      <Navbar1 />
      {/* Between Nvbar */}
      <Navbar2 />
    </div>
  );
};

export default Navbar;
