import Icon from "src/components/icon";
import {
  Conatiner,
  Male,
  Female,
  Emoji,
  MoreChoice,
  Row,
  Col,
  MaleText,
  FemaleText,
  ChoiceText,
} from "./styles";

const Gendar = () => {
  return (
    <Conatiner>
      <Row>
        <Col>
          <Male>
            <Emoji>👨</Emoji>
            <MaleText>Male</MaleText>
          </Male>
        </Col>
        <Col>
          <Female>
            <Emoji>👧</Emoji>
            <FemaleText>Female</FemaleText>
          </Female>
        </Col>
      </Row>
      <Row>
        <Col>
          <MoreChoice>
            <ChoiceText>More Choice</ChoiceText>
          </MoreChoice>
        </Col>
      </Row>
    </Conatiner>
  );
};

export default Gendar;
