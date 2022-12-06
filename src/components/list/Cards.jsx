import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneToggle, deleteTodo } from "../../redux/modules/todo";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Cards({ isdone }) {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <StOrderLists>
      {todos.map((prev) => {
        if (prev.isDone === isdone) {
          return (
            <StListContainer key={prev.id}>
              <Link to={`/details/${prev.id}`}>
                <StContent>상세보기</StContent>
              </Link>
              <h1 style={{ margin: "10px 0 " }}>{prev.title}</h1>
              <StContent mb="15px">{prev.body}</StContent>

              <StBtn
                borderColor="red"
                mr="5px"
                onClick={() => dispatch(deleteTodo(prev.id))}
              >
                삭제하기
              </StBtn>
              {prev.isDone ? (
                <StBtn
                  borderColor="green"
                  onClick={() => dispatch(doneToggle(prev.id))}
                >
                  취소
                </StBtn>
              ) : (
                <StBtn
                  borderColor="green"
                  onClick={() => dispatch(doneToggle(prev.id))}
                >
                  완료
                </StBtn>
              )}
            </StListContainer>
          );
        }
      })}
    </StOrderLists>
  );
}

const StOrderLists = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const StListContainer = styled.div`
  padding: 12px 24px;
  width: 285px;

  margin: 0 20px 20px;
  font-size: 1rem;
  border: 4px solid teal;
  border-radius: 12px;
`;

const StBtn = styled.button`
  margin-right: "5px";
  width: 130px;
  height: 40px;
  align-self: center;
  background-color: white;
  margin: 0 ${(props) => props.mr || 0} 0 0;

  border-radius: 10px;
  border: 2px solid ${(props) => props.borderColor || "white"};
`;

const StContent = styled.p`
  margin: 0 0 ${(props) => props.mb || 0} 0;
`;
