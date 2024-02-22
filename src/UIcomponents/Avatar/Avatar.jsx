import Avatars1 from "../../components/App/Avatars/Avatars1";
import Avatars2 from "../../components/App/Avatars/Avatars2";
import Avatars3 from "../../components/App/Avatars/Avatars3";

const Avatar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Avatar-1 */}
      <Avatars1 />
      <Avatars1 />
      <Avatars2 />
      <Avatars3 />
    </div>
  );
};

export default Avatar;
