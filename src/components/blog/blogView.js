import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export const BlogView = () => {
  const [modal, setModal] = useState(false);
  const onToggle = () => setModal(!modal === true);

  const { register, handleSubmit, errors } = useForm();

  const onSubmitData = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

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
          <div className="blogAddbtn">
            <Button color="primary" onClick={onToggle}>
              Add
            </Button>
            <Modal isOpen={modal} toggle={onToggle}>
              <ModalHeader> 새로운 포스트 추가 </ModalHeader>
              <ModalBody>
                <BlogForm onSubmit={handleSubmit(onSubmitData)}>
                  <label>
                    Post Title{" "}
                    <input
                      type="text"
                      name="title"
                      ref={register({ required: true })}
                    />
                    {errors.title && "프로젝트 제목 입력 요구"}
                  </label>
                  <label>
                    Post 작성자{" "}
                    <input
                      type="text"
                      name="postAuthor"
                      ref={register({ required: true })}
                    />
                    {errors.postAuthor && "프로젝트 시작일 입력 요구"}
                  </label>
                  <label className="postContent">
                    Post 내용{" "}
                    <textarea type="text" name="postContent" ref={register} />
                  </label>
                  <input
                    type="submit"
                    value="등록"
                    className="btn btn-outline-secondary"
                  />
                </BlogForm>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={onToggle}>
                  닫 기
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </main>
    </Styles>
  );
};

const BlogForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & input {
    width: 100%;
  }
  & label {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & input {
      margin-top: 5px;
      width: 100%;
      text-align: center;
    }
  }
  & .postContent {
    display: flex;
    flex-direction: column;
    & textarea {
      margin-top: 10px;
    }
  }
`;

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