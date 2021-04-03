import React, { useState } from "react";

import {
  Container,
  Wrapper,
  UserInfosRow,
  InterestsContainer,
  InterestsText,
  InterestsCount,
  SettingButton,
  GalaryButton,
  UserInfosConatiner,
  UserAge,
  ButtonsContainer,
  PhotosRow,
  SpliterContainer,
  VerificationProfile,
  InfoArea,
  Popularity,
  ProfileCompletion,
  Location,
  DatingChoice,
  Interests,
  PersonalInfo,
  Languages,
  UserName,
  PhotoContainer,
  PhotoText,
  PhotoIconContainer,
  ProgressBar,
  ProgressBarButton,
  CompleteProfileText,
  ProgressCountName,
  ProgressCount,
  ProfileCompletionText,
  ProgressContainer,
  LocationText,
  LocationName,
  LocationMapContainer,
  LocationContainer,
  DatingChoiceContainer,
  DatingChoiceQuestion,
  DatingChoiceAnswer,
  InterestsWrapper,
  InterestsTitle,
  InterestsList,
  PersonalUserInfosContainer,
  PersonalInfoTitle,
  PersonalInfoBio,
  PersonalInfoContainer,
  LanguagesTitle,
  LanguageContainer,
  LanguageName,
  VerificationProfileContainer,
  VerificationProfileText,
  VerificationProfileDesc,
  LocationInfoContainer,
  LocationInfoTextContainer,
  LocationInfoIcon,
  LocationSearchContainer,
  LocationSearchBtnAndSearch,
  LocationButtonContainer,
} from "./styles";
import Icon from "src/components/icon";
import ButtonIcon from "src/components/buttonIcon";
import {
  color,
  CustomSize,
  icon,
  iconSize,
  placeholder,
  fontSize,
} from "src/values";
import Search from "src/components/search";
import Button from "src/components/button";

import SideBar from "src/components/sideBar";

const UserInfo = () => {
  return (
    <UserInfosRow>
      <UserInfosConatiner>
        <UserName>MOHAMED, 25</UserName>
        <InterestsContainer>
          <InterestsCount>104</InterestsCount>
          <InterestsText>
            your <br />
            interset
          </InterestsText>
        </InterestsContainer>
      </UserInfosConatiner>
      <ButtonsContainer>
        <SettingButton>
          <Icon className={icon.gear} size={CustomSize(iconSize.small, 1.5)} />
        </SettingButton>
        <GalaryButton>
          <Icon
            className={icon.galary}
            size={CustomSize(iconSize.small, 1.5)}
          />
        </GalaryButton>
      </ButtonsContainer>
    </UserInfosRow>
  );
};

const getColor = (index) => {
  let num = index > 0 ? index % 2 : -1;
  let newColor;

  switch (num) {
    case 0:
      newColor = color.wildSand;
      break;
    case 1:
      newColor = color.Alto;
      break;
    default:
      newColor = color.electricViolet;
  }
  return newColor;
};

const Photos = () => {
  return (
    <PhotosRow>
      {[0, 1, 2, 3, 4, 5].map((item, index) => {
        let newColor = getColor(index);
        return (
          <PhotoContainer color={newColor}>
            <PhotoIconContainer>
              <Icon
                className={icon.camera}
                size={CustomSize(iconSize.medium, 2)}
                color={color.white}
              />
            </PhotoIconContainer>
            {newColor === color.electricViolet ? (
              <PhotoText>Add photos</PhotoText>
            ) : null}
          </PhotoContainer>
        );
      })}
    </PhotosRow>
  );
};

const ProfileCompletionCmp = () => {
  return (
    <ProfileCompletion>
      <ProfileCompletionText>Profile Completion:</ProfileCompletionText>
      <ProgressContainer>
        <ProgressBar>
          <ProgressCount>
            <ProgressCountName>20%</ProgressCountName>
          </ProgressCount>
        </ProgressBar>
        <ProgressBarButton>
          <ButtonIcon
            color={color.black}
            bgColor={color.white}
            height={"40px"}
            border={true}
          >
            <Icon className={icon.fire} color={color.lavenderRose} />
            <CompleteProfileText>Complete Profile</CompleteProfileText>
          </ButtonIcon>
        </ProgressBarButton>
      </ProgressContainer>
    </ProfileCompletion>
  );
};

const LocationCmp = () => {
  // INIT STATE
  const [isExpanded, setExpand] = useState(false);

  // UPDATE ISEXPANDED
  const updateExpanded = () => {
    setExpand((prevState) => !prevState);
  };

  return (
    <Location>
      <LocationContainer>
        <LocationInfoContainer>
          <LocationInfoTextContainer onClick={updateExpanded}>
            <LocationText>Location</LocationText>
            <LocationInfoIcon>
              <Icon className={icon.pen} />
            </LocationInfoIcon>
          </LocationInfoTextContainer>
          {isExpanded ? (
            <LocationSearchBtnAndSearch>
              <LocationSearchContainer>
                <Search
                  height={"38px"}
                  width={"450px"}
                  placeholder={placeholder.location}
                  iconColor={color.mercury}
                  iconSize={CustomSize(iconSize.small, 2)}
                />
              </LocationSearchContainer>
              <LocationButtonContainer>
                <Button
                  color={color.white}
                  bgColor={color.electricViolet}
                  height={"36px"}
                  width={"200px"}
                  fontSize={CustomSize(fontSize.small, 3)}
                  border={true}
                >
                  Save
                </Button>
              </LocationButtonContainer>
              <LocationButtonContainer>
                <Button
                  color={color.black}
                  bgColor={color.white}
                  height={"36px"}
                  width={"200px"}
                  fontSize={CustomSize(fontSize.small, 3)}
                  border={true}
                >
                  Cancel
                </Button>
              </LocationButtonContainer>
            </LocationSearchBtnAndSearch>
          ) : (
            <LocationName>Khouribga</LocationName>
          )}
        </LocationInfoContainer>
        <LocationMapContainer></LocationMapContainer>
      </LocationContainer>
    </Location>
  );
};

const DatingChoiceCmp = () => {
  return (
    <DatingChoice>
      <DatingChoiceContainer>
        <DatingChoiceQuestion>I'm here to</DatingChoiceQuestion>
        <DatingChoiceAnswer>Date</DatingChoiceAnswer>
      </DatingChoiceContainer>
    </DatingChoice>
  );
};

const InterestsCmp = () => {
  return (
    <Interests>
      <InterestsWrapper>
        <InterestsTitle>100 interests</InterestsTitle>
        <InterestsList></InterestsList>
      </InterestsWrapper>
    </Interests>
  );
};

const PersonalInfoCmp = () => {
  return (
    <PersonalInfo>
      <PersonalInfoContainer>
        <PersonalUserInfosContainer>
          <PersonalInfoTitle>Personal info</PersonalInfoTitle>
          <PersonalInfoBio>
            Write a few words about your temperament, personality, attitude to
            life and people. What distinguishes you from the crowd? What are
            your positive and negative traits?
          </PersonalInfoBio>
        </PersonalUserInfosContainer>
      </PersonalInfoContainer>
    </PersonalInfo>
  );
};

const LanguagesCmp = () => {
  return (
    <Languages>
      <LanguageContainer>
        <LanguagesTitle>Languages</LanguagesTitle>
        <LanguageName>English</LanguageName>
      </LanguageContainer>
    </Languages>
  );
};

const VerificationProfileCmp = () => {
  return (
    <VerificationProfile>
      <VerificationProfileContainer>
        <VerificationProfileText>Verifications</VerificationProfileText>
        <VerificationProfileDesc>
          Verify your profile with a photo of you and one other option from the
          list below:
        </VerificationProfileDesc>
      </VerificationProfileContainer>
    </VerificationProfile>
  );
};

const ProfilePage = () => {
  return (
    <Wrapper>
      <SideBar />
      <Container>
        <UserInfo />
        <Photos />
        <SpliterContainer>
          <InfoArea>
            {/* <Popularity></Popularity> */}
            <ProfileCompletionCmp />
            <LocationCmp />
            <DatingChoiceCmp />
            <InterestsCmp />
            <PersonalInfoCmp />
          </InfoArea>
          <VerificationProfileCmp />
        </SpliterContainer>
      </Container>
    </Wrapper>
  );
};

export default ProfilePage;
