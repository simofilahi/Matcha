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
  FirstPara,
  SecondPara,
  FbSignUpBtnIconContainer,
  FbOauthText,
} from "./styles";

import Box from "src/components/box";
import Footer from "src/components/footer";
import { AppStore, PlayStore } from "src/components/appMobileStores/";
import { REGISTER } from "src/constants";
import { color, icon, iconSize, placeholder } from "src/values";
import Icon from "src/components/icon";
import Button from "src/components/button";

const Register = ({ props, children }) => (
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
      <FirstPara>
        Chat with new people
        <br /> around the world.
      </FirstPara>
      <SecondPara>
        Meet millions of new people from all over the world, wherever you are.
        Have a good chat, make new friends or even find the love of your life.
        Because life is all about the people you meet.
      </SecondPara>
      <FbSignUpBtn>
        <Icon className={icon.facebook} size={iconSize.small} />
        <FbOauthText>Sign up</FbOauthText>
        <Box />
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

const FirstNameField = () => {
  return (
    <FormCol>
      <Label htmlFor="firstname">First name</Label>
      <Input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={placeholder.firstname}
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

// import React from "react";
// import styles from "./styles/style.module.css";
// import { Link } from "react-router-dom";
// import { LOGIN } from "src/constants/";
// import {
//   Container,
//   Wrapper,
//   FirstItem,
//   SecondItem,
//   ThirdItem,
//   SectionFormContainer,
//   LoginFormContainer,
//   FormContainer,
//   FormCol,
//   FormRow,
//   FormBirthRow,
//   FormBirthCol,
//   FormColBtn,
//   HeaderFour,
//   Text,
//   Label,
//   Input,
//   Select,
//   LoginBtn,
//   ButtonContainer,
// } from "./styles";
// import Button from "src/components/button";

// const Register = ({ props, children }) => {
//   return <Wrapper>{children}</Wrapper>;
// };

// Register.infoSection = ({ props, children }) => {
//   return (
//     <Container>
//       <FirstItem>
//         <FirstItem.Icon className="fab fa-facebook"></FirstItem.Icon>
//         <FirstItem.Icon className="fab fa-instagram"></FirstItem.Icon>
//         <FirstItem.Icon className="fab fa-twitter"></FirstItem.Icon>
//       </FirstItem>
//       <Wrapper>
//         <SecondItem>
//           <SecondItem.Title>MATCHA</SecondItem.Title>
{
  /* <SecondItem.FirstPara>
  Chat with new people
  <br /> around the world.
</SecondItem.FirstPara>
<SecondItem.SecondPara>
  Meet millions of new people from all over the world, wherever you
  are. Have a good chat, make new friends or even find the love of
  your life. Because life is all about the people you meet.
</SecondItem.SecondPara> */
}
//           <SecondItem.Button as="Link" to={"#"}>
//             <SecondItem.ButtonIcon className="fab fa-facebook"></SecondItem.ButtonIcon>
//             <SecondItem.ButtonTitle>
//               Sign Up With Facebook
//             </SecondItem.ButtonTitle>
//             <span></span>
//           </SecondItem.Button>
//         </SecondItem>
//       </Wrapper>
//       <ThirdItem>
//         <ThirdItem.Title>1,000,000,000</ThirdItem.Title>
//         <ThirdItem.Para>Conversation on Matcha</ThirdItem.Para>
//       </ThirdItem>
//     </Container>
//   );
// };

// Register.formSection = ({ props, children }) => {
//   return (
//     <SectionFormContainer>
//       <LoginBtn>
//         <Link to={LOGIN}>Log in</Link>
//       </LoginBtn>
//       <LoginFormContainer>
//         <HeaderFour>
//           <Text>OR SIGN UP WITH EMAIL</Text>
//         </HeaderFour>
//         <FormContainer>
//           <FormRow>
//             <FormCol>
//               <Label htmlFor="fname">First name</Label>
//               <Input
//                 type="text"
//                 id="fname"
//                 name="firstname"
//                 placeholder="e.g Kim"
//               />
//             </FormCol>
//             <FormCol>
//               <Label htmlFor="gender">Gender</Label>
//               <Select>
//                 <option>You are...</option>
//                 <option>a man</option>
//                 <option>a woman</option>
//               </Select>
//             </FormCol>
//           </FormRow>
//           <FormRow>
//             <FormCol>
//               <FormBirthCol>
//                 <Label htmlFor="birth">Birthday</Label>
//                 <FormBirthRow>
//                   <Select>
//                     <option>Day</option>
//                     <option>a man</option>
//                     <option>a woman</option>
//                   </Select>
//                   <Select>
//                     <option>Month</option>
//                     <option>a man</option>
//                     <option>a woman</option>
//                   </Select>
//                   <Select>
//                     <option>Year</option>
//                     <option>a man</option>
//                     <option>a woman</option>
//                   </Select>
//                 </FormBirthRow>
//               </FormBirthCol>
//             </FormCol>
//           </FormRow>
//           <FormRow>
//             <FormCol>
//               <Label htmlFor="City">City</Label>
//               <Input
//                 type="text"
//                 id="city"
//                 name="city"
//                 placeholder="e.g London"
//               />
//             </FormCol>
//             <FormCol>
//               <Label htmlFor="type">You're here to...</Label>
//               <Select>
//                 <option>Select</option>
//                 <option>Chat</option>
//                 <option>Make new friends</option>
//                 <option>Date</option>
//               </Select>
//             </FormCol>
//           </FormRow>
//           <FormRow>
//             <FormCol>
//               <Label htmlFor="email">Email address</Label>
//               <Input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="e.g example@example.com"
//               />
//             </FormCol>
//           </FormRow>
//           <FormRow>
//             <FormCol>
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="At least 8 characters"
//               />
//             </FormCol>
//           </FormRow>
//           <FormRow>{/* <SignUpBtn /> */}</FormRow>
//         </FormContainer>
//       </LoginFormContainer>
//     </SectionFormContainer>
//   );
// };

// export default Register;
