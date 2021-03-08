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
  StoreContainer,
  StoreWrapper,
  FooterContainer,
} from "./styles";

import Box from "src/components/box";
import Footer from "src/components/footer";
import { AppStore, PlayStore } from "src/components/appMobileStores/";
import { REGISTER } from "src/constants";
import { icon, iconSize, placeholder } from "src/values";
import Icon from "src/components/icon";
import Button from "src/components/button";

const Login = ({ props, children }) => (
  <LoginContainer>{children}</LoginContainer>
);

const SocialMediaIcons = () => {
  return (
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
  );
};

const WebSiteDesc = () => {
  return (
    <WebSiteInfos>
      <WebSiteTitle>MATCHA</WebSiteTitle>
      <CustomParagraph>Welcome Back!</CustomParagraph>
      <FbSignUpBtn>
        <Icon className={icon.facebook} size={iconSize.small} />
        <span>Login With Facebook</span>
        <span></span>
      </FbSignUpBtn>
    </WebSiteInfos>
  );
};

const ConversationNumber = () => {
  return (
    <ConverstationCount>
      <h1>1,000,000,000</h1>
      <p>Conversation on Matcha</p>
    </ConverstationCount>
  );
};

const FooterWrapper = () => {
  return (
    <FooterContainer>
      <Footer />
      <ConversationNumber />
    </FooterContainer>
  );
};

Login.infoSection = ({ props, children }) => {
  return (
    <InfoWrapper>
      <SocialMediaIcons />
      <WebSiteDesc />
      <FooterWrapper />
    </InfoWrapper>
  );
};

const SignInBtn = () => {
  return (
    <ButtonContainer>
      <Button>
        <Link to={REGISTER}>Sign up</Link>
      </Button>
    </ButtonContainer>
  );
};

const SignUpBtn = () => {
  return (
    <SignUpButtonContainer>
      <Button>
        <SignUpButton type="submit" value="LOG IN" />
      </Button>
    </SignUpButtonContainer>
  );
};

const ForgotPasswordText = () => (
  <ForgotPassContainer>Forgot your password?</ForgotPassContainer>
);

const EmailField = () => {
  return (
    <FormCol>
      <Label htmlFor="email">Email Or Username</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder={placeholder.email}
      />
    </FormCol>
  );
};

const PasswordField = () => {
  return (
    <FormCol>
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        placeholder={placeholder.password}
      />
    </FormCol>
  );
};

const LoginWithEmailText = () => {
  return (
    <LoginTextContainer>
      <LoginText>OR LOG IN WITH E-MAIL</LoginText>
    </LoginTextContainer>
  );
};

const LoginForm = () => {
  return (
    <FormContainer>
      <LoginWithEmailText />
      <Form>
        <FormRow>
          <EmailField />
        </FormRow>
        <FormRow>
          <PasswordField />
        </FormRow>
        <FormRow>
          <SignUpBtn />
        </FormRow>
        <FormRow>
          <ForgotPasswordText />
        </FormRow>
      </Form>
    </FormContainer>
  );
};

const MobileStores = () => {
  return (
    <StoreWrapper>
      <StoreContainer>
        <AppStore />
        <PlayStore />
      </StoreContainer>
    </StoreWrapper>
  );
};

Login.formSection = ({ props, children }) => {
  return (
    <FormWrapper>
      <SignInBtn />
      <LoginForm />
      <MobileStores />
    </FormWrapper>
  );
};

export default Login;
