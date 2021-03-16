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
} from "./styles";
import Icon from "src/components/icon";
import { color, CustomSize, icon, iconSize } from "src/values";

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

const ProfilePage = () => {
  return (
    <Wrapper>
      <Container>
        <UserInfo />
        <Photos />
        <SpliterContainer>
          <InfoArea>
            <Popularity></Popularity>
            <ProfileCompletion></ProfileCompletion>
            <Location></Location>
            <DatingChoice></DatingChoice>
            <Interests></Interests>
          </InfoArea>
          <VerificationProfile></VerificationProfile>
        </SpliterContainer>
      </Container>
    </Wrapper>
  );
};

export default ProfilePage;
