import React from "react";
import { Link } from "react-router-dom";
import {
  IconContainer,
  InfoWrapper,
  WebSiteInfos,
  LoginContainer,
  ConverstationCount,
  FbSignUpBtn,
  CustomParagraph,
  Form,
  FormContainer,
  FormWrapper,
  FormRow,
  FormCol,
  SignUpButtonContainer,
  SignUpButton,
  Input,
  Label,
  LoginText,
  WebSiteTitle,
  IconWrapper,
  LoginTextContainer,
  ButtonContainer,
  ForgotPassContainer,
} from "./styles";
import Box from "src/components/box";
import { REGISTER } from "src/constants";
import { icon, iconSize } from "src/values";
import Icon from "src/components/icon";
import Button from "src/components/button";

const Login = ({ props, children }) => (
  <LoginContainer>{children}</LoginContainer>
);

Login.infoSection = ({ props, children }) => {
  return (
    <InfoWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon className={icon.facebook} size={iconSize.small} />
        </IconContainer>
        <IconContainer>
          <Icon className={icon.instagram} size={iconSize.small} />
        </IconContainer>
        <IconContainer>
          <Icon className={icon.twiter} size={iconSize.small} />
        </IconContainer>
      </IconWrapper>
      <WebSiteInfos>
        <WebSiteTitle>MATCHA</WebSiteTitle>
        <CustomParagraph>Welcome Back!</CustomParagraph>
        <FbSignUpBtn>
          <Icon className={icon.facebook} size={iconSize.small} />
          <span>Login With Facebook</span>
          <span></span>
        </FbSignUpBtn>
      </WebSiteInfos>
      <ConverstationCount>
        <h1>1,000,000,000</h1>
        <p>Conversation on Matcha</p>
      </ConverstationCount>
    </InfoWrapper>
  );
};

Login.formSection = ({ props, children }) => {
  return (
    <FormWrapper>
      <ButtonContainer>
        <Button>
          <Link to={REGISTER}>Sign up</Link>
        </Button>
      </ButtonContainer>
      <FormContainer>
        <LoginTextContainer>
          <LoginText>OR LOG IN WITH E-MAIL</LoginText>
        </LoginTextContainer>
        <Form>
          <FormRow>
            <FormCol>
              <Label htmlFor="email">Email Or Username</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="e.g example@example.com"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="At least 8 characters"
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <SignUpButtonContainer>
              <Button>
                <SignUpButton type="submit" value="LOG IN" />
              </Button>
            </SignUpButtonContainer>
          </FormRow>
          <FormRow>
            <ForgotPassContainer>Forgot your password?</ForgotPassContainer>
          </FormRow>
        </Form>
      </FormContainer>
      <Box></Box>
    </FormWrapper>
  );
};

export default Login;
