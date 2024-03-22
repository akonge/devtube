import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
`;

const NewComment = () => {
  return (
    <Container>
      <UserImg src="https://images.pexels.com/photos/320007/pexels-photo-320007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <StyledInput placeholder="Add a comment" />
    </Container>
  );
};

export default NewComment;
