/* eslint-disable react/no-unescaped-entities */
import Hero1 from "../../components/App/Hero/Hero1";
import { Hero2 } from "../../components/App/Hero/Hero2";
import { Hero3 } from "../../components/App/Hero/Hero3";
import Hero4 from "../../components/App/Hero/Hero4";
import Hero5 from "../../components/App/Hero/Hero5";
import Hero6 from "../../components/App/Hero/Hero6";
import Hero7 from "../../components/App/Hero/Hero7";

const Hero = () => {
  return (
    <div>
      <h1 className="text-4xl text-white text-center font-semibold mt-10">
        Let's Explore All Hero Components
      </h1>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5/>
      <Hero6/>
      <Hero7/>
    </div>
  );
};

export default Hero;
