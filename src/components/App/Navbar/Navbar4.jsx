import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Navbar4 = () => {
  return (
    <>
      <CodeBox
        text={"Navbar Without Routes"}
        stringCode={`<nav className="px-10 py-4 bg-red-50 ">
  <a href=""><h1 className="text-4xl font-bold text-gray-800 inline-block">Soft UI</h1></a>
</nav>`}
      >
        <nav className="px-10 py-4 bg-red-50 ">
          <a href="">
            <h1 className="text-4xl font-bold text-gray-800 inline-block">
              Soft UI
            </h1>
          </a>
        </nav>
      </CodeBox>
    </>
  );
};

export default Navbar4;
