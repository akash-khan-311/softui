import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Checkbox6 = () => {
    return(
        <>
             <CodeBox stringCode={`<label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Blue
    </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Pink
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Green
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Orange
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Purple
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Black
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Indigo
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Red
  </span>
</label>

<label className="flex items-center mb-3 space-x-3">
  <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none" />
  <span className="font-normal  text-white">
    Gray
  </span>
</label>`}>
                
<div className="flex justify-center flex-wrap gap-10">
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Blue
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Pink
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Green
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Orange
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Purple
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Black
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Indigo
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Red
    </span>
  </label>
  <label className="flex items-center mb-3 space-x-3">
    <input type="checkbox" name="checked-demo" className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none" />
    <span className="font-normal  text-white">
      Gray
    </span>
  </label>
</div>


             </CodeBox>
        </>
    )
}
export default Checkbox6;