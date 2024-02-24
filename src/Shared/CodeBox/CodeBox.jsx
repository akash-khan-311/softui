import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCode } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import JSXCode from "../JSXCode/JSXCode";
import Preview from "../PreviewBox/Preview";

const CodeBox = ({ children, stringCode, text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCodeBoxOpen, setIsCodeBoxOpen] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <div className={`w-full rounded-md h-fit  px-4 py-2 my-20`}>
        <div className={`w-full rounded-md h-fit  px-4 py-1 my-10 `}>
          <h2 className="text-white text-3xl font-semibold mb-10">{text}</h2>
          <div className="flex gap-2 items-center justify-between rounded-t-lg border  backdrop-blur-2xl bg-white/30">
            <div className="flex ">
              {isCodeBoxOpen ? (
                <div className="">
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Preview"
                  >
                    <IoMdEye
                      className="text-4xl text-white cursor-pointer ml-2"
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                    />
                  </a>
                  <Tooltip id="my-tooltip" />
                </div>
              ) : (
                <div>
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Show code"
                  >
                    <FaCode
                      className="text-4xl text-white cursor-pointer ml-2"
                      onClick={() => setIsCodeBoxOpen(!isCodeBoxOpen)}
                    />
                  </a>
                  <Tooltip id="my-tooltip" />
                </div>
              )}
            </div>
            <CopyToClipboard text={stringCode} onCopy={handleCopy}>
              <button className="copy-button px-2    text-white">
                {isCopied ? (
                  <div className="flex items-center gap-x-2">
                    <svg
                      width="30"
                      height="30"
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
                    Copied
                  </div>
                ) : (
                  <div className="flex items-center gap-x-2">
                    <svg
                     width="25"
                     height="25"
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
                    <span>Copy Code</span>
                  </div>
                )}
              </button>
            </CopyToClipboard>
          </div>
          <div
            className={`
                px-0  h-full overflow-hidden
                flex justify-center"
            border-r border-b border-l  rounded-b-lg w-full`}
          >
            {isCodeBoxOpen ? (
              <div className="w-full py-0">
                <JSXCode stringCode={stringCode}></JSXCode>
              </div>
            ) : (
              <Preview>{children}</Preview>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeBox;
