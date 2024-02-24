/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Modal4 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <CodeBox
        stringCode={`
import { useEffect, useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="rounded-full bg-blue-500 px-6 py-3 text-base font-medium text-white"
      >
        Open Modal
      </button>
      <div
        className={\`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center \${
          modalOpen ? "visible opacity-1" : "invisible opacity-0"
        } inset-0  backdrop-blur-sm bg-white/10 duration-100 \`}
      >
        <div
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className={\`absolute m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-lightd text-gray-500 \${
            modalOpen
              ? " scale-1 opacity-1 duration-500"
              : "scale-0 opacity-0 duration-500"
          } shadow-2xl  px-8 py-12 text-center  md:px-[70px] md:py-[60px]\`}
        >
          <h3 className="pb-[18px] text-xl font-semibold text-black  sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span
            className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-green-600"
          ></span>
          <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded-md border p-3 text-center text-base font-medium text-black transition hover:border-red-600 hover:bg-red-600 hover:text-white bg-red-200"
              >
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded-md border border-primary bg-green-600 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
`}
      >
        <div className="flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className={`rounded-full bg-blue-500 px-6 py-3 text-base font-medium text-white`}
          >
            Open Modal
          </button>
          <div
            className={`z-[9999] fixed flex items-center justify-center h-screen w-screen place-items-center ${
              modalOpen ? "visible opacity-1 " : "invisible opacity-0"
            } inset-0 backdrop-blur-sm bg-white/10  duration-100 `}
          >
            <div
              onFocus={() => setModalOpen(true)}
              onBlur={() => setModalOpen(false)}
              className={`absolute m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-lightd text-gray-500 ${
                modalOpen
                  ? " scale-1 opacity-1 duration-500"
                  : "scale-0 opacity-0 duration-500"
              } shadow-2xl px-8 py-12 text-center  md:px-[70px] md:py-[60px]`}
            >
              <h3 className="pb-[18px] text-xl font-semibold text-black  sm:text-2xl">
                Your Message Sent Successfully
              </h3>
              <span
                className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-green-600`}
              ></span>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since
              </p>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="block w-full rounded-md border p-3 text-center text-base font-medium text-black transition hover:border-red-600 hover:bg-red-600 hover:text-white bg-red-200"
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2 px-3">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="block w-full rounded-md border border-primary bg-green-600 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Modal4;
