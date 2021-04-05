import styled from "styled-components";
import { color, device } from "src/values";

// WHOLE PAGE CONTAINER
export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (${device.tablet}) {
  }
  @media only screen and (${device.desktop}) {
    flex-direction: row;
  }
`;
// ********************************************

// WEB SITE INFOS
export const InfoWrapper = styled.div`
  /* MOBILE SCREEN */
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    -75deg,
    #fc4a1a 0%,
    ${color.electricViolet} 100%
  );

  color: ${color.white};
  ::after {
    content: "*_-";
    visibility: hidden;
    flex: 1;
  }

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    flex: 1;
    ::after {
      content: "*_-";
      visibility: hidden;
      flex: 1;
    }
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    flex: 1.5;
    ::after {
      content: none;
      flex: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  /* MOBILE SCREEN */
  padding: 5px;
  align-self: flex-start;
  display: flex;
  flex: 1;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    padding: 15px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    padding: 20px;
  }
`;

export const IconContainer = styled.div`
  /* MOBILE SCREEN */
  height: 22px;
  width: 22px;
  padding: 2px;
  margin: 2px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
  i {
    text-align: center;
  }
  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    height: 35px;
    width: 35px;
    padding: 1.5px;
    i {
      font-size: 22px;
    }
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    height: 40px;
    width: 40px;
    padding: 2px;
    i {
      font-size: 26px;
    }
  }
`;

export const WebSiteInfos = styled.div`
  /* MOBILE SCREEN */
  flex: 1;
  max-width: 200px;
  align-self: center;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    max-width: 450px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    max-width: 500px;
  }
`;

export const WebSiteTitle = styled.h1`
  /* MOBILE SCREEN */
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.6px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 4.5rem;
    font-weight: bold;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 6rem;
    font-weight: bold;
  }
`;

export const FirstPara = styled.p`
  font-size: 1rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: 0.6px;
  /* MOBILE SCREEN */

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 1.5rem;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
`;

export const SecondPara = styled.p`
  /* MOBILE SCREEN */
  font-size: 0.6rem;
  line-height: 1;
  margin-bottom: 1rem;
  letter-spacing: 0.6px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 0.8rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
`;

export const FbOauthText = styled.span`
  /* MOBILE SCREEN */
  flex: 1;
  font-size: 0.6rem;
  align-self: center;
  text-align: center;
  letter-spacing: 0.6px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 0.8rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 1.3rem;
  }
`;

export const CustomParagraph = styled.p`
  /* MOBILE SCREEN */
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 1rem;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 1.5rem;
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

export const FbSignUpBtn = styled.div`
  /* MOBILE SCREEN */
  display: flex;
  padding: 4px;
  max-width: 200px;
  color: ${color.white};
  background-color: ${color.indigo};
  border-radius: 50px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    padding: 8px;
    max-width: 350px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    padding: 8px;
    max-width: 350px;
  }
`;

export const FbSignUpBtnIconContainer = styled.div``;

export const FooterContainer = styled.div`
  /* MOBILE SCREEN */
  display: none;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    display: flex;
    flex: 1;
    align-self: flex-start;
    flex-direction: column-reverse;
  }
`;

export const ConverstationCount = styled.div`
  /* MOBILE SCREEN */
  display: none;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    display: block;
    align-self: flex-start;
    height: 80px;
    padding: 20px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    display: block;
    align-self: flex-start;
    height: 80px;
    padding: 20px;
  }
`;
// ************************************************

// FORM
export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
  }
  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
  }
`;

export const ButtonContainer = styled.div`
  /* MOBILE SCREEN */
  display: none;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    /* display: block;
    flex: 1;
    max-width: 250px;
    align-self: flex-end; */
  }
  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    display: block;
    flex: 1;
    max-width: 250px;
    align-self: flex-end;
    padding: 20px;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;
  line-height: 0.1em;
  margin: 10px 0px 100px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    flex: 1;
    max-width: 500px;
    text-align: center;
    line-height: 0.1em;
    margin: 10px 0px 100px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
  }
  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    flex: 1;
    max-width: 500px;
    text-align: center;
    line-height: 0.1em;
    margin: 10px 0px 100px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }
`;

export const LoginTextContainer = styled.h4`
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.1em;
  margin: 20px 25px;
`;

export const LoginText = styled.span`
  background: #f9f9f9;
  padding: 0 10px;
  color: ${color.paleSky};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  padding-left: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${color.tundora};
  text-align: start;
  padding: 15px 0px;
`;

export const Input = styled.input`
  padding: 13px 5px;
  border-radius: 5px;
  border: solid 0.5px #cccccc;
  outline-color: ${color.curiousBlue};
  margin: 0px 25px;
`;

export const SignUpButtonContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0px 10px;
`;

export const SignUpButton = styled.input`
  border: none;
  outline: none;
  color: ${color.white};
  background-color: ${color.electricViolet};
`;

export const ForgotPassContainer = styled.div`
  align-self: center;
  color: ${color.indigo};
  text-decoration: underline;
`;

export const StoreWrapper = styled.div`
  /* MOBILE SCREEN */
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    justify-content: center;
    margin-right: 0px;
  }
  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    justify-content: flex-end;
    margin-right: 0px;
  }
`;

export const StoreContainer = styled.div`
  height: 100px;
  width: 400px;
  max-width: 400px;
  display: flex;
`;

//  *************************************************
