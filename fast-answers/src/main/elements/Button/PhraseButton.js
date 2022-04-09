import React from "react";
import styled from "styled-components";
import Edit from "../../../assets/img/edit-phrase.png";
import Delete from "../../../assets/img/delete-phrase.png";
import Popup from "reactjs-popup";

const StyledButton = styled.div`
  display: flex;
  width: 48%;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #d5dfe4;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledImgIcon = styled.img`
  &:hover {
    background: #d9d9d9;
  }
`;

const StyledTextFhrase = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const StyledTooltipText = styled(Popup)`
  &-content {
    word-break: break-word;
    width: 400px !important;
    background: #fff;
    border: 1px solid #3897f0;
    box-sizing: border-box;
    padding: 10px;
  }
`;

export const FolderButton = ({
  onEdit,
  onClick,
  onDelete,
  children,
  id,
  creator,
  username,
}) => {
  return (
    <StyledButton id={"p" + id} onClick={onClick}>
      {children.length > 185 ? (
        <StyledTooltipText
          trigger={() => (
            <StyledTextFhrase id={"pp" + id}>{children}</StyledTextFhrase>
          )}
          position="top center"
          on={["hover", "focus"]}
          closeOnDocumentClick
        >
          <StyledTextFhrase>{children}</StyledTextFhrase>
        </StyledTooltipText>
      ) : (
        <div style={{ wordBreak: "break-word" }} id={"pp" + id}>
          {children}
        </div>
      )}
      {creator === username && (
        <StyledIconContainer>
          <StyledImgIcon
            style={{
              border: "1px solid #D5DFE4",
              marginLeft: "10px",
              borderRadius: "5px",
              padding: "10px",
            }}
            id={"e" + id}
            onClick={onEdit}
            src={Edit}
            alt=""
          ></StyledImgIcon>

          <StyledImgIcon
            style={{
              border: "1px solid #D5DFE4",
              marginLeft: "10px",
              borderRadius: "5px",
              padding: "10px",
            }}
            id={"d" + id}
            onClick={onDelete}
            src={Delete}
            alt=""
          ></StyledImgIcon>
        </StyledIconContainer>
      )}
    </StyledButton>
  );
};
