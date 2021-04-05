import Wrapper from "src/components/wrapper";
import MainSection from "src/components/mainSection";

const MatchPage = (props) => {
  <Wrapper>
    {props.children}
    <MainSection></MainSection>
  </Wrapper>;
};

export default MatchPage;
