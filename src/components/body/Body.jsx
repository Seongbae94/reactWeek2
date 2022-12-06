import React from "react";
// import Topic from "../header/Topic";
import Cards from "../list/Cards";
import Form from "../form/Form";
import styled from "styled-components";
import Layout from "../layout/layout";

export default function Body() {
  return (
    <Layout>
      <Form />
      <StContent>
        <StText>working ...🔥</StText>
        <Cards isdone={false} />
      </StContent>
      <StContent>
        <StText>done ...🎉</StText>
        <Cards isdone={true} />
      </StContent>
    </Layout>
  );
}

const StContent = styled.div`
  text-indent: 5px;
  padding: 10px;
`;

const StText = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
