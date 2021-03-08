import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterList,
  FooterListItem,
  LinkContainer,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterListItem>
          <LinkContainer>
            <Link to={"#"}>About</Link>
          </LinkContainer>
        </FooterListItem>
        <FooterListItem>
          <LinkContainer>
            <Link to={"#"}>FAQ</Link>
          </LinkContainer>
        </FooterListItem>
        <FooterListItem>
          <LinkContainer>
            <Link to={"#"}>Terms & conditions</Link>
          </LinkContainer>
        </FooterListItem>
        <FooterListItem>
          <LinkContainer>
            <Link to={"#"}>Privacy</Link>
          </LinkContainer>
        </FooterListItem>
        <FooterListItem>
          <LinkContainer>
            <Link to={"#"}>Cookie Policy</Link>
          </LinkContainer>
        </FooterListItem>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
