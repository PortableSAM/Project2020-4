import React from "react";
import styled from "styled-components";

export const contents = () => {
  return (
    <Styles>
      <main>
        <section>
          <div>
            <h5>새로운 프로젝트01</h5>
            <h5>시작: YYYY. MM. DD</h5>
            <h5>언어: JS</h5>
            <h5>라이브러리: React</h5>
            <h5>etc: none</h5>
          </div>
          <div>
            <h5>새로운 프로젝트02</h5>
            <h5>시작: YYYY. MM. DD</h5>
            <h5>언어: TS</h5>
            <h5>라이브러리: React</h5>
            <h5>etc: none</h5>
          </div>
        </section>
      </main>
    </Styles>
  );
};

const Styles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  & main {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    width: 90%;
    height: 100%;
    border: 2px dotted blue;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    & section {
      margin: 0 5px;
      padding: 5px;
      width: 85%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-flow: wrap;
      align-items: center;
      justify-content: space-between;
      border: 2px solid blueviolet;
      & div {
        margin: 5px;
        padding: 10px;
        width: 45%;
      }
      & h5 {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
`;
