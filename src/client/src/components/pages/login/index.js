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
} from "./styles";
import styles from "./styles/style.module.css";
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
          <Icon className={icon.facebook} size={iconSize.medium}></Icon>
        </IconContainer>
        <IconContainer>
          <Icon className={icon.instagram} size={iconSize.medium}></Icon>
        </IconContainer>
        <IconContainer>
          <Icon className={icon.twiter} size={iconSize.medium}></Icon>
        </IconContainer>
      </IconWrapper>
      <WebSiteInfos>
        <WebSiteTitle>MATCHA</WebSiteTitle>
        <CustomParagraph>Welcome Back!</CustomParagraph>
        <FbSignUpBtn>
          <Icon className={icon.facebook} size={iconSize.medium} />
          <span>Sign Up With Facebook</span>
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
      <Button>
        <Link to={REGISTER}>Sign up</Link>
      </Button>
      <FormContainer>
        <LoginTextContainer>
          <LoginText>OR LOG IN WITH E-MAIL</LoginText>
        </LoginTextContainer>
        <Form>
          <FormRow>
            <FormCol>
              <Label htmlFor="email">Email address</Label>
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
              <SignUpButton type="submit" value="LOG IN" />
            </SignUpButtonContainer>
          </FormRow>
        </Form>
      </FormContainer>
      <Box></Box>
    </FormWrapper>
  );
};

// Login.infoSection = ({ props, children }) => {
//   return (
//     <div className={styles.login_fc_item_1}>
//       <div className={styles.login_fc_it_1_ch_1}>
//         <i className="fab fa-facebook "></i>
//         <i className="fab fa-instagram "></i>
//         <i className="fab fa-twitter"></i>
//       </div>
//       <div className={styles.login_fc_it_1_ch_2}>
//         <h1>MATCHA</h1>
//         <p className={styles.custom_para}>Welcome Back!</p>
//         <a href="#">
//           <i className="fab fa-facebook "></i>
//           <span>Sign Up With Facebook</span>
//           <span></span>
//         </a>
//       </div>
//       <div className={styles.login_fc_it_1_ch_3}>
//         <h1>1,000,000,000</h1>
//         <p>Conversation on Matcha</p>
//       </div>
//     </div>
//   );
// };

// Login.formSection = ({ props, children }) => {
//   return (
//     <div className={styles.login_fc_item_2}>
//       <Link to={REGISTER} className={styles.login_btn}>
//         Sign up
//       </Link>
//       <div className={styles.login_form_ct}>
//         <h4>
//           <span>OR LOG IN WITH E-MAIL</span>
//         </h4>
//         <form className={styles.login_form_flex}>
//           <div className={styles.login_form_row}>
//             <div className={styles.login_form_col}>
//               <label htmlFor="email">Email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="e.g example@example.com"
//               />
//             </div>
//           </div>
//           <div className={styles.login_form_row}>
//             <div className={styles.login_form_col}>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="At least 8 characters"
//               />
//             </div>
//           </div>
//           <div className={styles.login_form_row}>
//             <div className={styles.login_form_col_btn}>
//               <input type="submit" value="LOG IN" />
//             </div>
//           </div>
//         </form>
//       </div>
//       <div></div>
//     </div>
//   );
// };

export default Login;
