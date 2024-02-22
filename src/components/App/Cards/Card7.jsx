import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card7 = () => {
  return (
    <>
      <CodeBox text={"Horizontal Card"} stringCode={`<div className="w-3/5 mx-auto">
  <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row">
    <img className="md:w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg" src="https://cdn.vox-cdn.com/thumbor/ByNALa-QJ5kMX38tGQNt7o13S00=/0x0:2040x1360/768x512/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24677165/236652_HP_Spectre_x360_14_AKrales_0138.jpg" alt='Card Image'/>
    <div className="flex flex-1 flex-col justify-start p-6">
      <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">Card title</h5>
      <p className="mb-4 text-base text-gray-800 ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="text-xs text-gray-600">Last updated 3 mins ago</p>
    </div>
  </div>
</div>`}>
        <div className="w-3/5 mx-auto">
          <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:flex-row">
            <img className="md:w-1/3 rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg" src="https://cdn.vox-cdn.com/thumbor/ByNALa-QJ5kMX38tGQNt7o13S00=/0x0:2040x1360/768x512/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24677165/236652_HP_Spectre_x360_14_AKrales_0138.jpg" alt='Card Image'/>
            <div className="flex flex-1 flex-col justify-start p-6">
              <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">Card title</h5>
              <p className="mb-4 text-base text-gray-800 ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="text-xs text-gray-600">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Card7;
