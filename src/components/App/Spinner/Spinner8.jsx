import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner8 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/173880/loading-arrows.svg" alt="Loading icon" />
<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/491270/loading-spinner.svg" alt="Loading icon" />
<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/474682/loading.svg" alt="Loading icon" />
<img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/199956/loading-loader.svg" alt="Loading icon" />`}
      >
        <div className="flex justify-evenly flex-wrap items-center">
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/173880/loading-arrows.svg"
            alt="Loading icon"
          />
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/491270/loading-spinner.svg"
            alt="Loading icon"
          />
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/474682/loading.svg"
            alt="Loading icon"
          />
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/199956/loading-loader.svg"
            alt="Loading icon"
          />
        </div>
      </CodeBox>
    </div>
  );
};
export default Spinner8;
