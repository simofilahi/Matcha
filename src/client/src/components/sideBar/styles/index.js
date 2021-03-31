import styled from "styled-components";
import { CustomSize, fontSize, color } from "src/values";
import image from "src/assets/user.jpeg";

// WHOLE WRAPPER
export const Wrapper = styled.aside`
  height: 100%;
  width: 300px;
  align-self: flex-start;
  padding: 0px 20px 0px 20px;
`;

// WEB SITE TITLE CONTAINER
export const TitleContainer = styled.div`
  height: 100px;
  width: 100%;
  border-bottom: 1px solid ${color.mercury};
  padding: 20px;
  display: flex;
  justify-content: center;
`;

// WEB SITE TITLE
export const Title = styled.h4`
  font-size: ${CustomSize(fontSize.large, 4)};
  color: ${color.electricViolet};
`;

// USER INFORMATION CONTAINER
export const UserInfosContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid ${color.mercury};
`;

// AVATAR CONTAINER
export const AvatarContainer = styled.div`
  align-self: center;
  padding: 5px;
`;

// USER INFORAMTION
export const UserInfos = styled.div`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// USER NAME
export const Name = styled.span`
  margin: 2px;
`;

// USER POPULARITY
export const Popularity = styled.span`
  margin: 2px;
  color: ${color.Boulder};
`;

// POPULARITY TEXT
export const Text = styled.span`
  color: ${color.mountainMeadow};
  margin: 1px;
`;

// APP PAGES LIST
export const AppPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// ITEM CONTAINER
export const ItemContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 1px;
`;

// LINK TEXT
export const LinkText = styled.span`
  font-size: ${CustomSize(fontSize.small, 4)};
  color: ${color.Boulder};
  cursor: pointer;
  &:hover {
    color: ${color.electricViolet};
  }
`;

// LINK ICON CONTAINER
export const LinkIconContainer = styled.div``;

// SUGGETED PEOPLE
export const SuggestedPepoleContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

// SUGGESTED PEOPLE TEXT
export const SuggestedPeopleText = styled.span`
  text-align: center;
`;

// USERS PHOTOS GRID
export const GirdContainer = styled.span`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  flex: 1;
  margin-top: 20px;
`;

// USER PHOTO CARD
export const GridItem = styled.div`
  height: 80px;
  width: 80px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

// BUTTON CONTAINER
export const ExploreButtonContainer = styled.div`
  flex: 1;
`;
