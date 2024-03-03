import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosTabletLandscape } from "react-icons/io";
import { IoMdLaptop } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import JSXCode from "../JSXCode/JSXCode";
import Preview from "../PreviewBox/Preview";

const devices = [
  { label: "xs", value: "sm:max-w-xs mx-auto ", icon: <FaMobileAlt /> },
  { label: "sm", value: "sm:max-w-sm mx-auto ", icon: <FaMobileAlt /> },
  { label: "md", value: "md:max-w-md mx-auto", icon: <IoIosTabletLandscape /> },
  { label: "lg", value: "lg:max-w-lg mx-auto", icon: <IoMdLaptop /> },
  { label: "xl", value: "w-full mx-auto", icon: <FiMonitor /> },
];

const CodeBox = ({ children, stringCode, text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeBoxOpen, setIsCodeBoxOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("w-full h-full");
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  console.log(selectedDevice);

  return (
    <>
      <div className={`w-full rounded-md h-fit  px-4 py-2 `}>
        <div className={`w-full rounded-md h-fit  px-4 py-1 my-10 `}>
          <h2 className="text-white text-3xl font-semibold mb-10">{text}</h2>

          <div className="flex gap-2 items-center sm:justify-between justify-end rounded-t-lg border border-gray-50 shadow-lg bg-gradient-to-br from-cyan-900 to-purple-900 py-5">
            <div className="hidden sm:flex items-center gap-x-5 text-white text-lg ml-2">
              {devices.map((device, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center"
                  onClick={() => setSelectedDevice(device.value)}
                >
                  <span
                    className={`${device.label === "sm" && "text-sm"} ${
                      device.label === "md" && "text-xl"
                    } ${device.label === "lg" && "text-2xl"} ${
                      device.label === "xl" && "text-3xl"
                    }`}
                  >
                    {device.icon}
                  </span>
                  <h1>{device.label}</h1>
                </button>
              ))}
            </div>
            <div className="flex items-center">
              <div className="flex ">
                {isCodeBoxOpen ? (
                  <div className="">
                    <button
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      className="flex items-center border py-1 px-3 rounded-md transition-all duration-300 hover:bg-white/20"
                    >
                      <IoMdEye
                        className="text-2xl text-white cursor-pointer"
                        onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      />
                      <span className="text-lg text-white ml-2">
                        Hidden Code
                      </span>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      className="flex items-center border py-1 px-3 rounded-md transition-all duration-300 hover:bg-white/20"
                    >
                      <FaCode
                        className="text-2xl text-white cursor-pointer ml-2"
                        onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                      />
                      <span className="text-lg text-white ml-2">Show Code</span>
                    </button>
                  </div>
                )}
              </div>
              <CopyToClipboard text={stringCode} onCopy={handleCopy}>
                <button className="copy-button px-2    text-white">
                  {isCopied ? (
                    <div className="flex items-center gap-x-2 border py-[5px] px-3 rounded-md hover:bg-white/20">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        transform="matrix(1, 0, 0, 1, 0, 0)"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Check_All">
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#ffffff"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="flex items-center gap-x-2">
                      <div className="border py-[5px] px-3 rounded-md  hover:bg-white/20">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.00001 4.10999C6.14022 4.33198 5.37874 4.83376 4.83558 5.53625C4.29241 6.23875 3.99845 7.10201 4.00001 7.98999V17.99C4.00001 19.0509 4.42149 20.0682 5.17164 20.8184C5.92178 21.5685 6.93914 21.99 8.00001 21.99H16C17.0609 21.99 18.0783 21.5685 18.8284 20.8184C19.5786 20.0682 20 19.0509 20 17.99V7.98999C19.9993 7.10372 19.7044 6.24269 19.1614 5.54224C18.6184 4.84178 17.8581 4.34156 17 4.12"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 5.98999C8.46957 5.98999 7.96089 5.77925 7.58582 5.40417C7.21074 5.0291 7 4.52042 7 3.98999C7 3.45956 7.21074 2.95088 7.58582 2.57581C7.96089 2.20073 8.46957 1.98999 9 1.98999H15C15.5304 1.98999 16.0392 2.20073 16.4142 2.57581C16.7893 2.95088 17 3.45956 17 3.98999C17 4.52042 16.7893 5.0291 16.4142 5.40417C16.0392 5.77925 15.5304 5.98999 15 5.98999H9Z"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div
            className={`
                px-0  h-full overflow-x-auto
                flex justify-center"
            border-r border-b border-l  rounded-b-lg w-full mx-auto`}
          >
            {isCodeBoxOpen ? (
              <div className="w-full py-0">
                <JSXCode stringCode={stringCode}></JSXCode>
              </div>
            ) : (
              <div className={`${selectedDevice} mx-auto`}>
                <Preview>{children}</Preview>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBox;
