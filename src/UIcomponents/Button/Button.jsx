import Button1 from "../../components/App/Buttons/Button1";
import Button2 from "../../components/App/Buttons/Button2";
import Button3 from "../../components/App/Buttons/Button3";
import Button4 from "../../components/App/Buttons/Button4";

const Button = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-start">
      {/* Button 1 */}
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
};

export default Button;
