import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { todoSetting } from "../../redux/modules/todo";

import styled from "styled-components";

export default function Form() {
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setTopic(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const onClickTodoAdd = () => {
    topic === "" || desc === ""
      ? dispatch({ type: null })
      : dispatch(todoSetting({ title: topic, content: desc }));

    setTopic("");
    setDesc("");
  };

  return (
    <StContainer>
      <StFlex className="flex">
        <StFlex>
          <p>제목</p>
          <input
            className="input-shape"
            id="name"
            onChange={handleNameChange}
            value={topic}
          />
        </StFlex>
        <StFlex>
          <p>내용</p>
          <input
            className="input-shape"
            id="desc"
            onChange={handleDescChange}
            value={desc}
          />
        </StFlex>
      </StFlex>
      <StBtn className="btn btn-teal" onClick={onClickTodoAdd}>
        추가하기
      </StBtn>
    </StContainer>
  );
}

const StContainer = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const StBtn = styled.button`
  width: 130px;
  height: 40px;
  align-self: center;

  border-radius: 10px;
  border: 0;
  background-color: teal;
  color: white;
`;

const StFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
