import React, { createContext, useState, useContext } from "react";

// COMPONENT
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
  FlexContainer,
  FilterContainer,
  PeopleNearbyTextContainer,
  PeopleNearbyText,
  FilterIconContainer,
  FilterIcon,
  AdvancedFilterContainer,
  SimpleFilterContainer,
  SimpleFilterText,
  SimpleFilterIcon,
  AdvancedFilterCollpase,
  AdvancedFilterLookingFor,
  AdvancedFilterLookingForText,
  AdvancedFilterLookingForUl,
  AdvancedFilterLookingForOption,
  AdvancedFilterLookingForInput,
  AdvancedFilterLookingForLabel,
  AdvancedFilterGenderAndAge,
  AdvancedFilterGender,
  AdvancedFilterAge,
  AdvancedFilterGenderText,
  AdvancedFilterGenderContainer,
  AdvancedFilterGenderCheckBox,
  AdvancedFilterGenderCBText,
  AdvancedFilterGenderItem,
  AdvancedFilterLocation,
  AdvancedFilterLocationSearch,
  AdvancedFilterLocationSearchText,
  AdvancedFilterLocationSearchCtn,
  AdvancedFilterLocationSliderRange,
} from "./styles";
import Icon from "src/components/icon";

// PREDEFIND UI VALUES
import { icon, iconSize } from "src/values";
import Search from "src/components/search";

// CREATE A CONTEXT
const context = createContext();

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <UserName>simao, 30</UserName>
      <CityName>khouribga</CityName>
      <UserPhotosInfo>
        <PhotosCount>2</PhotosCount>
        <IconWrapper>
          <Icon className={icon.camera} size={iconSize.small} />
        </IconWrapper>
      </UserPhotosInfo>
    </UserInfoContainer>
  );
};

const UserInteraction = () => {
  return (
    <InteractionRow>
      <FlexIconWrapper>
        <Icon className={icon.message} size={iconSize.medium} />
      </FlexIconWrapper>
      <FlexIconWrapper>
        <Icon className={icon.heart} size={iconSize.medium} />
      </FlexIconWrapper>
    </InteractionRow>
  );
};

const UserCard = () => {
  return (
    <GridItem>
      <UserInfo />
      <UserInteraction />
    </GridItem>
  );
};

// ADVANCED FILTER CMP
const AdvancedFilterCmp = () => {
  const { setOpen } = useContext(context);

  return (
    <FilterContainer>
      <PeopleNearbyTextContainer>
        <PeopleNearbyText>People nearby</PeopleNearbyText>
      </PeopleNearbyTextContainer>
      <FilterIcon>
        <FilterIconContainer>
          <AdvancedFilterContainer
            onClick={() => {
              setOpen((prevState) => !prevState);
            }}
          >
            <Icon className={icon.filter} size={iconSize.small} />
          </AdvancedFilterContainer>
          <SimpleFilterContainer>
            <SimpleFilterText>All</SimpleFilterText>
            <SimpleFilterIcon>
              <Icon className={icon.arrowDown} size={iconSize.small} />
            </SimpleFilterIcon>
          </SimpleFilterContainer>
        </FilterIconContainer>
      </FilterIcon>
    </FilterContainer>
  );
};

// ADVANCED FILTER DATING CHOICE
const AdvancedFilterTypeOfDating = () => {
  return (
    <AdvancedFilterLookingForUl>
      <AdvancedFilterLookingForOption>
        <AdvancedFilterLookingForInput
          type="radio"
          value="To chat and meet new people"
        />
        <AdvancedFilterLookingForLabel>
          To chat and meet new people
        </AdvancedFilterLookingForLabel>
      </AdvancedFilterLookingForOption>
      <AdvancedFilterLookingForOption>
        <AdvancedFilterLookingForInput type="radio" value="To date" />
        <AdvancedFilterLookingForLabel>To date</AdvancedFilterLookingForLabel>
      </AdvancedFilterLookingForOption>
      <AdvancedFilterLookingForOption>
        <AdvancedFilterLookingForInput type="radio" value="To date seriously" />
        <AdvancedFilterLookingForLabel>
          To date seriously
        </AdvancedFilterLookingForLabel>
      </AdvancedFilterLookingForOption>
      <AdvancedFilterLookingForOption>
        <AdvancedFilterLookingForInput
          type="radio"
          value="To see what happens"
        />
        <AdvancedFilterLookingForLabel>
          To see what happens
        </AdvancedFilterLookingForLabel>
      </AdvancedFilterLookingForOption>
      <AdvancedFilterLookingForOption>
        <AdvancedFilterLookingForInput
          type="radio"
          value="To make a long-term commitment"
        />
        <AdvancedFilterLookingForLabel>
          To make a long-term commitment
        </AdvancedFilterLookingForLabel>
      </AdvancedFilterLookingForOption>
    </AdvancedFilterLookingForUl>
  );
};

// ADVANCED FILTER AGE AND GENDER
const AdvancedFilterAgeAndGender = () => {
  return (
    <AdvancedFilterGenderAndAge>
      <AdvancedFilterGender>
        <AdvancedFilterGenderText>Show</AdvancedFilterGenderText>
        <AdvancedFilterGenderContainer>
          <AdvancedFilterGenderItem>
            <AdvancedFilterGenderCheckBox></AdvancedFilterGenderCheckBox>
            <AdvancedFilterGenderCBText>Guys</AdvancedFilterGenderCBText>
          </AdvancedFilterGenderItem>
          <AdvancedFilterGenderItem>
            <AdvancedFilterGenderCheckBox></AdvancedFilterGenderCheckBox>
            <AdvancedFilterGenderCBText>Girls</AdvancedFilterGenderCBText>
          </AdvancedFilterGenderItem>
        </AdvancedFilterGenderContainer>
      </AdvancedFilterGender>
      <AdvancedFilterAge></AdvancedFilterAge>
    </AdvancedFilterGenderAndAge>
  );
};

// ADVANCED FILTER LOCATION
const AdvancedFilterLocationCmp = () => {
  return (
    <AdvancedFilterLocation>
      <AdvancedFilterLocationSearch>
        <AdvancedFilterLocationSearchText>
          Where
        </AdvancedFilterLocationSearchText>
        <AdvancedFilterLocationSearchCtn>
          {/* <Search></Search> */}
        </AdvancedFilterLocationSearchCtn>
      </AdvancedFilterLocationSearch>
      <AdvancedFilterLocationSliderRange></AdvancedFilterLocationSliderRange>
    </AdvancedFilterLocation>
  );
};

// ADVANCED FILTER COLLAPSE
const AdvancedFilterCollpaseCmp = () => {
  const { isOpen } = useContext(context);
  return (
    <AdvancedFilterCollpase isOpen={isOpen}>
      <AdvancedFilterLookingFor>
        <AdvancedFilterLookingForText>I'm here to</AdvancedFilterLookingForText>
        <AdvancedFilterTypeOfDating />
      </AdvancedFilterLookingFor>
      <AdvancedFilterAgeAndGender />
      <AdvancedFilterLocationCmp />
    </AdvancedFilterCollpase>
  );
};

const SearchPage = (props) => {
  // STATE
  const [isOpen, setOpen] = useState(true);

  return (
    <Wrapper>
      {props.children}
      <FlexContainer>
        <context.Provider value={{ setOpen, isOpen }}>
          <AdvancedFilterCmp />
          <AdvancedFilterCollpaseCmp />
          {/* <GirdContainer>
            {Array.from({ length: 20 }, () =>
              Math.floor(Math.random() * 10)
            ).map((item) => (
              <UserCard />
            ))}
          </GirdContainer> */}
        </context.Provider>
      </FlexContainer>
    </Wrapper>
  );
};

export default SearchPage;
