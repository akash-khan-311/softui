import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Alert1 = () => {
    return(
        <div>
             <CodeBox stringCode={`
   {/* Success  */}
   <div className="p-6 max-w-sm mx-auto border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
       <div className="flex ">
         <div className="flex-shrink-0">
           <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
           </svg>
         </div>
         <div className="ml-3">
           <div className="text-sm text-green-600">
             <p>Your Order placed Successfully. 😍</p>
           </div>
         </div>
       </div>
     </div>
       {/* Info  */}
   <div className="p-6 max-w-sm mx-auto border-l-4 border-blue-500 -6 rounded-r-xl bg-green-50">
       <div className="flex">
         <div className="flex-shrink-0">
           <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
           </svg>
         </div>
         <div className="ml-3">
           <div className="text-sm text-blue-500">
             <p>We Have Updated A Simple Things. 🙂</p>
           </div>
         </div>
       </div>
     </div>
     {/* Danger */}
   <div className="p-6 max-w-sm mx-auto border-l-4 border-red-500 -6 rounded-r-xl bg-green-50">
       <div className="flex">
         <div className="flex-shrink-0">
           <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
           </svg>
         </div>
         <div className="ml-3">
           <div className="text-sm text-red-500">
             <p>Your Password is incorrect. 😔</p>
           </div>
         </div>
       </div>
     </div>`}>
           
<div className="space-y-3">
    {/* Success  */}
<div className="p-6 max-w-sm mx-auto border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
    <div className="flex ">
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <div className="text-sm text-green-600">
          <p>Your Order placed Successfully. 😍</p>
        </div>
      </div>
    </div>
  </div>
    {/* Info  */}
<div className="p-6 max-w-sm mx-auto border-l-4 border-blue-500 -6 rounded-r-xl bg-green-50">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <div className="text-sm text-blue-500">
          <p>We Have Updated A Simple Things. 🙂</p>
        </div>
      </div>
    </div>
  </div>
  {/* Danger */}
<div className="p-6 max-w-sm mx-auto border-l-4 border-red-500 -6 rounded-r-xl bg-green-50">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <div className="text-sm text-red-500">
          <p>Your Password is incorrect. 😔</p>
        </div>
      </div>
    </div>
  </div>
</div>


             </CodeBox>
        </div>
    )
}
export default Alert1;