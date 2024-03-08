import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner11 = () => {
  return (
    <CodeBox
      text={"Loading with Wedge Animation"}
      stringCode={`
 {/* small wedge Animation */}
 <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
       style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }}
     >
     <g transform="translate(50 50)">
         <g transform="scale(0.52)">
           <g transform="translate(-50 -50)">
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.4s" ></animateTransform>
               <path fillOpacity="0.81" fill="#084f5a" d="M50 50L50 0A50 50 0 0 1 100 50Z" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" ></animateTransform>
               <path fillOpacity="0.81" fill="#38737f" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" ></animateTransform>
               <path fillOpacity="0.81" fill="#6099a5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" ></animateTransform>
               <path fillOpacity="0.81" fill="#88c3cf" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)" ></path>
             </g>
           </g>
         </g>
     </g>
 </svg>

 {/* small wedge Animation */}
 <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
       style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }}
     >
     <g transform="translate(50 50)">
         <g transform="scale(0.52)">
           <g transform="translate(-50 -50)">
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.4s" ></animateTransform>
               <path fillOpacity="0.81" fill="#084f5a" d="M50 50L50 0A50 50 0 0 1 100 50Z" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" ></animateTransform>
               <path fillOpacity="0.81" fill="#38737f" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" ></animateTransform>
               <path fillOpacity="0.81" fill="#6099a5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" ></animateTransform>
               <path fillOpacity="0.81" fill="#88c3cf" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)" ></path>
             </g>
           </g>
         </g>
     </g>
 </svg>

 {/* small wedge Animation */}
 <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
       style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }}
     >
     <g transform="translate(50 50)">
         <g transform="scale(0.52)">
           <g transform="translate(-50 -50)">
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.4s" ></animateTransform>
               <path fillOpacity="0.81" fill="#084f5a" d="M50 50L50 0A50 50 0 0 1 100 50Z" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" ></animateTransform>
               <path fillOpacity="0.81" fill="#38737f" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" ></animateTransform>
               <path fillOpacity="0.81" fill="#6099a5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" ></animateTransform>
               <path fillOpacity="0.81" fill="#88c3cf" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)" ></path>
             </g>
           </g>
         </g>
     </g>
 </svg>

 {/* Extra Large wedge Animation */}
 <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
       style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }}
     >
     <g transform="translate(50 50)">
         <g transform="scale(0.52)">
           <g transform="translate(-50 -50)">
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.4s" ></animateTransform>
               <path fillOpacity="0.81" fill="#084f5a" d="M50 50L50 0A50 50 0 0 1 100 50Z" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" ></animateTransform>
               <path fillOpacity="0.81" fill="#38737f" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.8s" ></animateTransform>
               <path fillOpacity="0.81" fill="#6099a5" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)" ></path>
             </g>
             <g>
               <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" ></animateTransform>
               <path fillOpacity="0.81" fill="#88c3cf" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)" ></path>
             </g>
           </g>
         </g>
     </g>
 </svg>

    
    `}
    >
      <div className="flex justify-evenly items-center">
        {/* small wedge Animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: "auto",
            background: "transparent",
            display: "block",
            shapeRendering: "auto",
          }}
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(0.52)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.4s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#084f5a"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.6s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#38737f"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(90 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.8s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#6099a5"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(180 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#88c3cf"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(270 50 50)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>

        {/* medium wedge Animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: "auto",
            background: "transparent",
            display: "block",
            shapeRendering: "auto",
          }}
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(0.52)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.4s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#084f5a"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.6s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#38737f"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(90 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.8s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#6099a5"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(180 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#88c3cf"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(270 50 50)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>

        {/* large wedge Animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: "auto",
            background: "transparent",
            display: "block",
            shapeRendering: "auto",
          }}
          width="150px"
          height="150px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(0.52)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.4s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#084f5a"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.6s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#38737f"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(90 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.8s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#6099a5"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(180 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#88c3cf"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(270 50 50)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {/*Extra  large wedge Animation */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            margin: "auto",
            background: "transparent",
            display: "block",
            shapeRendering: "auto",
          }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(0.52)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.4s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#084f5a"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.6s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#38737f"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(90 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.8s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#6099a5"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(180 50 50)"
                  ></path>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1s"
                  ></animateTransform>
                  <path
                    fillOpacity="0.81"
                    fill="#88c3cf"
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(270 50 50)"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </CodeBox>
  );
};

export default Spinner11;
