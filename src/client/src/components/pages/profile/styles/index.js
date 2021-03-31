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
  display: flex;
  flex-direction: row;
`;

export const InfoArea = styled.div`
  flex: 1;
  background-color: ${color.white};
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

// ************** profile compeletion
export const ProfileCompletion = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  border-bottom: 1px solid ${color.mercury};
  display: flex;
  flex-direction: column;
  ::after {
    content: "";
    flex: 1;
  }
`;

export const ProfileCompletionText = styled.span`
  color: ${color.black};
  font-size: ${CustomSize(fontSize.small, 4)};
  padding-top: 40px;
  padding-left: 10px;
`;

export const ProgressContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  height: 15px;
  flex: 4;
  margin: 5px;
  background-color: ${color.mercury};
  border-radius: 10px;
  display: flex;
`;

export const ProgressCount = styled.div`
  display: flex;
  width: 20%;
  background-color: ${color.electricViolet};
  border-radius: 10px;
  justify-content: flex-end;
  align-items: center;
`;

export const ProgressCountName = styled.div`
  color: ${color.white};
  font-size: ${fontSize.small};
`;

export const ProgressBarButton = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompleteProfileText = styled.span`
  color: ${color.black};
  font-size: ${CustomSize(fontSize.small, 5)};
`;

// ***************************

// **************** LOCATION
export const Location = styled.div`
  height: 250px;
  width: 100%;
  border-bottom: 1px solid ${color.mercury};
`;

export const LocationContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const LocationText = styled.span`
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: ${fontSize.medium};
`;

export const LocationName = styled.span`
  margin-top: 2px;
  margin-bottom: 2px;
  color: ${color.mercury};
`;

export const LocationMapContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 2px;
  border: 1px solid ${color.mercury};
  height: 150px;
  width: 100%;
  border-radius: 8px;
`;

// ****************

// ************ DATE CHOICES
export const DatingChoice = styled.div`
  height: 120px;
  width: 100%;
  border-bottom: 1px solid ${color.mercury};
`;

export const DatingChoiceContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const DatingChoiceQuestion = styled.span`
  font-size: ${fontSize.medium};
  padding-bottom: 10px;
`;

export const DatingChoiceAnswer = styled.span`
  color: ${color.mercury};
`;

// ****************

// ************* INTERESTS
export const Interests = styled.div`
  height: 200px;
  width: 100%;
  border-bottom: 1px solid ${color.mercury};
`;

export const InterestsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const InterestsTitle = styled.span`
  font-size: ${fontSize.medium};
  padding-bottom: 10px;
`;

export const InterestsList = styled.div`
  background-color: red;
  height: 120px;
  width: 100%;
`;

// ***************

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
