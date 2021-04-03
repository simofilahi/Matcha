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

const Gender = (props) => {
  const { isHor, height, width } = props;
  return (
    <Conatiner width={width}>
      <Row>
        <Col>
          <Male height={height} width={width}>
            <Emoji>👨</Emoji>
            <MaleText>Male</MaleText>
          </Male>
        </Col>
        <Col>
          <Female height={height} width={width}>
            <Emoji>👧</Emoji>
            <FemaleText>Female</FemaleText>
          </Female>
        </Col>
        {isHor ? (
          <Col>
            <MoreChoice height={height} width={width}>
              <ChoiceText>More Choice</ChoiceText>
            </MoreChoice>
          </Col>
        ) : null}
      </Row>
      {!isHor && (
        <Row>
          <Col>
            <MoreChoice height={height} width={width}>
              <ChoiceText>More Choice</ChoiceText>
            </MoreChoice>
          </Col>
        </Row>
      )}
    </Conatiner>
  );
};

export default Gender;
