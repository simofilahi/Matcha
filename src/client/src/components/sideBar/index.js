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
import { color } from "src/values";
import Button from "src/components/button";

const SideBar = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>MATCHA</Title>
      </TitleContainer>
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
      <AppPagesContainer>
        <ItemContainer>
          <LinkText>Encounters</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>People nearby</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>Messages</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>Matched</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>Liked you</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>Visitors</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
        <ItemContainer>
          <LinkText>Favorites</LinkText>
          <LinkIconContainer></LinkIconContainer>
        </ItemContainer>
      </AppPagesContainer>
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
      <ExploreButtonContainer>
        <Button>Explore More Now</Button>
      </ExploreButtonContainer>
    </Wrapper>
  );
};

export default SideBar;
