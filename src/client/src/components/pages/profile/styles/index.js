import { CustomSize, fontSize, color } from "src/values";
import styled from "styled-components";

// WHOLE PAGE WRAPPER
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${color.wildSand};
`;

// CONTAINER
export const Container = styled.div`
  height: 100%;
  width: 900px;
  display: flex;
  flex-direction: column;
`;

// ************* USER NAME **************
export const UserInfosRow = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${color.white};
`;

export const UserInfosConatiner = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserName = styled.div`
  margin-left: 10px;
  font-size: ${CustomSize(fontSize.medium, 2)};
`;

export const InterestsContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const InterestsText = styled.span`
  color: ${color.Boulder};
  margin-left: 10px;
  align-self: center;
  font-size: ${fontSize.small};
`;

export const InterestsCount = styled.span`
  align-self: center;
  font-size: ${CustomSize(fontSize.medium, 2)};
`;
// **********************

// ********************* BUTTONS *********************
export const ButtonsContainer = styled.div`
  width: 200px;
  height: 100%;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingButton = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${color.white};
  border: 1px solid ${color.wildSand};
  margin: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const GalaryButton = styled.div`
  height: 45px;
  width: 45px;
  margin: 10px;
  display: flex;
  background-color: ${color.white};
  border: 2px solid ${color.wildSand};
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
`;
// **********************

// ******************* PHOTOS ***********
export const PhotosRow = styled.div`
  height: 150px;
  width: 100%;
  background-color: orchid;
  display: flex;
`;

export const PhotoContainer = styled.div`
  width: 150px;
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const PhotoIconContainer = styled.div`
  margin: 5px;
`;

export const PhotoText = styled.div`
  color: ${color.white};
`;

// *****************

export const SpliterContainer = styled.div`
  flex: 1;
  background-color: orange;
  display: flex;
  flex-direction: row;
`;

export const InfoArea = styled.div`
  flex: 1;
  background-color: goldenrod;
`;

export const VerificationProfile = styled.div`
  width: 200px;
  height: 100%;
  background-color: greenyellow;
`;

export const Popularity = styled.div`
  height: 200px;
  width: 100%;
  background-color: rebeccapurple;
`;

export const ProfileCompletion = styled.div`
  height: 150px;
  width: 100%;
  background-color: ghostwhite;
`;

export const Location = styled.div`
  height: 250px;
  width: 100%;
  background-color: violet;
`;

export const DatingChoice = styled.div`
  height: 150px;
  width: 100%;
  background-color: olive;
`;

export const Interests = styled.div`
  height: 200px;
  width: 100%;
  background-color: chocolate;
`;

export const PersonalInfo = styled.div`
  height: 250px;
  width: 100%;
  background-color: lavender;
`;

export const Languages = styled.div`
  height: 200px;
  width: 100%;
  background-color: tomato;
`;
