import React from "react";
import styled from "styled-components";

export const about = () => {
  return (
    <Styles>
      <main>
        <section>
          <div>개발자 사진 구역</div>
          <div>개발자 정보 구역</div>
          <div>웹 사이트 상세 이력 정보 구역</div>
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
      flex-direction: column;
      align-items: center;
      border: 2px solid blueviolet;
      & div {
        margin: 5px;
        padding: 5px;
        width: 100%;
        height: 100%;
        border: 1px solid orangered;
        text-align: center;
      }
    }
  }
`;
