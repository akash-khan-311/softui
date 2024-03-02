import Skeleton1 from "../../components/App/Skeleton/Skeleton1";
import Skeleton2 from "../../components/App/Skeleton/Skeleton2";

const Skeleton = () => {
    return(
        <>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center hidden md:block mt-20">Explore Your Best Skeleton</h1>
             <Skeleton1/>
             <Skeleton2/>
        </>
    )
}
export default Skeleton;