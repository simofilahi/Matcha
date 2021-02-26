import React from "react";
import {
  Wrapper,
  GirdContainer,
  GridItem,
  UserInfoContainer,
  UserName,
  UserPhotosInfo,
  CityName,
  PhotosCount,
  IconWrapper,
  InteractionRow,
  FlexIconWrapper,
} from "./styles";
import { icon, iconSize } from "src/values";
import Icon from "src/components/icon";

const UserCard = () => {
  return (
    <GridItem>
      <UserInfoContainer>
        <UserName>simao, 30</UserName>
        <CityName>khouribga</CityName>
        <UserPhotosInfo>
          <PhotosCount>2</PhotosCount>
          <IconWrapper>
            <Icon className={icon.camera} size={iconSize.large} />
          </IconWrapper>
        </UserPhotosInfo>
      </UserInfoContainer>
      <InteractionRow>
        <FlexIconWrapper>
          <Icon className={icon.message} size={iconSize.medium} />
        </FlexIconWrapper>
        <FlexIconWrapper>
          <Icon className={icon.heart} size={iconSize.medium} />
        </FlexIconWrapper>
      </InteractionRow>
    </GridItem>
  );
};

const Search = ({ props, children }) => {
  return (
    <Wrapper>
      <GirdContainer>
        {Array.from({ length: 20 }, () => Math.floor(Math.random() * 10)).map(
          (item) => (
            <UserCard />
          )
        )}
      </GirdContainer>
    </Wrapper>
  );
};

export default Search;
