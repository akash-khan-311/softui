import  { useState } from 'react';
import CodeBox from '../../Shared/CodeBox/CodeBox';

const Slider2 = () => {
  const [value, setValue] = useState(500);

  const updatePrice = (value) => {
    document.getElementById("minPrice").textContent = "$" + value;
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    updatePrice(newValue);
  };

  return (
    <CodeBox stringCode={`import  { useState } from 'react';
const Slider = ()=> {
    const [value, setValue] = useState(500);
    const updatePrice = (value) => {
      document.getElementById("minPrice").textContent = "$" + value;
    };
  
    const handleChange = (e) => {
      const newValue = parseInt(e.target.value);
      setValue(newValue);
      updatePrice(newValue);
    };
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
          <div className="mb-4">
            <label htmlFor="price-range" className="block text-gray-700 font-bold mb-2">Price Range</label>
            <input 
              type="range" 
              id="price-range" 
              className="w-full accent-indigo-600" 
              min="0" 
              max="1000" 
              value={value} 
              onChange={handleChange} 
            />
          </div>
          <div className="flex justify-between text-gray-500">
            <span id="minPrice">${value}</span>
            <span id="maxPrice">$1000</span>
          </div>
        </div>
    )
}
    export default Slider;
    `}>
       <div className="flex justify-center items-center">
       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Range Slider</h2>
      <div className="mb-4">
        <label htmlFor="price-range" className="block text-gray-700 font-bold mb-2">Price Range</label>
        <input 
          type="range" 
          id="price-range" 
          className="w-full accent-indigo-600" 
          min="0" 
          max="1000" 
          value={value} 
          onChange={handleChange} 
        />
      </div>
      <div className="flex justify-between text-gray-500">
        <span id="minPrice">${value}</span>
        <span id="maxPrice">$1000</span>
      </div>
    </div>
       </div>
    </CodeBox>
  );
};

export default Slider2;
