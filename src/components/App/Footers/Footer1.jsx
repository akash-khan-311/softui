import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Footer1 = () => {
  return (
    <>
      <CodeBox
        text={"Copyright"}
        stringCode={`<footer className="bg-gray-300 text-center dark:bg-neutral-700 lg:text-left">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 flex justify-center">
    <span className="mr-2">© 2024 Copyright</span>
    <span className="text-gray-900 font-semibold cursor-pointer">
      Aero UI
    </span>
  </div>
</footer>`}
      >
        <footer className="bg-gray-300 text-center dark:bg-neutral-700 lg:text-left">
          <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 flex justify-center">
            <span className="mr-2">© 2024 Copyright</span>
            <span className="text-gray-900 font-semibold cursor-pointer">
              Aero UI
            </span>
          </div>
        </footer>
      </CodeBox>
    </>
  );
};

export default Footer1;
