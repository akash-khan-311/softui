import Input1 from "../../components/App/Inputs/Input1";
import Input2 from "../../components/App/Inputs/Input2";
import Input3 from "../../components/App/Inputs/Input3";
import Input4 from "../../components/App/Inputs/Input4";
import Input5 from "../../components/App/Inputs/Input5";

const Input = () => {
  return (
    <div>
      {/* Default Input  */}
      <Input1 />
      {/* Input with Placeholder */}
      <Input2 />
      {/* Input with button */}
      <Input3 />
      {/* Outlined Input */}
      <Input4 />
      {/* Input Variants */}
      <Input5 />
    </div>
  );
};

export default Input;
