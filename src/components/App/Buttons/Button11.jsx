import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button11 = () => {
  return (
    <>
      <CodeBox
        stringCode={` {/* continue with facebook button */}
<button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
    <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
        <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook">
        </path>
      </g>
    </g>
  </svg>
  <span>Continue with Facebook</span>
</button>
{/* Continue With Github button */}
<button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
<svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github"><path d="M22 12.247a10 10 0 0 1-6.833 9.488c-.507.1-.687-.214-.687-.481 0-.328.012-1.407.012-2.743a2.386 2.386 0 0 0-.679-1.852c2.228-.248 4.566-1.093 4.566-4.935a3.859 3.859 0 0 0-1.028-2.683 3.591 3.591 0 0 0-.1-2.647s-.838-.269-2.747 1.025a9.495 9.495 0 0 0-5.007 0c-1.91-1.294-2.75-1.025-2.75-1.025a3.6 3.6 0 0 0-.1 2.647 3.864 3.864 0 0 0-1.027 2.683c0 3.832 2.334 4.69 4.555 4.942A2.137 2.137 0 0 0 9.54 18a2.128 2.128 0 0 1-2.91-.831 2.1 2.1 0 0 0-1.53-1.027s-.977-.013-.069.608a2.646 2.646 0 0 1 1.109 1.463s.586 1.944 3.368 1.34c.005.835.014 1.463.014 1.7 0 .265-.183.574-.683.482A10 10 0 1 1 22 12.247Z"></path></svg>
 <span>Continue with Github</span>
</button>
{/* continue with apple button */}
<button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-1.5 0 20 20" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#000000">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]">
          </path>
        </g>
      </g>
    </g>
  </svg>
  <span>Continue with Apple</span>
</button>
`}
      >
        <div className="flex justify-evenly items-center flex-wrap gap-5">
          {/* continue with facebook button */}
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 48 48"
              version="1.1"
            >
              <g
                id="Icons"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Color-"
                  transform="translate(-200.000000, -160.000000)"
                  fill="#4460A0"
                >
                  <path
                    d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                    id="Facebook"
                  ></path>
                </g>
              </g>
            </svg>
            <span>Continue with Facebook</span>
          </button>
          {/* Continue With Github button */}
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="github"
            >
              <path d="M22 12.247a10 10 0 0 1-6.833 9.488c-.507.1-.687-.214-.687-.481 0-.328.012-1.407.012-2.743a2.386 2.386 0 0 0-.679-1.852c2.228-.248 4.566-1.093 4.566-4.935a3.859 3.859 0 0 0-1.028-2.683 3.591 3.591 0 0 0-.1-2.647s-.838-.269-2.747 1.025a9.495 9.495 0 0 0-5.007 0c-1.91-1.294-2.75-1.025-2.75-1.025a3.6 3.6 0 0 0-.1 2.647 3.864 3.864 0 0 0-1.027 2.683c0 3.832 2.334 4.69 4.555 4.942A2.137 2.137 0 0 0 9.54 18a2.128 2.128 0 0 1-2.91-.831 2.1 2.1 0 0 0-1.53-1.027s-.977-.013-.069.608a2.646 2.646 0 0 1 1.109 1.463s.586 1.944 3.368 1.34c.005.835.014 1.463.014 1.7 0 .265-.183.574-.683.482A10 10 0 1 1 22 12.247Z"></path>
            </svg>

            <span>Continue with Github</span>
          </button>
          {/* continue with apple button */}
          <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-1.5 0 20 20"
              version="1.1"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-102.000000, -7439.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                      id="apple-[#173]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Apple</span>
          </button>
        </div>
      </CodeBox>
    </>
  );
};
export default Button11;
