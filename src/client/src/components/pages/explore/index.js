import React from "react";
import Icon from "src/components/icon";
import { color, icon, iconSize } from "src/values";
import Avatar from "src/components/avatar";
import {
  UserCardContainer,
  Wrapper,
  FlexContainer,
  UserPhotos,
  UserInfos,
  InteractionRow,
  ReactionsContainer,
  Like,
  Dislike,
  UserName,
  PersonalInfos,
  CityName,
  UserInfosContainer,
  AvatarContainer,
  AvatarContainerChild,
} from "./styles";

const UserInfo = () => {
  return (
    <UserInfosContainer>
      <UserInfos>
        <UserName>SIMAO, 30</UserName>
        <CityName>KHOURIBGA</CityName>
      </UserInfos>
      <PersonalInfos></PersonalInfos>
    </UserInfosContainer>
  );
};

const UserCard = () => {
  return (
    <UserPhotos>
      <InteractionRow>
        <ReactionsContainer>
          <Like>
            <Icon className={icon.heart} size={iconSize.large} />
          </Like>
          <Dislike>
            <Icon className={icon.dislike} size={iconSize.large} />
          </Dislike>
        </ReactionsContainer>
      </InteractionRow>
    </UserPhotos>
  );
};

const AvatarCard = () => {
  return (
    <AvatarContainer>
      <AvatarContainerChild>
        <Avatar
          height={"60px"}
          width={"60px"}
          borderColor={color.neonCarrot}
          active={true}
        />
      </AvatarContainerChild>
      <AvatarContainerChild>
        <Avatar height={"60px"} width={"60px"} />
      </AvatarContainerChild>
      <AvatarContainerChild>
        <Avatar height={"60px"} width={"60px"} />
      </AvatarContainerChild>
    </AvatarContainer>
  );
};

const ExplorePage = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <UserCard />
        <UserInfo />
      </FlexContainer>
      <AvatarCard />
    </Wrapper>
  );
};

export default ExplorePage;
