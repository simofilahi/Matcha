import React from "react";
import styles from "./styles/style.module.css";
import { Link } from "react-router-dom";
import { LOGIN } from "src/constants/";
import {
  Container,
  Wrapper,
  FirstItem,
  SecondItem,
  ThirdItem,
  SectionFormContainer,
  LoginFormContainer,
  FormContainer,
  FormCol,
  FormRow,
  FormBirthRow,
  FormBirthCol,
  FormColBtn,
  HeaderFour,
  Text,
  Label,
  Input,
  Select,
  LoginBtn,
} from "./styles";

const Register = ({ props, children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Register.infoSection = ({ props, children }) => {
  return (
    <Container>
      <FirstItem>
        <FirstItem.Icon className="fab fa-facebook"></FirstItem.Icon>
        <FirstItem.Icon className="fab fa-instagram"></FirstItem.Icon>
        <FirstItem.Icon className="fab fa-twitter"></FirstItem.Icon>
      </FirstItem>
      <Wrapper>
        <SecondItem>
          <SecondItem.Title>MATCHA</SecondItem.Title>
          <SecondItem.FirstPara>
            Chat with new people
            <br /> around the world.
          </SecondItem.FirstPara>
          <SecondItem.SecondPara>
            Meet millions of new people from all over the world, wherever you
            are. Have a good chat, make new friends or even find the love of
            your life. Because life is all about the people you meet.
          </SecondItem.SecondPara>
          <SecondItem.Button as="Link" to={"#"}>
            <SecondItem.ButtonIcon className="fab fa-facebook"></SecondItem.ButtonIcon>
            <SecondItem.ButtonTitle>
              Sign Up With Facebook
            </SecondItem.ButtonTitle>
            <span></span>
          </SecondItem.Button>
        </SecondItem>
      </Wrapper>
      <ThirdItem>
        <ThirdItem.Title>1,000,000,000</ThirdItem.Title>
        <ThirdItem.Para>Conversation on Matcha</ThirdItem.Para>
      </ThirdItem>
    </Container>
  );
};

Register.formSection = ({ props, children }) => {
  return (
    <SectionFormContainer>
      <LoginBtn>
        <Link to={LOGIN}>Log in</Link>
      </LoginBtn>
      <LoginFormContainer>
        <HeaderFour>
          <Text>OR SIGN UP WITH EMAIL</Text>
        </HeaderFour>
        <FormContainer>
          <FormRow>
            <FormCol>
              <Label htmlFor="fname">First name</Label>
              <Input
                type="text"
                id="fname"
                name="firstname"
                placeholder="e.g Kim"
              />
            </FormCol>
            <FormCol>
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <option>You are...</option>
                <option>a man</option>
                <option>a woman</option>
              </Select>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <FormBirthCol>
                <Label htmlFor="birth">Birthday</Label>
                <FormBirthRow>
                  <Select>
                    <option>Day</option>
                    <option>a man</option>
                    <option>a woman</option>
                  </Select>
                  <Select>
                    <option>Month</option>
                    <option>a man</option>
                    <option>a woman</option>
                  </Select>
                  <Select>
                    <option>Year</option>
                    <option>a man</option>
                    <option>a woman</option>
                  </Select>
                </FormBirthRow>
              </FormBirthCol>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Label htmlFor="City">City</Label>
              <Input
                type="text"
                id="city"
                name="city"
                placeholder="e.g London"
              />
            </FormCol>
            <FormCol>
              <Label htmlFor="type">You're here to...</Label>
              <Select>
                <option>Select</option>
                <option>Chat</option>
                <option>Make new friends</option>
                <option>Date</option>
              </Select>
            </FormCol>
          </FormRow>
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
            <Link to={LOGIN} className={styles.login_btn}>
              <Input type="submit" value="SIGN UP" />
            </Link>
          </FormRow>
        </FormContainer>
      </LoginFormContainer>
    </SectionFormContainer>
  );
};

export default Register;
