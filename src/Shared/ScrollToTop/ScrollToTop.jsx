import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollToTop = () => {
  const [isVissible, setIsVissble] = useState(false);
  const scrolToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const heightToHide = 300;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHide) {
        setIsVissble(true);
      } else {
        setIsVissble(false);
      }
    });
  }, []);
  return (
    <>
      <button
        className={` transition-all ease-in-out duration-300 animate-bounce ${isVissible ? "opacity-100 " : "opacity-0 "} z-20 text-white mt-32 fixed bottom-10 right-2 md:right-5 p-1 rounded-full bg-gradient-to-tr from-purple-900 to-pink-900 `}
        onClick={scrolToTopHandler}
      >
        <span>
          <BiUpArrowAlt className="up-arrow text-xl md:text-2xl lg:text-3xl " />
        </span>
      </button>
    </>
  );
};
export default ScrollToTop;
