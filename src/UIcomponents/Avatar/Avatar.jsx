import CodeBox from "../../Shared/CodeBox/CodeBox";

const Avatar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/*  */}

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
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Rounded avatar"
          />
          <img
            className="w-16 h-16 rounded"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Default avatar"
          />
          <img
            className="w-16 h-16 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Bordered avatar"
          />
        </div>
      </CodeBox>
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
              src="https://huggingface.co/Jersonm89/Avatar/resolve/main/jonny_2.png"
              alt
            />
            <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded"
              src="https://huggingface.co/Jersonm89/Avatar/resolve/main/jonny_2.png"
              alt
            />
            <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full"
              src="https://huggingface.co/Jersonm89/Avatar/resolve/main/jonny_2.png"
              alt
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
          <div className="relative">
            <img
              className="w-16 h-16 rounded"
              src="https://huggingface.co/Jersonm89/Avatar/resolve/main/jonny_2.png"
              alt
            />
            <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
          </div>
        </div>
      </CodeBox>
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
            src="https://cdn.openart.ai/stable_diffusion/853e3cb67e034e85f9747651667bd1a901ca4863_2000x2000.webp"
            alt="Extra small avatar"
          />
          <img
            className="w-8 h-8 rounded"
            src="https://cdn.openart.ai/stable_diffusion/853e3cb67e034e85f9747651667bd1a901ca4863_2000x2000.webp"
            alt="Small avatar"
          />
          <img
            className="w-10 h-10 rounded"
            src="https://cdn.openart.ai/stable_diffusion/853e3cb67e034e85f9747651667bd1a901ca4863_2000x2000.webp"
            alt="Medium avatar"
          />
          <img
            className="w-20 h-20 rounded"
            src="https://cdn.openart.ai/stable_diffusion/853e3cb67e034e85f9747651667bd1a901ca4863_2000x2000.webp"
            alt="Large avatar"
          />
          <img
            className="rounded w-36 h-36"
            src="https://cdn.openart.ai/stable_diffusion/853e3cb67e034e85f9747651667bd1a901ca4863_2000x2000.webp"
            alt="Extra large avatar"
          />
        </div>
      </CodeBox>
    </div>
  );
};

export default Avatar;
