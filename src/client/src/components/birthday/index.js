import {
  Wrapper,
  InputContainer,
  Day,
  Month,
  Year,
  BirthDayText,
  Option,
  CustomText,
  OptionContainer,
  TextDay,
} from "./styles";

import { useState } from "react";

const BirthDay = () => {
  const [open, setStatus] = useState(false);

  return (
    <Wrapper>
      <BirthDayText>Birthday</BirthDayText>
      <InputContainer>
        <Day onClick={() => setStatus((prevState) => !prevState)}>
          {/* <TextDay>Day</TextDay> */}
          <OptionContainer open={open}>
            <Option value="Day">1</Option>
            <Option value="Day">2</Option>
            <Option value="Day">3</Option>
            <Option value="Day">4</Option>
            <Option value="Day">5</Option>
            <Option value="Day">6</Option>
            <Option value="Day">7</Option>
            <Option value="Day">8</Option>
            <Option value="Day">9</Option>
            <Option value="Day">10</Option>
          </OptionContainer>
        </Day>
        <Month></Month>
        <Year></Year>
      </InputContainer>
    </Wrapper>
  );
};

export default BirthDay;
