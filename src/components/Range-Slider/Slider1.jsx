import { useState } from "react";
import CodeBox from "../../Shared/CodeBox/CodeBox";

const Slider1 = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <CodeBox text={'Explore Range Slider'} stringCode={`import { useState } from "react";
const Slider = ()=> {
    const [value, setValue] = useState(50);
    const handleChange = (e) => {
      setValue(parseInt(e.target.value));
    };
  
    return (
        <div className="w-full max-w-md mx-auto py-6">
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={handleChange}
      className="appearance-none w-full h-3 bg-gray-200 rounded-full outline-none focus:outline-none"
    />
    <div className="flex justify-between mt-2 text-white">
      <span>0</span>
      <span>{value}</span>
      <span>100</span>
    </div>
  </div>
    )
}
export default Slider;
    `}>
      <div className="w-full max-w-md mx-auto py-6">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
          className="appearance-none w-full h-3 bg-gray-200 rounded-full outline-none focus:outline-none"
        />
        <div className="flex justify-between mt-2 text-white">
          <span>0</span>
          <span>{value}</span>
          <span>100</span>
        </div>
      </div>
    </CodeBox>
  );
};

export default Slider1;
