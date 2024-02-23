import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Avatars3 = () => {
  return (
    <>
      <CodeBox
        text={"Sizes Avatar"}
        stringCode={`
  <img className="w-6 h-6 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Extra small avatar" />
  <img className="w-8 h-8 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Small avatar" />
  <img className="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Medium avatar" />
  <img className="w-20 h-20 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Large avatar" />
  <img className="rounded w-36 h-36" src="/docs/images/people/profile-picture-5.jpg" alt="Extra large avatar" />`}
      >
        <div className="flex flex-wrap justify-evenly gap-5 ">
          <img
            className="w-6 h-6 rounded"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
            alt="Extra small avatar"
          />
          <img
            className="w-8 h-8 rounded"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
            alt="Small avatar"
          />
          <img
            className="w-10 h-10 rounded"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
            alt="Medium avatar"
          />
          <img
            className="w-20 h-20 rounded"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
            alt="Large avatar"
          />
          <img
            className="rounded w-36 h-36"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
            alt="Extra large avatar"
          />
        </div>
      </CodeBox>
    </>
  );
};

export default Avatars3;
