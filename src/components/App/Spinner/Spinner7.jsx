import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner7 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/169757/loading-process.svg" alt="Loading icon" />
<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon" />
<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/448500/loading.svg" alt="Loading icon" />`}
      >
        <div className="flex flex-wrap justify-evenly">
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/169757/loading-process.svg"
            alt="Loading icon"
          />
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/70469/loading.svg"
            alt="Loading icon"
          />
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/448500/loading.svg"
            alt="Loading icon"
          />
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner7;
