import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card14 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="card flex flex-col items-center justify-around w-[260px] text-center relative cursor-pointer shadow-[0_10px_15px_-3px_rgba(33,150,243,0.4),0_4px_6px_-4px_rgba(33,150,243,0.4)] bg-[#6B6ECC] mx-0 my-2.5 px-px py-5 rounded-[10px]">
   <div className="content p-5 text-[white] font-extrabold text-[50px]">
     <div className="title font-extrabold uppercase text-[rgba(255,255,255,0.64)] text-[25px] tracking-[1px] mt-2.5">
       Personal edition
     </div>
     <div className="price text-[white] font-extrabold text-[50px]">
       $39.99
     </div>
     <div className="description text-[rgba(255,255,255,0.6)] text-sm mt-2.5">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
       at posuere eros. Interdum et malesuada fames ac ante ipsum primis
       in faucibus.
     </div>
   </div>
   <button className="select-none text-white uppercase font-bold text-xs bg-[rgb(33_150_243)] w-[90%] px-6 py-3 rounded-lg border-[none]">Buy now</button>
 </div>`}
      >
        <div className="flex justify-center items-center">
          <div className="card flex flex-col items-center justify-around w-[260px] text-center relative cursor-pointer shadow-[0_10px_15px_-3px_rgba(33,150,243,0.4),0_4px_6px_-4px_rgba(33,150,243,0.4)] bg-[#6B6ECC] mx-0 my-2.5 px-px py-5 rounded-[10px]">
            <div className="content p-5 text-[white] font-extrabold text-[50px]">
              <div className="title font-extrabold uppercase text-[rgba(255,255,255,0.64)] text-[25px] tracking-[1px] mt-2.5">
                Personal edition
              </div>
              <div className="price text-[white] font-extrabold text-[50px]">
                $39.99
              </div>
              <div className="description text-[rgba(255,255,255,0.6)] text-sm mt-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at posuere eros. Interdum et malesuada fames ac ante
                ipsum primis in faucibus.
              </div>
            </div>
            <button className="select-none text-white uppercase font-bold text-xs bg-[rgb(33_150_243)] w-[90%] px-6 py-3 rounded-lg border-[none]">
              Buy now
            </button>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Card14;
