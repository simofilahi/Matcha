import styled from "styled-components";
import { color, device, screenSize } from "src/values";

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
  justify-content: space-between;
  background-image: linear-gradient(-75deg, #f7b733 0%, #fc4a1a 100%);
  color: ${color.white};
  ::after {
    content: "*_-";
    visibility: hidden;
    flex: 1;
  }

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    flex: 1.5;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(-75deg, #f7b733 0%, #fc4a1a 100%);
    color: ${color.white};
    ::after {
      content: none;
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
  padding: 1.5px;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    padding: 2px;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    padding: 3px;
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
  font-size: 2rem;
  font-weight: bold;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    font-size: 4rem;
    font-weight: bold;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 6rem;
    font-weight: bold;
  }
`;

export const CustomParagraph = styled.p`
  /* MOBILE SCREEN */
  font-size: 0.5rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1rem;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 2rem;
  }
`;

export const FbSignUpBtn = styled.a`
  /* MOBILE SCREEN */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  max-width: 200px;
  text-decoration: none;
  color: ${color.white};
  background-color: ${color.indigo};
  border-radius: 50px;
  font-size: 0.5rem;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    padding: 8px;
    max-width: 350px;
    color: ${color.white};
    font-size: 1.2rem;
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    padding: 8px;
    max-width: 350px;
    color: ${color.white};
    font-size: 1.2rem;
  }
`;

export const ConverstationCount = styled.div`
  /* MOBILE SCREEN */
  display: none;

  /* TABLET SCREEN */
  @media only screen and (${device.tablet}) {
    /* display: block;
    align-self: flex-start;
    padding: 20px; */
  }

  /* DESKTOP SCREEN */
  @media only screen and (${device.desktop}) {
    display: block;
    align-self: flex-start;
    padding: 20px;
    flex: 1;
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
`;

export const FormRow = styled.div`
  display: flex;
  margin: 2px 0px;
  width: 100%;
  justify-content: center;
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${color.tundora};
  text-align: start;
  margin: 25px 0px 15px 25px;
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
`;

export const SignUpButton = styled.input`
  border: none;
  outline: none;
  color: ${color.white};
  background-color: ${color.crusta};
`;

export const ForgotPassContainer = styled.div`
  align-self: center;
  color: ${color.paleSky};
  text-decoration: underline;
`;
//  *************************************************