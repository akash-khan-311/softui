import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card1 = () => {
  return (
    <>
      <CodeBox
        text={"Default Card"}
        stringCode={` <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">This is Card Of Aero UI . Copy and paste if you need</h5>
    <p className="font-normal text-gray-700 -400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque illum illo cupiditate necessitatibus fugiat consectetur labore sint ex consequuntur..</p>
 </a>`}
      >
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <a className="block cursor-pointer max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              This is Card Of Aero UI . Copy and paste if you need
            </h5>
            <p className="font-normal text-gray-700 -400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque illum illo cupiditate necessitatibus fugiat
              consectetur labore sint ex consequuntur..
            </p>
          </a>
        </div>
      </CodeBox>
    </>
  );
};

export default Card1;
