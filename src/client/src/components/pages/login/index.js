import React, { useContext } from "react";

// ROUTER
import { Link } from "react-router-dom";

// COMPONENT
import {
  IconContainer,
  InfoWrapper,
  WebSiteInfos,
  LoginContainer,
  ConverstationCount,
  CustomParagraph,
  Form,
  FormContainer,
  FormWrapper,
  FormRow,
  FormCol,
  SignUpButtonContainer,
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
import Footer from "src/components/footer";
import { AppStore, PlayStore } from "src/components/appMobileStores/";
import Icon from "src/components/icon";
import Button from "src/components/button";
import Input from "src/components/input";
import FbSignButton from "src/components/fbAuthBtn";

// CONSTANTS VALUES
import { REGISTER } from "src/constants";

// UI PREDEFINED VALUES;
import {
  icon,
  iconSize,
  placeholder,
  color,
  fontSize,
  CustomSize,
  rgbaColor,
} from "src/values";

// LOGIC
import { context } from "src/hooks/utils";

// FORM WRAPPER
import Formy from "src/components/formy";

// FIELDS VALIDTOR
import Validator from "src/utils/validator";

// ENTRY POINT COMPONENT
const Login = ({ props, children }) => (
  <LoginContainer>{children}</LoginContainer>
);

// SOCIAL MEDIA ICONS CMP
const SocialMediaIcons = () => {
  // UI
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

// WEBSITE DESCRIPTION
const WebSiteDesc = () => {
  // UI
  return (
    <WebSiteInfos>
      <WebSiteTitle>MATCHA</WebSiteTitle>
      <CustomParagraph>Welcome Back!</CustomParagraph>
      <FbSignButton
        iconName={icon.facebook}
        size={iconSize.small}
        height={"48px"}
        width={"100%"}
        bgColor={color.white}
        icon={icon.facebook}
        iconSize={CustomSize(fontSize.medium, 4)}
        textBgColor={color.black}
        text={"Login In With Facebook"}
        iconColor={color.electricViolet}
      ></FbSignButton>
    </WebSiteInfos>
  );
};

// BOTTOM CONVERSATION NUMBER
const ConversationNumber = () => {
  return (
    <ConverstationCount>
      <h1>1,000,000,000</h1>
      <p>Conversation on Matcha</p>
    </ConverstationCount>
  );
};

// FOOTER WRAPPER
const FooterWrapper = () => {
  return (
    <FooterContainer>
      <Footer />
      <ConversationNumber />
    </FooterContainer>
  );
};

// INFO SECTION
Login.infoSection = ({ props, children }) => {
  return (
    <InfoWrapper>
      <SocialMediaIcons />
      <WebSiteDesc />
      <FooterWrapper />
    </InfoWrapper>
  );
};

// SIGN IN BTN
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

// SIGN UP BTN
const SignUpBtn = () => {
  return (
    <SignUpButtonContainer>
      <Button
        color={color.white}
        bgColor={color.electricViolet}
        height={"38px"}
        width={"100%"}
        fontSize={CustomSize(fontSize.small, 3)}
      >
        <Link to={REGISTER}>Sign up</Link>
      </Button>
    </SignUpButtonContainer>
  );
};

// FORGOT PASSWORD
const ForgotPasswordText = () => (
  <ForgotPassContainer>Forgot your password?</ForgotPassContainer>
);

// EMAIL OR USERNAME FIELD
const EmailOrUserNameField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] = useContext(
    context
  );

  // UI
  return (
    <FormCol onChange={(e) => handlChange(e)} onFocus={(e) => HandleFocus(e)}>
      <Label htmlFor="email">Email Or Username</Label>
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
        error={errors.email}
      />
    </FormCol>
  );
};

// PASSWORD FIELD
const PasswordField = () => {
  // CONTEXT
  const [values, handlChange, HandleFocus, touched, errors] = useContext(
    context
  );

  // UI
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
        error={errors.password}
      />
    </FormCol>
  );
};

// LOGIN WITH EMAIL TEXT
const LoginWithEmailText = () => {
  return (
    <LoginTextContainer>
      <LoginText>OR LOG IN WITH E-MAIL</LoginText>
    </LoginTextContainer>
  );
};

// LOGIN FORM
const LoginForm = () => {
  // VALIDATION FORM SCHEMA
  const schema = Validator.object({
    email: Validator.string().min(1).max(20).result(),
    password: Validator.string().min(8).max(20).result(),
  });

  // UI
  return (
    <Formy
      initialValues={{
        username: "",
        password: "",
      }}
      schemaValidation={(data) => schema.validate(data)}
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
                  <EmailOrUserNameField />
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
          </context.Provider>
        );
      }}
    </Formy>
  );
};

// MOBILE STORES ICONS
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

// FROM SECTION
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
