import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../../firebase/firebase";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

const db = firebase.database();

export const ContentsView = () => {
  const [modal, setModal] = useState(false);
  const [contents, setContents] = useState({ data: [] });
  const onToggle = () => setModal(!modal === true);
  const data = contents.data;

  const { register, handleSubmit, errors } = useForm();

  const onSubmitData = (data, e) => {
    e.preventDefault();
    console.log(data);
    db.ref("contents/" + data.title)
      .set({
        title: data.title,
        startDay: data.sDay,
        endDay: data.eDay,
        Language: data.pLanguage,
        library: data.pLib,
        link: data.pLink,
        gihhub: data.pGithubLink,
        etc: data.pEtc
      })
      .then(res => {
        console.log("Add Success", res);
        alert("Add Success");
      })
      .catch(error => {
        console.log("err", error);
      });
  };

  useEffect(() => {
    const fetchData = () => {
      const data = [];
      const dbRef = db.ref("contents/");
      dbRef.orderByChild("startDay").on("child_added", snapshot => {
        data.push({
          id: snapshot.key,
          ...snapshot.val()
        });
        setContents({ data: data });
      });
    };
    return fetchData();
  }, []);

  console.log(data);

  return (
    <Styles>
      <main>
        <section>
          {data.map(c => (
            <div key={c.id}>
              <p>{c.title}</p>
              <p>
                기간: {c.startDay} ~ {c.endDay}
              </p>
              <p>언어: {c.Language}</p>
              <p>라이브러리: {c.library}</p>
              <p>
                URL:{" "}
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  {c.link}
                </a>
              </p>
              <p>
                Github:{" "}
                <a href={c.gihhub} target="_blank" rel="noopener noreferrer">
                  {c.gihhub}
                </a>
              </p>
            </div>
          ))}
        </section>
        <div className="contentsAddbtn">
          <Button color="primary" onClick={onToggle}>
            Add
          </Button>
          <Modal isOpen={modal} toggle={onToggle}>
            <ModalHeader> 새로운 프로젝트 추가 </ModalHeader>
            <ModalBody>
              <ProjectForm onSubmit={handleSubmit(onSubmitData)}>
                <label>
                  Project Title{" "}
                  <input
                    type="text"
                    name="title"
                    ref={register({ required: true })}
                  />
                  {errors.title && "프로젝트 제목 입력 요구"}
                </label>
                <label>
                  Project 시작일{" "}
                  <input
                    type="date"
                    name="sDay"
                    ref={register({ required: true })}
                  />
                  {errors.sDay && "프로젝트 시작일 입력 요구"}
                </label>
                <label>
                  Project 종료일{" "}
                  <input type="date" name="eDay" ref={register} />
                </label>
                <label>
                  Project 언어{" "}
                  <input
                    type="text"
                    name="pLanguage"
                    ref={register({ required: true })}
                  />
                  {errors.pLanguage && "프로젝트 언어 입력 요구"}
                </label>
                <label>
                  Project 라이브러리{" "}
                  <input
                    type="text"
                    name="pLib"
                    ref={register({ required: true })}
                  />
                  {errors.pLib && "사용 라이브러리 입력 요구"}
                </label>
                <label>
                  Project URL <input type="link" name="pLink" ref={register} />
                </label>
                <label>
                  Project Github URL{" "}
                  <input
                    type="link"
                    name="pGithubLink"
                    ref={register({ required: true })}
                  />
                  {errors.pLib && "프로젝트 Github URL 입력 요구"}
                </label>
                <label className="petc">
                  Project 기타사항{" "}
                  <textarea type="text" name="pEtc" ref={register} />
                </label>
                <input
                  type="submit"
                  value="등록"
                  className="btn btn-outline-secondary"
                />
              </ProjectForm>
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={onToggle}>
                닫 기
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </main>
    </Styles>
  );
};

const ProjectForm = styled.form`
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
  & .petc {
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
  & main {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    width: 90%;
    height: 100%;
    border: 2px dotted blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .contentsAddbtn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      & button {
        margin: 5px 135px;
      }
    }
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
      & p {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      & .contentsTA {
        display: flex;
        flex-direction: column;
        & textarea {
          width: 100%;
          height: 150px;
        }
      }
    }
  }
`;
