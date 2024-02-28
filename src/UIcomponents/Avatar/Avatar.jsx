import Avatar4 from "../../components/App/Avatars/Avatar4";
import Avatar5 from "../../components/App/Avatars/Avatar5";
import Avatar6 from "../../components/App/Avatars/Avatar6";
import Avatars1 from "../../components/App/Avatars/Avatars1";
import Avatars2 from "../../components/App/Avatars/Avatars2";
import Avatars3 from "../../components/App/Avatars/Avatars3";

const Avatar = () => {
  return (
    <div className=" justify-center items-center gap-5">
      {/* Avatar-1 */}
      <Avatars1 />
      <Avatars2 />
      <Avatars3 />
      <Avatar4/>
      <Avatar5/>
      <Avatar6/>
    </div>
  );
};

export default Avatar;
