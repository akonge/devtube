import React from "react";
import styled, { css } from "styled-components";

const TagBadge = styled.div`
  background-color: #e2e1e1;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 30px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

const Tag = ({ tag }) => {
  return <TagBadge>{tag}</TagBadge>;
};

export default Tag;
