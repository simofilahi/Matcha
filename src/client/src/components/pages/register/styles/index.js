import styled from "styled-components";

export const Container = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(-75deg, #f7b733 0%, #fc4a1a 100%);
  color: white;
`;

export const FirstItem = styled.div`
  padding: 20px;
  align-self: flex-start;
`;

FirstItem.Icon = styled.i`
  padding: 10px;
  margin: 5px;
  color: #fb551d;
  background-color: #ffffff;
  border-radius: 100%;
  cursor: pointer;
`;

export const SecondItem = styled.div`
  align-self: flex-end;
  max-width: 500px;
  margin-bottom: 300px;
  margin-right: 50px;
`;

SecondItem.Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

SecondItem.FirstPara = styled.p`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

SecondItem.SecondPara = styled.p`
  margin-bottom: 3rem;
`;

SecondItem.Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  max-width: 350px;
  text-decoration: none;
  color: white;
  background-color: #4562c7;
  border-radius: 50px;
  cursor: pointer;
`;

SecondItem.ButtonIcon = styled.i`
  background-color: #263b80;
  padding: 8px;
  border-radius: 100%;
`;

SecondItem.ButtonTitle = styled.span`
  align-self: center;
`;

export const ThirdItem = styled.div`
  align-self: flex-start;
  padding: 20px;
`;

ThirdItem.Title = styled.h1``;

ThirdItem.Para = styled.p``;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const SectionFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginFormContainer = styled.div`
  max-width: 400px;
  margin-bottom: 300px;
  margin-left: 50px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  margin: 2px 0px;
  width: 100%;
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FormLabel = styled.div``;

export const FormBirthCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormBirthRow = styled.div`
  display: flex;
  margin: 2px 0px;
  width: 100%;
`;

export const FormColBtn = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const HeaderFour = styled.h4`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

export const Text = styled.span`
  background: #fff;
  padding: 0 10px;
  color: #6d7c85;
`;

export const Input = styled.input`
  padding: 13px 0px;
  padding-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border: solid 0.5px #cccccc;
  outline-color: #3498db;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #4a4a4a;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  color: #283744;
  background-color: #f8f8f8;
  padding: 12px 0px;
  padding-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  border: solid 0.5px #cccccc;
`;

export const LoginBtn = styled.div`
  align-self: flex-end;
  margin: 20px;
  padding: 11px 28px;
  background-color: #fb7627;
  text-decoration: none;
  color: #ffffff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
`;
