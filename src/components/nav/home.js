import React from "react";
import styled from "styled-components";

export const home = () => {
  return (
    <Styles>
      <main>
        <section className="home_section_1">
          <div>날씨정보 구역</div>
          <div>뉴스정보 구역</div>
        </section>
        <section className="home_section_2">
          <article>
            <div>Blog Text 구역</div>
          </article>
          <article>
            <div>contents 구역</div>
          </article>
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
  & .home_section_1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    & div {
      width: 100%;
      height: 150px;
      border: 3px dotted orange;
    }
  }
  & .home_section_2 {
    & div {
      width: 100%;
      height: 150px;
      border: 3px dotted orange;
    }
  }
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
    justify-content: space-between;
    & section {
      margin: 0 5px;
      padding: 5px;
      width: 85%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid blueviolet;
      & article {
        margin: 0;
        padding: 10px;
        display: flex;
        align-items: center;
        width: 95%;
        height: 100%;
        border: 1px solid green;
      }
    }
  }
`;
