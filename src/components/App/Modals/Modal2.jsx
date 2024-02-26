/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Modal2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalcode = `import { useState } from "react";
  const Modal = () => {
      const [modalOpen, setModalOpen] = useState(false);
      return (
          <div>
              <button onClick={() => setModalOpen(true)} className="bg-gradient-to-tr from-blue-900 to-blue-500 rounded-md py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Large Modal</button>
              <div onClick={() => setModalOpen(false)}  className={\`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center \${modalOpen ? "visible opacity-1" : "invisible opacity-0"} inset-0 bg-black bg-opacity-60 duration-100 \`}>
                  <div onClick={(e) => e.stopPropagation()} className={\`absolute m-4 w-3/4 min-w-[60%] max-w-[60%] rounded-lg bg-white font-sans text-base font-lightd text-blue-gray-500 \${modalOpen ? "translate-y-6 opacity-1 duration-300" : "-translate-y-6 opacity-0 duration-200"} shadow-2xl\`}>
                      <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                          Hi, I'm Soft UI
                      </div>
                      <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet aperiam veritatis voluptate architecto vitae, exercitationem nostrum perspiciatis autem iure, odit alias odio. Suscipit eum sequi quod quidem est incidunt?
                      </div>
                      <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <button onClick={() => setModalOpen(false)} className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Cancel</button>
                        <button onClick={() => setModalOpen(false)} className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Confirm</button>
                      </div>
                  </div>
              </div>
            </div>
          );
      };
  export default Modal;
      
  
  `;
  return (
    <>
      <CodeBox stringCode={modalcode}>
        <div className="flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-tr from-blue-gray-400 to-blue-gray-500 rounded-md py-3 px-6 text-center align-middle font-sans text-xs font-bold capitalize text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Large Modal
          </button>
        </div>
        <div
          onClick={() => setModalOpen(false)}
          className={`z-[999] fixed flex items-center justify-center h-screen w-screen place-items-center ${
            modalOpen ? "visible opacity-1" : "invisible opacity-0"
          } inset-0 bg-black bg-opacity-60 duration-100`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute m-4 w-3/4 min-w-[60%] max-w-[60%] rounded-lg bg-white font-sans text-base font-lightd text-blue-gray-500 ${
              modalOpen
                ? "translate-y-6 opacity-1 duration-300"
                : "-translate-y-6 opacity-0 duration-200"
            } shadow-2xl`}
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Hi, I'm Soft UI
            </div>
            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              eveniet aperiam veritatis voluptate architecto vitae,
              exercitationem nostrum perspiciatis autem iure, odit alias odio.
              Suscipit eum sequi quod quidem est incidunt?
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Cancel
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </CodeBox>
    </>
  );
};

export default Modal2;
