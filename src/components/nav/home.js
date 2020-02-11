import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WeatherInfo } from "../weatherApi/weatherInfo";
import { News } from "../newsApi/newsApp";
import firebase from "../../firebase/firebase";

const cDb = firebase.database();
const cDbRef = cDb.ref("contents/");
const bDb = firebase.firestore();
const bDbRef = bDb.collection("blog").orderBy("createAt", "desc");

export const Home = () => {
  const [btitle, setBtitle] = useState([]);
  const [ctitle, setCtitle] = useState({ data: [] });
  const cData = ctitle.data;

  useEffect(() => {
    const Title = () => {
      const data = [];
      cDbRef
        .orderByChild("startDay")
        .limitToLast(5)
        .on("child_added", snapshot => {
          data.push({
            id: snapshot.key,
            ...snapshot.val()
          });
          setCtitle({ data: data });
        });
      bDbRef.onSnapshot(snap => {
        const bT = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBtitle(bT);
      });
    };
    return Title();
  }, []);

  console.log(cData);

  return (
    <Styles>
      <main>
        <section className="home_section_1">
          <WeatherInfo />
          <News />
        </section>
        <section className="home_section_2">
          <article>
            <h6>새로운 게시글</h6>
            {btitle.map(b => (
              <BDiv key={b.id}>
                <p className="btitle">{b.title}</p>
                <p>{b.author}</p>
                <p>
                  {new Date(b.createAt.seconds * 1000).toLocaleDateString("ko")}
                </p>
              </BDiv>
            ))}
          </article>
          <article>
            <h6>새로운 프로젝트</h6>
            {cData.map(c => (
              <CDiv key={c.id}>
                <p>{c.title}</p>
                <p>
                  {c.startDay}~{c.endDay}
                </p>
              </CDiv>
            ))}
          </article>
        </section>
      </main>
    </Styles>
  );
};
const BDiv = styled.div`
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  :hover {
    background: #303952;
    color: #ffffff;
  }
  & .btitle {
    width: 60%;
  }
`;

const CDiv = styled.div`
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  :hover {
    background: #303952;
    color: #ffffff;
  }
`;

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
        flex-direction: column;
        align-items: center;
        width: 95%;
        height: 310px;
        border: 1px solid green;
        & h6,
        p {
          margin: 5px;
        }
      }
    }
  }
`;
