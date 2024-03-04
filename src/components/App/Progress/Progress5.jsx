import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Progress5 = () => {
    return(
        <>
             <CodeBox text={'Circular Progress'} stringCode={`  {/* Circular Progress */}
  <div className="relative size-40">
    <svg className="size-full" width={36} height={36} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={2} />
      {/* Progress Circle inside a group with rotation */}
      <g className="origin-center -rotate-90 transform">
        <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth={2} strokeDasharray={100} strokeDashoffset={75} />
      </g>
    </svg>
  </div>
  {/* End Circular Progress */}
  {/* Circular Progress */}
  <div className="relative size-40">
    <svg className="size-full" width={36} height={36} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={2} />
      {/* Progress Circle inside a group with rotation */}
      <g className="origin-center -rotate-90 transform">
        <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth={2} strokeDasharray={100} strokeDashoffset={75} />
      </g>
    </svg>
    {/* Percentage Text */}
    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <span className="text-center text-2xl font-bold text-gray-100 dark:text-white">72%</span>
    </div>
  </div>
  {/* End Circular Progress */}`}>
             <div className="flex items-center gap-y-5 md:gap-y-0 flex-wrap justify-center md:justify-evenly">
  {/* Circular Progress */}
  <div className="relative size-40">
    <svg className="size-full" width={36} height={36} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={2} />
      {/* Progress Circle inside a group with rotation */}
      <g className="origin-center -rotate-90 transform">
        <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth={2} strokeDasharray={100} strokeDashoffset={75} />
      </g>
    </svg>
  </div>
  {/* End Circular Progress */}
  {/* Circular Progress */}
  <div className="relative size-40">
    <svg className="size-full" width={36} height={36} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      {/* Background Circle */}
      <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-gray-200 dark:text-gray-700" strokeWidth={2} />
      {/* Progress Circle inside a group with rotation */}
      <g className="origin-center -rotate-90 transform">
        <circle cx={18} cy={18} r={16} fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth={2} strokeDasharray={100} strokeDashoffset={75} />
      </g>
    </svg>
    {/* Percentage Text */}
    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <span className="text-center text-2xl font-bold text-gray-100 dark:text-white">72%</span>
    </div>
  </div>
  {/* End Circular Progress */}
</div>

             </CodeBox>
        </>
    )
}
export default Progress5;