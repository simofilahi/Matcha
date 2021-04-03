import React, { useState } from "react";

// COMPONENTS
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
  EditUserAccount,
  EditUserAccounContainerFlex,
  EditUserAccountInfoRow,
  EditUserAccountInfoRowKey,
  EditUserAccountInfoValue,
  EditUserAccountBtnContainer,
  EditUserBasicInfoBtnContainer,
} from "./styles";
import Icon from "src/components/icon";
import { color, CustomSize, icon, fontSize } from "src/values";
import Input from "src/components/input";
import BirthDay from "src/components/birthday";
import Button from "src/components/button";
import Gender from "src/components/gendar";
import Text from "src/components/text";

// DISPLAY BASIC INFOS
const DisplayBasicInfoCmp = () => {
  return (
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
          <UserBasicInfoRowValue>october 17, 1990</UserBasicInfoRowValue>
        </UserBasicInforRowValueContainer>
      </UserBasicInfoRow>
      <UserBasicInfoRow>
        <UserBasicInfoRowKey>Gender</UserBasicInfoRowKey>
        <UserBasicInforRowValueContainer>
          <UserBasicInfoRowValue>Male</UserBasicInfoRowValue>
        </UserBasicInforRowValueContainer>
      </UserBasicInfoRow>
    </UserBasicInfoContainerFlex>
  );
};

// EDIT BASIC INFO INPUT
const EditBasicInfoNameInputCmp = (props) => {
  return (
    <EditUserBasicInfoRow>
      <EditUserBasicInfoRowKey>Name</EditUserBasicInfoRowKey>
      <EditUserBasicInfoRowValue>
        <Input height={"38px"} width={"350px"} />
      </EditUserBasicInfoRowValue>
    </EditUserBasicInfoRow>
  );
};

// EDIT BASIC INFO BIRTHDAY
const EditBasicInfoBirthDayCmp = (props) => {
  return (
    <EditUserBasicInfoRow>
      <EditUserBasicInfoRowKey>Date of birth</EditUserBasicInfoRowKey>
      <EditUserBasicInfoRowValue>
        <BirthDay height={"38px"} width={"360px"} />
      </EditUserBasicInfoRowValue>
    </EditUserBasicInfoRow>
  );
};

// EDIT BASIC INFO GENDER
const EditBasicInfoGenderCmp = (props) => {
  return (
    <EditUserBasicInfoRow>
      <EditUserBasicInfoRowKey>Gender</EditUserBasicInfoRowKey>
      <EditUserBasicInfoRowValue>
        <Gender isHor={true} height={"38px"} width={"360px"}></Gender>
      </EditUserBasicInfoRowValue>
    </EditUserBasicInfoRow>
  );
};

// EDIT BASIC INFO CANCEL BUTTON
const EditBasicInfoCancelBtnCmp = (props) => {
  // DESTRUCT PROPERTIES
  const { updateExpanded } = props;

  return (
    <EditUserBasicInfoBtnContainer>
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
    </EditUserBasicInfoBtnContainer>
  );
};

// EDIT BASIC INFO SAVE BUTTON
const EditBasicInfoSaveBtnCmp = (props) => {
  return (
    <EditUserBasicInfoBtnContainer>
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
    </EditUserBasicInfoBtnContainer>
  );
};

// EDIT BASIC INFOS
const EditBasicInfoCmp = (props) => {
  // DESTRUCT PROPERTIES
  const { updateExpanded } = props;

  return (
    <EditUserBasicInfoContainer>
      <EditBasicInfoNameInputCmp />
      <EditBasicInfoBirthDayCmp />
      <EditBasicInfoGenderCmp />
      <EditUserBasicInfoRow>
        <EditUserBasicInfoRowKey />
        <EditUserBasicInfoRowValue>
          <EditBasicInfoSaveBtnCmp />
          <EditBasicInfoCancelBtnCmp updateExpanded={updateExpanded} />
        </EditUserBasicInfoRowValue>
      </EditUserBasicInfoRow>
    </EditUserBasicInfoContainer>
  );
};

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
    <UserBasicInfo isExpanded={isExpanded}>
      <UserBasicInfoContainer>
        <UserBasicInfoTitleContainer>
          <UserBasicInfoTitle>Your basic info</UserBasicInfoTitle>
          <UserBasicInfoIconContainer onClick={updateExpanded}>
            <Icon className={icon.pen} />
          </UserBasicInfoIconContainer>
        </UserBasicInfoTitleContainer>
        {isExpanded ? (
          <EditBasicInfoCmp updateExpanded={updateExpanded} />
        ) : (
          <DisplayBasicInfoCmp />
        )}
      </UserBasicInfoContainer>
    </UserBasicInfo>
  );
};

// EDIT ACCOUNT EMAIL INPUT
const EditAccountEmailInputCmp = () => {
  return (
    <EditUserAccountInfoRow>
      <EditUserAccountInfoRowKey>Email</EditUserAccountInfoRowKey>
      <EditUserAccountInfoValue>
        <Input height={"38px"} width={"350px"} />
      </EditUserAccountInfoValue>
    </EditUserAccountInfoRow>
  );
};

// EDIT ACCOUNT PASSWORD INPUT
const EditAccountPasswordInputCmp = () => {
  return (
    <EditUserAccountInfoRow>
      <EditUserAccountInfoRowKey>Password</EditUserAccountInfoRowKey>
      <EditUserAccountInfoValue>
        <Input height={"38px"} width={"350px"} />
      </EditUserAccountInfoValue>
    </EditUserAccountInfoRow>
  );
};

// EDIT ACCOUNT NEW PASSWORD INPUT
const EditAccountNewPasswordInputCmp = () => {
  return (
    <EditUserAccountInfoRow>
      <EditUserAccountInfoRowKey>New Password</EditUserAccountInfoRowKey>
      <EditUserAccountInfoValue>
        <Input height={"38px"} width={"350px"} />
      </EditUserAccountInfoValue>
    </EditUserAccountInfoRow>
  );
};

// EDIT ACCOUNT VERIFICATION
const EditAccountNewVerificationCmp = () => {
  return (
    <EditUserAccountInfoRow>
      <EditUserAccountInfoRowKey>
        Profile verification
      </EditUserAccountInfoRowKey>
      <EditUserAccountInfoValue>
        <Text
          color={color.mountainMeadow}
          fontSize={CustomSize(fontSize.small, 2)}
        >
          Verified
        </Text>
      </EditUserAccountInfoValue>
    </EditUserAccountInfoRow>
  );
};

// EDIT BASIC INFO CANCEL BUTTON
const EditAccountCancelBtnCmp = (props) => {
  // DESTRUCT PROPERTIES
  const { updateExpanded } = props;

  return (
    <EditUserAccountBtnContainer>
      <Button
        color={color.black}
        bgColor={color.white}
        height={"36px"}
        width={"200px"}
        fontSize={CustomSize(fontSize.small, 3)}
        border={true}
        onClick={updateExpanded}
      >
        Cancel
      </Button>
    </EditUserAccountBtnContainer>
  );
};

// EDIT BASIC INFO SAVE BUTTON
const EditAccountSaveBtnCmp = (props) => {
  return (
    <EditUserAccountBtnContainer>
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
    </EditUserAccountBtnContainer>
  );
};

// EDIT ACCOUNT
const EditAccountCmp = (props) => {
  // DESTRUCT PROPERTIES
  const { updateExpanded } = props;

  return (
    <EditUserAccount>
      <EditUserAccounContainerFlex>
        <EditAccountEmailInputCmp />
        <EditAccountPasswordInputCmp />
        <EditAccountNewPasswordInputCmp />
        <EditAccountNewVerificationCmp />
        <Box height={"20px"} />
        <EditUserAccountInfoRow>
          <EditUserAccountInfoRowKey></EditUserAccountInfoRowKey>
          <EditUserAccountInfoValue>
            <EditAccountSaveBtnCmp />
            <EditAccountCancelBtnCmp updateExpanded={updateExpanded} />
          </EditUserAccountInfoValue>
        </EditUserAccountInfoRow>
      </EditUserAccounContainerFlex>
    </EditUserAccount>
  );
};

// DISPLAY USER ACCOUNT INFOS
const DisplayUserAccountCmp = () => {
  return (
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
    <UserAccount isExpanded={isExpanded}>
      <UserAccountContainer>
        <UserAccountTitleContainer>
          <UserAccountTitle>Your account</UserAccountTitle>
          <UserAccountIconContainer onClick={updateExpanded}>
            <Icon className={icon.pen} />
          </UserAccountIconContainer>
        </UserAccountTitleContainer>
        {isExpanded ? (
          <EditAccountCmp updateExpanded={updateExpanded} />
        ) : (
          <DisplayUserAccountCmp />
        )}
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
        <Box height={"20px"} />
        <UserAccountCmp />
      </Container>
    </Wrapper>
  );
};

export default SettingsPage;
