import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card14 = () => {
  const listData = [
    { title: "Connect 80 websites" },
    { title: "Connect up to 5 bank accounts" },
    { title: "Track up to 50 credit cards" },
    { title: "Analytics support" },
    { title: "Export up to 12 months data" },
    { title: "Cloud service 24/7" },
  ];
  return (
    <div>
      <CodeBox
        stringCode={`const Card = ()=> {
    const listData = [
      { title: "Connect 80 websites" },
      { title: "Connect up to 5 bank accounts" },
      { title: "Track up to 50 credit cards" },
      { title: "Analytics support" },
      { title: "Export up to 12 months data" },
      { title: "Cloud service 24/7" },
    ];
    return (
        <div className="card max-w-xs flex flex-col bg-black p-6 rounded-3xl">
            <p className="price text-5xl leading-none font-light -tracking-wide text-white">
              $29
            </p>
            <a
              href="#!"
              className="action w-full bg-white text-center text-sm leading-5 text-black transition-all duration-[0.2s] ease-[ease] mt-8 px-6 py-2.5 rounded-full border-2 border-solid border-white hover:text-white hover:bg-transparent"
            >
              Get started
            </a>
            <ul className="lists flex flex-col gap-y-3 text-sm leading-5 text-white mt-10">
              {listData.map((list, i) => (
                <li key={i} className="list flex items-center">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />{" "}
                    </g>
                  </svg>
                  <span className="ml-4"> {list.title} </span>
                </li>
              ))}
            </ul>
          </div>
    )
}

export default Card
`}
      >
        <div className="flex justify-evenly items-center">
          <div className="card max-w-xs flex flex-col bg-black p-6 rounded-3xl">
            <p className="price text-5xl leading-none font-light -tracking-wide text-white">
              $29
            </p>
            <a
              href="#!"
              className="action w-full bg-white text-center text-sm leading-5 text-black transition-all duration-[0.2s] ease-[ease] mt-8 px-6 py-2.5 rounded-full border-2 border-solid border-white hover:text-white hover:bg-transparent"
            >
              Get started
            </a>
            <ul className="lists flex flex-col gap-y-3 text-sm leading-5 text-white mt-10">
              {listData.map((list, i) => (
                <li key={i} className="list flex items-center">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />{" "}
                    </g>
                  </svg>
                  <span className="ml-4"> {list.title} </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};
export default Card14;
