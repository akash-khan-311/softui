import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Avatars2 = () => {
  return (
    <>
      <CodeBox
        stringCode={`  <div className="relative">
    <img className="w-16 h-16 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt />
    <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
  </div>
  <div className="relative">
    <img className="w-16 h-16 rounded" src="/docs/images/people/profile-picture-5.jpg" alt />
    <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" />
  </div>
  <div className="relative">
    <img className="w-16 h-16 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt />
    <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
  </div>
  <div className="relative">
    <img className="w-16 h-16 rounded" src="/docs/images/people/profile-picture-5.jpg" alt />
    <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
  </div>`}
        text={"Dot indicator Avatar"}
      >
        <div className="flex justify-evenly items-center flex-wrap gap-5">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full"
              src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-3.jpg"
              alt
            />
            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded"
              src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-3.jpg"
              alt
            />
            <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full"
              src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-3.jpg"
              alt
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded"
              src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/team-3.jpg"
              alt
            />
            <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Avatars2;
