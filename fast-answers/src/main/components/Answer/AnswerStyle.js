import styled from "styled-components";
import { ReactComponent as LastAnswer } from "../../../assets/svg/answer.svg";

export const StyledAnswerContainer = styled.div``;
export const StyledAnswerHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
export const StyledLastAnswerHeader = styled.p`
  display: flex;
  align-items: center;
  margin-left: 23px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6a7b83;
  cursor: pointer;
  &:hover {
    color: #4e4e4e;
    svg {
      path {
        fill: #4e4e4e;
        opacity: 0.5;
      }
    }
  }
  ${(props) => props.disabled && "pointer-events: none; cursor: default;"}
`;
export const StyledTextarea = styled.textarea`
  font-family: "PT sans";
  width: 100%;
  height: 210px;
  padding: 13px 10px;
  box-sizing: border-box;
  border: 1px solid #d5dfe4;
  border-radius: 5px;
  background: ${(props) => (props.disabled ? "#f8f8f8" : "#fff")};
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  &:focus-visible {
    outline: none !important;
    border: 1px solid #3897f0;
    box-shadow: 0px 2px 4px rgba(56, 151, 240, 0.25);
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 135%;
    color: #b4bdc1;
  }
`;
export const StyledAnswerInputContainer = styled.div`
  margin-bottom: 15px;
`;

export const StyledLastAnswerIcon = styled(LastAnswer)`
  margin-right: 6px;
`;
