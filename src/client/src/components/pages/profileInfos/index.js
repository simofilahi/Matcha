import UploadPhoto from "src/components/uploadPhoto";
import Gendar from "src/components/gendar";
import BiographyInput from "src/components/biography";
import Input from "src/components/input";
import Tags from "src/components/tags";
import { Wrapper, Box } from "./styles";

const ProfileInfosPage = () => {
  return (
    <Wrapper>
      <Tags />
      <Box />
      <Input />
      <Box />
      <BiographyInput />
      <Box />
      <Gendar />
      <Box />
      <UploadPhoto />
    </Wrapper>
  );
};

export default ProfileInfosPage;
