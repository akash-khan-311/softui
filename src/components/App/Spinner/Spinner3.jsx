import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Spinner3 = () => {
    return(
        <div>
             <CodeBox stringCode={` 
<div className="w-6 h-6 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>
<div className="w-8 h-8 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>
<div className="w-10 h-10 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>`}>
                <div className="flex flex-wrap gap-5 justify-evenly items-center">
                <div className="w-6 h-6 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>
                <div className="w-8 h-8 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>
                <div className="w-10 h-10 animate-spin rounded-full border-double border-4 border-r-0 border-l-0 border-b-yellow-400 border-t-yellow-700"></div>

                </div>
             
             </CodeBox>
        </div>
    )
}
export default Spinner3;