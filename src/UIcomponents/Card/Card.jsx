import Card1 from "../../components/App/Cards/Card1";
import Card2 from "../../components/App/Cards/Card2";
import Card3 from "../../components/App/Cards/Card3";
import Card4 from "../../components/App/Cards/Card4";
import Card5 from "../../components/App/Cards/Card5";

const Card = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      {/* Defualt Card */}
      <Card1 />
      {/* Card with Button */}
      <Card2 />
      {/* Card with image */}
      <Card3 />
      {/* Pricing Card */}
      <Card4 />
      {/* Gradient Card */}
      <Card5 />
    </div>
  );
};

export default Card;
