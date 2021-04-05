import React from "react";
import { Link } from "react-router-dom";
import {
  IconContainer,
  InfoWrapper,
  WebSiteInfos,
  LoginContainer,
  ConverstationCount,
  FbSignUpBtn,
  Form,
  FormContainer,
  FormWrapper,
  FormRow,
  FormCol,
  SignUpButtonContainer,
  SignUpButton,
  // Input,
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
  FirstPara,
  SecondPara,
} from "./styles";
import Box from "src/components/box";
import Footer from "src/components/footer";
import { AppStore, PlayStore } from "src/components/appMobileStores/";
import { REGISTER } from "src/constants";
import {
  color,
  icon,
  iconSize,
  placeholder,
  fontSize,
  CustomSize,
} from "src/values";
import Icon from "src/components/icon";
import Button from "src/components/button";
import Input from "src/components/input";
import FbSignButton from "src/components/fbAuthBtn";

const Register = ({ props, children }) => (
  <LoginContainer>{children}</LoginContainer>
);

const SocialMediaIcons = () => {
  return (
    <IconWrapper>
      <IconContainer>
        <Icon
          className={icon.facebook}
          size={iconSize.small}
          color={color.electricViolet}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          className={icon.instagram}
          size={iconSize.small}
          color={color.electricViolet}
        />
      </IconContainer>
      <IconContainer>
        <Icon
          className={icon.twiter}
          size={iconSize.small}
          color={color.electricViolet}
        />
      </IconContainer>
    </IconWrapper>
  );
};

const WebSiteDesc = () => {
  return (
    <WebSiteInfos>
      <WebSiteTitle>MATCHA</WebSiteTitle>
      <FirstPara>
        Chat with new people
        <br /> around the world.
      </FirstPara>
      <SecondPara>
        Meet millions of new people from all over the world, wherever you are.
        Have a good chat, make new friends or even find the love of your life.
        Because life is all about the people you meet.
      </SecondPara>
      <FbSignButton
        iconName={icon.facebook}
        size={iconSize.small}
        height={"48px"}
        width={"100%"}
        bgColor={color.white}
        icon={icon.facebook}
        iconSize={CustomSize(fontSize.small, 10)}
        textBgColor={color.black}
        text={"Sign up With Facebook"}
        iconColor={color.electricViolet}
      ></FbSignButton>
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

Register.infoSection = ({ props, children }) => {
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
      <Button
        color={color.white}
        bgColor={color.electricViolet}
        height={"38px"}
        width={"100%"}
        fontSize={CustomSize(fontSize.small, 3)}
        border={true}
      >
        <Link to={REGISTER}>Sign Up</Link>
      </Button>
    </ButtonContainer>
  );
};

const SignUpBtn = () => {
  return (
    <SignUpButtonContainer>
      <Button
        color={color.white}
        bgColor={color.electricViolet}
        height={"40px"}
        width={"100%"}
        fontSize={CustomSize(fontSize.small, 3)}
      >
        <SignUpButton type="submit" value="LOG IN" />
      </Button>
    </SignUpButtonContainer>
  );
};

const ForgotPasswordText = () => (
  <ForgotPassContainer>Forgot your password?</ForgotPassContainer>
);

const FirstNameField = () => {
  return (
    <FormCol>
      <Label htmlFor="firstname">First name</Label>
      <Input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={placeholder.firstname}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
      />
    </FormCol>
  );
};

const LastNameField = () => {
  return (
    <FormCol>
      <Label htmlFor="lastname">Last name</Label>
      <Input
        type="text"
        id="lastname"
        name="lastname"
        placeholder={placeholder.lastname}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
      />
    </FormCol>
  );
};

const UserNameField = () => {
  return (
    <FormCol>
      <Label htmlFor="username">User name</Label>
      <Input
        type="text"
        id="username"
        name="username"
        placeholder={placeholder.username}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
      />
    </FormCol>
  );
};

const EmailField = () => {
  return (
    <FormCol>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder={placeholder.email}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
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
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
      />
    </FormCol>
  );
};

const LoginWithEmailText = () => {
  return (
    <LoginTextContainer>
      <LoginText>OR SIGN IN WITH E-MAIL</LoginText>
    </LoginTextContainer>
  );
};

const LoginForm = () => {
  return (
    <FormContainer>
      <LoginWithEmailText />
      <Form>
        <FormRow>
          <FirstNameField />
          <LastNameField />
        </FormRow>
        <FormRow>
          <UserNameField />
        </FormRow>
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

Register.formSection = ({ props, children }) => {
  return (
    <FormWrapper>
      <SignInBtn />
      <LoginForm />
      <MobileStores />
    </FormWrapper>
  );
};

export default Register;
