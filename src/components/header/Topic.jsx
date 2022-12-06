import React from "react";
import styled from "styled-components";

export default function Topic() {
  return (
    <StContainer>
      <StText>My Todo List</StText>
      <StText>React</StText>
    </StContainer>
  );
}

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;

  border: 1px solid rgb(201, 199, 199);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StText = styled.div`
  padding: 15px 20px;
`;
