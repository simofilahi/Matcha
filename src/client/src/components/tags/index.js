import Icon from "../icon";
import {
  Wrapper,
  TagText,
  // Row,
  // Col,
  SelectedTagsContainer,
  TagsListContainer,
  TagListItem,
  TagListItemText,
} from "./styles";

import { icon, placeholder } from "src/values";

const Tags = () => {
  return (
    <Wrapper>
      <TagText>Select Your Intersts</TagText>
      <TagsListContainer>
        {[
          "MOVIES",
          "MUSIC",
          "1337",
          "SPORT",
          "EDUCATION",
          "PARTIES",
          "SWIMING",
          "DANCING",
          "TRAVEL",
          "DATING",
        ].map((item) => {
          return (
            <TagListItem selected={item === "1337" ? true : false}>
              <TagListItemText>{item}</TagListItemText>
            </TagListItem>
          );
        })}
      </TagsListContainer>
      <SelectedTagsContainer placeholder={placeholder.searchForMore} />
    </Wrapper>
  );
};

export default Tags;
