import styled from "styled-components";
import image from "./user.jpeg";
import { color, fontSize, CustomSize } from "src/values";

// PAGE WRAPPER
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 100vh;
`;
// ***************

// FLEX CONTAINER
export const FlexContainer = styled.div`
  width: 1020px;
  max-width: 1020px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;
// ***********

export const FilterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

export const PeopleNearbyTextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const PeopleNearbyText = styled.span`
  padding: 10px;
  font-size: ${fontSize.medium};
`;

export const FilterIcon = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

export const FilterIconContainer = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ADVANCED FILTTER
export const AdvancedFilterContainer = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 8px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  border: 1px solid ${color.wildSand};
`;

export const AdvancedFilterCollpase = styled.div`
  height: 220px;
  width: 100%;
  background-color: ${color.alabaster};
  display: none;
  ${({ isOpen }) =>
    isOpen &&
    `
    display: flex;
  `}
`;

export const AdvancedFilterItem = styled.div`
  flex: 1;
  background-color: red;
  margin: 5px;
`;

export const AdvancedFilterLookingFor = styled.div`
  flex: 1;
  margin: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid ${color.Alto};
`;

export const AdvancedFilterLookingForText = styled.span`
  padding: 10px;
`;

export const AdvancedFilterLookingForUl = styled.ul`
  padding-left: 10px;
`;

export const AdvancedFilterLookingForOption = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  list-style: none;
`;

export const AdvancedFilterLookingForInput = styled.input`
  color: ${color.black};
`;

export const AdvancedFilterLookingForLabel = styled.label`
  color: ${color.Boulder};
  padding-left: 5px;
  font-size: ${CustomSize(fontSize.small, 2)};
`;

// *********

// SELECT GENDER AND AGE
export const AdvancedFilterGenderAndAge = styled.div`
  flex: 1;
  margin: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid ${color.Alto};
`;

export const AdvancedFilterGender = styled.div`
  flex: 1;
`;

export const AdvancedFilterGenderText = styled.span`
  padding: 10px;
`;

export const AdvancedFilterGenderContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const AdvancedFilterGenderItem = styled.div`
  /* background-color: orange; */
  flex: 1;
  display: flex;
  align-items: center;
`;

export const AdvancedFilterGenderCheckBox = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 8px;
  border: 1px solid ${color.wildSand};
  background-color: ${color.white};
`;

export const AdvancedFilterGenderCBText = styled.div`
  padding: 10px;
  color: ${color.Boulder};
`;

export const AdvancedFilterAge = styled.div`
  flex: 1;
  background-color: blue;
`;
// ******

// LOCATION
export const AdvancedFilterLocation = styled.div`
  flex: 1;
  background-color: red;
  flex-direction: column;
  display: flex;
`;

export const AdvancedFilterLocationSearch = styled.div`
  flex: 1;
  background-color: yellow;
`;

export const AdvancedFilterLocationSearchText = styled.span`
  padding: 10px;
`;

export const AdvancedFilterLocationSearchCtn = styled.div``;
export const AdvancedFilterLocationSliderRange = styled.div`
  flex: 1;
  background-color: green;
`;

// *******
export const SimpleFilterContainer = styled.div`
  height: 45px;
  width: 60px;
  background-color: blue;
  border-radius: 8px;
  margin: 5px;
  padding: 10px;
  background-color: ${color.white};
  border: 1px solid ${color.wildSand};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SimpleFilterText = styled.span``;

export const SimpleFilterIcon = styled.div``;

export const GirdContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px 10px;
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
  grid-template-columns: auto auto;
  padding-bottom: 5px;
`;

export const UserName = styled.div`
  grid-column: 1/3;
  padding-left: 10px;
  color: ${color.white};
`;

export const InteractionRow = styled.div`
  display: none;
`;

export const FlexIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const GridItem = styled.div`
  background-color: white;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* transition: width 1s, height 1s;
  &:hover {
    height: 260px;
    width: 260px;
  } */
  &:hover ${UserInfoContainer} {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover ${InteractionRow} {
    width: 100%;
    height: 50px;
    border: 1px ${color.mercury} solid;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${color.white};
    display: flex;
    ${FlexIconWrapper}:nth-child(2) {
      border-left: 1px ${color.mercury} solid;
    }
  }
`;

export const UserPhotosInfo = styled.div`
  display: flex;
  color: ${color.white};
  justify-content: flex-end;
  align-items: center;
`;

export const IconWrapper = styled.div`
  padding-right: 10px;
  padding-left: 5px;
`;

export const PhotosCount = styled.div`
  color: ${color.white};
  font-size: ${fontSize.small};
  text-align: center;
`;

export const CityName = styled.div`
  padding-left: 10px;
  color: ${color.white};
`;
