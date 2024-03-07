import Skeleton1 from "../../components/App/Skeleton/Skeleton1";
import Skeleton2 from "../../components/App/Skeleton/Skeleton2";
import Skeleton3 from "../../components/App/Skeleton/Skeleton3";
import Skeleton4 from "../../components/App/Skeleton/Skeleton4";
import Skeleton5 from "../../components/App/Skeleton/Skeleton5";
import Skeleton6 from "../../components/App/Skeleton/Skeleton6";

const Skeleton = () => {
    return(
        <>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center hidden md:block mt-20">Explore Your Best Skeleton</h1>
             <Skeleton1/>
             <Skeleton2/>
             <Skeleton3/>
             <Skeleton4/>
             <Skeleton5/>
             <Skeleton6/>
        </>
    )
}
export default Skeleton;