import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../../firebase/firebase";
import { Link } from "react-router-dom";

const db = firebase.firestore();
const dbRef = db.collection("contents");

export const ContentsEdit = props => {
  const contentId = props.match.params.id;
  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    const projData = dbRef.doc(contentId).onSnapshot(doc => {
      if (doc.exists) {
        const project = { id: doc.id, ...doc.data() };
        setData(project);
      }
    });
    return projData;
  }, [contentId]);

  return (
    <Styles>
      <EditForm>
        <div className="title">
          <p>
            제 목:
            <input defaultValue={data.title} />
          </p>
        </div>
        <div className="range">
          <p>기 간 : {data.startDay} ~ </p> <input defaultValue={data.endDay} />
        </div>
        <div className="desc">
          <p>
            언 어 : <input defaultValue={data.Language} />
          </p>
          <p>라이브러리 : {data.library}</p>
          <p>
            URL : <input defaultValue={data.link} />
          </p>
          <p>
            Github : <input defaultValue={data.gihhub} />
          </p>
        </div>
        <textarea defaultValue={data.etc} />
        <EditBtn>
          <button className="btn btn-outline-success">수정하기</button>
          <Link to="/contents">
            <button className="btn btn-outline-dark">목록으로</button>
          </Link>
        </EditBtn>
      </EditForm>
    </Styles>
  );
};

const EditBtn = styled.div`
  margin: 10px 5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & button {
    margin: 0 10px;
  }
`;

const Styles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditForm = styled.div`
  padding: 15px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    & p {
      width: 90%;
      & input {
        width: 80%;
      }
    }
  }
  & .desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & p {
      width: 90%;
      & input {
        width: 80%;
      }
    }
  }
  & .range {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    & p {
      width: 26.5%;
      letter-spacing: 2px;
    }
    & input {
      width: 20%;
      text-align: center;
    }
  }
  & p {
    margin: 10px 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & input {
      margin: 0;
      padding: 5px;
      width: 80%;
      text-align: center;
    }
  }
  & textarea {
    margin-top: 10px;
    width: 100%;
    height: 150px;
  }
`;
