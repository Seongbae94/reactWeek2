import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector } from "react-redux";

export default function Details() {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo);
  const targetId = useParams().id;
  const target = todos.find((todo) => todo.id === targetId);

  return (
    <StContainer>
      <StBox>
        <StBtn onClick={() => navigate("/")}>이전으로</StBtn>
        <StText>id: {target.id}</StText>
        <h1>{target.title}</h1>
        <StText fontSize="18px">{target.body}</StText>
      </StBox>
    </StContainer>
  );
}

const StContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 205px;

  padding: 20px;
  margin: auto;

  border: 2px solid gray;
  border-radius: 10px;

  box-shadow: 0 0 10px 3px gray;

  text-align: center;
`;

const StBtn = styled.button`
  width: 130px;
  height: 40px;
  align-self: center;
  background-color: gray;

  color: white;
  border-radius: 10px;
  border: 0;

  margin: 0 0 10px 0;
  cursor: pointer;
`;

const StText = styled.div`
  font-size: ${(props) => props.fontSize || "12px"};
`;
