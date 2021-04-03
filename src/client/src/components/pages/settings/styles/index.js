import styled from "styled-components";
import { color, fontSize, CustomSize } from "src/values";

// WHOLE PAGE WRAPPER
export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${color.wildSand};
`;

// CONTAINER
export const Container = styled.div`
  height: 100%;
  width: 900px;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

// ********* USER BASIC INFO
// EXPANDED FALSE
export const UserBasicInfoIconContainer = styled.div`
  display: none;
`;

export const UserBasicInfo = styled.div`
  height: ${(props) => (props.isExpanded ? "320px" : "200px")};
  width: 100%;
  cursor: pointer;
  &:hover {
    ${UserBasicInfoIconContainer} {
      height: 30px;
      width: 30px;
      border: 1px solid ${color.mercury};
      background-color: ${color.whidSand};
      border-radius: 8px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const UserBasicInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const UserBasicInfoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${color.mercury};
`;

export const UserBasicInfoTitle = styled.span`
  font-size: ${fontSize.medium};
`;

export const UserBasicInfoContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserBasicInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${color.mercury};
  padding: 15px 0px;
  ::after {
    content: "";
    flex: 1;
  }
`;

export const UserBasicInfoRowKey = styled.span`
  font-size: ${CustomSize(fontSize.small, 2)};
  color: ${color.dustyGray};
  flex: 1;
`;

export const UserBasicInforRowValueContainer = styled.div`
  flex: 1;
`;

export const UserBasicInfoRowValue = styled.span`
  font-size: ${CustomSize(fontSize.small, 2)};
  color: ${color.dustyGray};
  text-align: start;
`;

// EXPNADED TRUE
export const EditUserBasicInfoContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 800px;
  max-width: 800px;
  height: 400px;
  flex-direction: column;
`;

export const EditUserBasicInfoRow = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`;

export const EditUserBasicInfoRowKey = styled.span`
  flex: 1;
  padding: 10px 0px;
  color: ${color.dustyGray};
`;

export const EditUserBasicInfoRowValue = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

export const EditUserBasicInfoBtnContainer = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ********************

// UTILS
export const Box = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
// *************

// *********** USER ACCOUNT

export const UserAccountIconContainer = styled.div`
  display: none;
`;

export const UserAccount = styled.div`
  height: ${(props) => (props.isExpanded ? "320px" : "200px")};
  width: 100%;
  cursor: pointer;
  &:hover {
    ${UserAccountIconContainer} {
      height: 30px;
      width: 30px;
      border: 1px solid ${color.mercury};
      background-color: ${color.whidSand};
      border-radius: 8px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const UserAccountContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const UserAccountTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${color.mercury};
`;

export const UserAccountTitle = styled.span`
  font-size: ${fontSize.medium};
`;

export const UserAccountContainerFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserAccountInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${color.mercury};
  padding: 15px 0px;

  ::after {
    content: "";
    flex: 1;
  }
`;

export const UserAccountRowKey = styled.span`
  flex: 1;
  font-size: ${CustomSize(fontSize.small, 2)};
  color: ${color.dustyGray};
`;

export const UserAccountRowValueContainer = styled.div`
  flex: 1;
`;

export const UserAccountRowValue = styled.span`
  font-size: ${CustomSize(fontSize.small, 2)};
  color: ${color.dustyGray};
`;

export const EditUserAccount = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 350px;
`;

export const EditUserAccounContainerFlex = styled.div`
  width: 800px;
  max-width: 800px;
`;

export const EditUserAccountInfoRow = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditUserAccountInfoRowKey = styled.div`
  flex: 1;
  padding: 10px 0px;
  color: ${color.dustyGray};
`;

export const EditUserAccountInfoValue = styled.div`
  flex: 3;
  padding: 10px 0px;
  display: flex;
`;

export const EditUserAccountBtnContainer = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// *******************
