import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Form11 = () => {
    return(
        <div>
             <CodeBox stringCode={`<div className="container mx-auto px-4 py-8 bg-white">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
    <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
  </div>
  <div className="mt-8">
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0 w-32 h-32">
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Hyater_Din_Furole-Arif_Azad-6a7f5-372019.jpg"  alt="Product image" className=" w-full h-full object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">Product Title</h2>
        <p className="mt-2 text-gray-600">Product Description</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
            <span className="mx-2 text-gray-600">1</span>
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
          </div>
          <span className="ml-auto font-bold">$20.00</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0 w-32 h-32">
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Hyater_Din_Furole-Arif_Azad-6a7f5-372019.jpg"  alt="Product image" className="w-full h-full  object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">Product Title</h2>
        <p className="mt-2 text-gray-600">Product Description</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
            <span className="mx-2 text-gray-600">1</span>
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
          </div>
          <span className="ml-auto font-bold">$15.00</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-end items-center mt-8">
    <span className="text-gray-600 mr-4">Subtotal:</span>
    <span className="text-xl font-bold">$35.00</span>
  </div>
</div>`}>

             <div className="container mx-auto px-4 py-8 bg-white">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
    <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
  </div>
  <div className="mt-8">
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0 w-32 h-32">
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Hyater_Din_Furole-Arif_Azad-6a7f5-372019.jpg"  alt="Product image" className=" w-full h-full object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">Product Title</h2>
        <p className="mt-2 text-gray-600">Product Description</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
            <span className="mx-2 text-gray-600">1</span>
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
          </div>
          <span className="ml-auto font-bold">$20.00</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
      <div className="flex-shrink-0 w-32 h-32">
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Hyater_Din_Furole-Arif_Azad-6a7f5-372019.jpg"  alt="Product image" className="w-full h-full  object-cover" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-lg font-bold">Product Title</h2>
        <p className="mt-2 text-gray-600">Product Description</p>
        <div className="mt-4 flex items-center">
          <span className="mr-2 text-gray-600">Quantity:</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
            <span className="mx-2 text-gray-600">1</span>
            <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
          </div>
          <span className="ml-auto font-bold">$15.00</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-end items-center mt-8">
    <span className="text-gray-600 mr-4">Subtotal:</span>
    <span className="text-xl font-bold">$35.00</span>
  </div>
</div>

             </CodeBox>
        </div>
    )
}
export default Form11;