import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Avatars1 = () => {
  return (
    <>
      <CodeBox
        text={"Default And Border Avatar"}
        stringCode={`<img className="w-16 h-16 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
<img className="w-16 h-16 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar" />
<img className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar" />
`}
      >
        <div className="flex flex-wrap gap-5 justify-evenly items-center ">
          <img
            className="w-16 h-16 rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Rounded avatar"
          />
          <img
            className="w-16 h-16 rounded"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Default avatar"
          />
          <img
            className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Bordered avatar"
          />
        </div>
      </CodeBox>
    </>
  );
};

export default Avatars1;
