import {
  Wrapper,
  TitleContainer,
  Title,
  UserInfosContainer,
  AvatarContainer,
  UserInfos,
  Name,
  Popularity,
  Text,
  AppPagesContainer,
  ItemContainer,
  LinkText,
  LinkIconContainer,
  SuggestedPepoleContainer,
  SuggestedPeopleText,
  GirdContainer,
  GridItem,
  ExploreButtonContainer,
} from "./styles";
import Avatar from "src/components/avatar";
import { color, fontSize, CustomSize } from "src/values";
import Button from "src/components/button";
import { Link } from "react-router-dom";
import {
  LIKES,
  CHAT,
  EXPLORE,
  VIEW,
  SEARCH,
  MATCH,
  VISITORS,
} from "src/constants";

// USER AVATAR AND OTHER INFOS
const UserInfosCmp = () => {
  return (
    <UserInfosContainer>
      <AvatarContainer>
        <Avatar
          height={"60px"}
          width={"60px"}
          borderColor={color.neonCarrot}
          active={false}
        />
      </AvatarContainer>
      <UserInfos>
        <Name>Mohamed</Name>
        <Popularity>
          Popularity: <Text>Very High</Text>
        </Popularity>
      </UserInfos>
    </UserInfosContainer>
  );
};

// APP LINKS
const LinksCmp = () => {
  return (
    <AppPagesContainer>
      <ItemContainer>
        <LinkText>
          <Link to={EXPLORE}>Encounters</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText>
          <Link to={SEARCH}>People nearby</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText to={CHAT}>
          <Link>Messages</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText>
          <Link to={MATCH}>Matched</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText>
          <Link to={LIKES}>Liked you</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText>
          <Link to={VISITORS}>Visitors</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
      <ItemContainer>
        <LinkText>
          <Link>Favorites</Link>
        </LinkText>
        <LinkIconContainer></LinkIconContainer>
      </ItemContainer>
    </AppPagesContainer>
  );
};

// SUGGESTED PEOPLE GRID
const SuggestedPeopleCmp = () => {
  return (
    <SuggestedPepoleContainer>
      <SuggestedPeopleText>Suggested people</SuggestedPeopleText>
      <GirdContainer>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </GirdContainer>
    </SuggestedPepoleContainer>
  );
};

// BTN
const BtnCmp = () => {
  return (
    <ExploreButtonContainer>
      <Button
        color={color.white}
        bgColor={color.electricViolet}
        height={"36px"}
        width={"100%"}
        margin={"0px"}
        fontSize={CustomSize(fontSize.small, 3)}
      >
        Explore More Now
      </Button>
    </ExploreButtonContainer>
  );
};

// WEB SITE TITLE
const TitleCmp = () => {
  return (
    <TitleContainer>
      <Title>MATCHA</Title>
    </TitleContainer>
  );
};

// ROOT CMP
const SideBar = () => {
  return (
    <Wrapper>
      <TitleCmp />
      <UserInfosCmp />
      <LinksCmp />
      <SuggestedPeopleCmp />
      <BtnCmp />
    </Wrapper>
  );
};

export default SideBar;
