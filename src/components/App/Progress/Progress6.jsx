import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Progress6 = () => {
    return(
        <>
             <CodeBox stringCode={`{/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '25%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '50%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '75%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '90%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '17%'}} />
  </div>`}>
             <div className="flex  justify-evenly items-center flex-wrap gap-y-10 md:gap-y-0">
  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '25%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '50%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '75%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '90%'}} />
  </div>

  {/* Progress Vertical */}
  <div className="flex flex-col flex-nowrap justify-end w-2 h-32 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100}>
    <div className="rounded-full overflow-hidden bg-blue-600" style={{height: '17%'}} />
  </div>

</div>

             </CodeBox>
        </>
    )
}
export default Progress6;