import React from "react";
import styled from "styled-components";

export const blog = () => {
  return (
    <Styles>
      <main>
        <section>
          <table className="table table">
            <thead>
              <tr>
                <th>Category</th>
                <th>제 목</th>
                <th>작성일자</th>
                <th>작 성 자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">###</th>
                <td>title</td>
                <td>date</td>
                <td>Author</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="btn_section">
          <input name="text_input" />
          <button className="btn btn-outline-info">button</button>{" "}
          <button className="postAdd btn btn-outline-secondary">ADD</button>
        </div>
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
  table {
    width: 100%;
    border: 1px solid gray;
    & th,
    td {
      padding: 5px;
      text-align: center;
    }
  }
  main {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    width: 90%;
    height: 700px;
    border: 2px dotted blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn_section {
      margin: 0 5px;
      padding: 5px;
      width: 85%;
      display: flex;
      justify-content: flex-end;
      input {
        margin-right: 10px;
      }
      button {
        margin-right: 10px;
        padding: 3px 5px;
        width: 90px;
        height: 30px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 1rem;
        :hover {
          outline: none;
        }
      }
    }
    section {
      margin: 0 5px;
      padding: 5px;
      width: 85%;
      height: 650px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid blueviolet;
    }
  }
`;
