import React, { useContext } from "react";
import { Link } from "react-router-dom";

// COMPONENT
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
import Icon from "src/components/icon";
import Button from "src/components/button";
import Input from "src/components/input";
import FbSignButton from "src/components/fbAuthBtn";

// VALUES
import {
  color,
  icon,
  iconSize,
  placeholder,
  fontSize,
  CustomSize,
} from "src/values";

// LOGIC
import { useForm, context } from "src/hooks/utils";

// FORM WRAPPER
import Formy from "src/components/formy";

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
        padding={"5px"}
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
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="firstname">First name *</Label>
      <Input
        type="text"
        id="firstname"
        name="firstname"
        value={values["firstname"]}
        placeholder={placeholder.firstname}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.firstname}
      />
    </FormCol>
  );
};

const LastNameField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="lastname">Last name *</Label>
      <Input
        type="text"
        id="lastname"
        name="lastname"
        value={values["lastname"]}
        placeholder={placeholder.lastname}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.lastname}
      />
    </FormCol>
  );
};

const UserNameField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="username">Username *</Label>
      <Input
        type="text"
        id="username"
        name="username"
        value={values["usename"]}
        placeholder={placeholder.username}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.username}
      />
    </FormCol>
  );
};

const EmailField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="email">Email *</Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={values["email"]}
        placeholder={placeholder.email}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.email}
      />
    </FormCol>
  );
};

const PasswordField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="password">Password *</Label>
      <Input
        type="password"
        id="password"
        name="password"
        value={values["password"]}
        placeholder={placeholder.password}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.password}
      />
    </FormCol>
  );
};

// CONFIRM PASSWORD
const ConfirmPasswordField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] =
    useContext(context);

  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="password">Confirm Password *</Label>
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={values["confirmPassword"]}
        placeholder={placeholder.password}
        width={"100%"}
        margin_bottom={"10px"}
        height={"45px"}
        touched={touched.confirmPassword}
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
  const SignUpSchema = {
    firstname: "",
  };

  return (
    <Formy
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
    >
      {({ values, handlChange, touched, errors, HandleFocus }) => {
        return (
          <context.Provider
            value={[values, handlChange, HandleFocus, touched, errors]}
          >
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
                  <ConfirmPasswordField />
                </FormRow>
                <FormRow>
                  <SignUpBtn />
                </FormRow>
                <FormRow>
                  <ForgotPasswordText />
                </FormRow>
              </Form>
            </FormContainer>
          </context.Provider>
        );
      }}
    </Formy>
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
