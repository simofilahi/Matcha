import styled from "styled-components";
import { color, fontSize, CustomSize } from "src/values";

export const Wrapper = styled.div`
  height: 200px;
  width: 385px;
  display: flex;
  flex-direction: column;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
`;

export const TagText = styled.span`
  color: ${color.Boulder};
  font-size: ${CustomSize(fontSize.small, 2)};
  flex: 10%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const TagsListContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
`;

export const TagListItemText = styled.span`
  color: ${color.Boulder};
  font-size: ${CustomSize(fontSize.small, 0)};
`;

export const TagListItem = styled.div`
  flex: 1;
  display: flex;
  height: 20px;
  padding: 5px 10px;
  margin: 2px;
  border: 1.5px solid ${color.wildSand};
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${({ selected }) => {
    console.log(selected);
    return selected === true ? color.electricViolet : color.white;
  }};

  ${TagListItemText} {
    color: ${({ selected }) =>
      selected === true ? color.white : color.Boulder};
  }
`;

export const Col = styled.div``;

export const SelectedTagsContainer = styled.input`
  flex: 20%;
  border: 1.5px solid ${color.wildSand};
  border-radius: 8px;
  height: 100px;
  outline-style: none;
  margin: 5px;
  padding-left: 10px;
`;
