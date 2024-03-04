import Navbar1 from "../../components/App/Navbar/Navbar1";
import Navbar2 from "../../components/App/Navbar/Navbar2";
import Navbar3 from "../../components/App/Navbar/Navbar3";
import Navbar4 from "../../components/App/Navbar/Navbar4";
import Navbar5 from "../../components/App/Navbar/Navbar5";
import Navbar6 from "../../components/App/Navbar/Navbar6";
import Navbar7 from "../../components/App/Navbar/Navbar7";
import Navbar8 from "../../components/App/Navbar/Navbar8";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      {/* Basic Navbar */}
      <Navbar1 />
      {/* Between Nvbar */}
      <Navbar2 />
      {/* Navbar With Buttons */}
      <Navbar3 />
      {/* Navbar Without Routes */}
      <Navbar4 />
      {/* Dropdown Navbar */}
      <Navbar5 />
      {/* Responsive Navbar */}
      <Navbar6 />
      {/*  */}
      <Navbar7/>
      <Navbar8/>
    </div>
  );
};

export default Navbar;
