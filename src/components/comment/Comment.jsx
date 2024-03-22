import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
`;

const CommentImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-right: 10px;
`;

const CommentContainer = styled.div``;

const CommentDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;
`;

const CommentName = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const CommentTime = styled.p`
  font-size: 12px;
`;

const CommentDescription = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: left;
`;

const Comment = ({ comment }) => {
  const { name, img, date, detail } = comment;
  return (
    <Container>
      <CommentImg src={img} />
      <CommentContainer>
        <CommentDetail>
          <CommentName>{name}</CommentName>
          <CommentTime>{date}</CommentTime>
        </CommentDetail>
        <CommentDescription>{detail}</CommentDescription>
      </CommentContainer>
    </Container>
  );
};

export default Comment;
