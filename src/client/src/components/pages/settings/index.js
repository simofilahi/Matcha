import React, { useState } from "react";

import {
  Wrapper,
  Container,
  UserAccount,
  UserBasicInfo,
  UserBasicInfoContainer,
  UserBasicInfoTitle,
  UserAccountContainer,
  UserAccountTitle,
  UserBasicInfoContainerFlex,
  UserBasicInfoRow,
  UserBasicInfoRowKey,
  UserBasicInfoRowValue,
  UserAccountContainerFlex,
  UserAccountInfoRow,
  UserAccountRowKey,
  UserAccountRowValue,
  UserAccountRowValueContainer,
  UserBasicInforRowValueContainer,
  Box,
  UserBasicInfoTitleContainer,
  UserBasicInfoIconContainer,
  UserAccountTitleContainer,
  UserAccountIconContainer,
  EditUserBasicInfoContainer,
  EditUserBasicInfoRow,
  EditUserBasicInfoRowKey,
  EditUserBasicInfoRowValue,
} from "./styles";
import Icon from "src/components/icon";
import { icon } from "src/values";
import Input from "src/components/input";
import BirthDay from "src/components/birthday";

// BASIC USER INFORMATION COMPONENT
const BasicInfoCmp = () => {
  // STATE
  const [isExpanded, setExpand] = useState(false);

  // UPDATE EXPANDED VALUE
  const updateExpanded = () => {
    setExpand((prevState) => !prevState);
  };

  // VIEW
  return (
    <>
      {isExpanded ? (
        <EditUserBasicInfoContainer>
          <EditUserBasicInfoRow>
            <EditUserBasicInfoRowKey>Name</EditUserBasicInfoRowKey>
            <EditUserBasicInfoRowValue>
              <Input height={"40px"} width={"300px"} />
            </EditUserBasicInfoRowValue>
          </EditUserBasicInfoRow>
          <EditUserBasicInfoRow>
            <EditUserBasicInfoRowKey>Date of birth</EditUserBasicInfoRowKey>
            <EditUserBasicInfoRowValue>
              <BirthDay height={"80px"} width={"300px"} />
            </EditUserBasicInfoRowValue>
          </EditUserBasicInfoRow>
        </EditUserBasicInfoContainer>
      ) : (
        <UserBasicInfo onClick={updateExpanded}>
          <UserBasicInfoContainer>
            <UserBasicInfoTitleContainer>
              <UserBasicInfoTitle>Your basic info</UserBasicInfoTitle>
              <UserBasicInfoIconContainer>
                <Icon className={icon.pen} />
              </UserBasicInfoIconContainer>
            </UserBasicInfoTitleContainer>
            <UserBasicInfoContainerFlex>
              <UserBasicInfoRow>
                <UserBasicInfoRowKey>Name</UserBasicInfoRowKey>
                <UserBasicInforRowValueContainer>
                  <UserBasicInfoRowValue>Mohamed</UserBasicInfoRowValue>
                </UserBasicInforRowValueContainer>
              </UserBasicInfoRow>
              <UserBasicInfoRow>
                <UserBasicInfoRowKey>Date of birth</UserBasicInfoRowKey>
                <UserBasicInforRowValueContainer>
                  <UserBasicInfoRowValue>
                    october 17, 1990
                  </UserBasicInfoRowValue>
                </UserBasicInforRowValueContainer>
              </UserBasicInfoRow>
              <UserBasicInfoRow>
                <UserBasicInfoRowKey>Gender</UserBasicInfoRowKey>
                <UserBasicInforRowValueContainer>
                  <UserBasicInfoRowValue>Male</UserBasicInfoRowValue>
                </UserBasicInforRowValueContainer>
              </UserBasicInfoRow>
            </UserBasicInfoContainerFlex>
          </UserBasicInfoContainer>
        </UserBasicInfo>
      )}
    </>
  );
};

// USER ACCOUNT SETTING COMPONENT
const UserAccountCmp = () => {
  const [isExpanded, setExpand] = useState(false);

  // UPDATE EXPANDED VALUE
  const updateExpanded = () => {
    setExpand((prevState) => !prevState);
  };

  // VIEW
  return (
    <UserAccount onClick={updateExpanded}>
      <UserAccountContainer>
        <UserAccountTitleContainer>
          <UserAccountTitle>Your account</UserAccountTitle>
          <UserAccountIconContainer>
            <Icon className={icon.pen} />
          </UserAccountIconContainer>
        </UserAccountTitleContainer>
        <UserAccountContainerFlex>
          <UserAccountInfoRow>
            <UserAccountRowKey>Email</UserAccountRowKey>
            <UserAccountRowValueContainer>
              <UserAccountRowValue>person@gmail.com</UserAccountRowValue>
            </UserAccountRowValueContainer>
          </UserAccountInfoRow>
          <UserAccountInfoRow>
            <UserAccountRowKey>Password</UserAccountRowKey>
            <UserAccountRowValueContainer>
              <UserAccountRowValue>***********</UserAccountRowValue>
            </UserAccountRowValueContainer>
          </UserAccountInfoRow>
          <UserAccountInfoRow>
            <UserAccountRowKey>Profile verification</UserAccountRowKey>
            <UserAccountRowValueContainer>
              <UserAccountRowValue>Verified</UserAccountRowValue>
            </UserAccountRowValueContainer>
          </UserAccountInfoRow>
        </UserAccountContainerFlex>
      </UserAccountContainer>
    </UserAccount>
  );
};

// SETTINGS PAGE COMPONENT
const SettingsPage = () => {
  return (
    <Wrapper>
      <Container>
        <BasicInfoCmp />
        <Box height={"40px"} />
        <UserAccountCmp />
      </Container>
    </Wrapper>
  );
};

export default SettingsPage;
