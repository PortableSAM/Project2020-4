import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const News = () => {
  const [news, setNews] = useState({
    data: []
  });
  //const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:4000/news")
        .then(res => res.data)
        .then(data => {
          setNews({ data: data.items });
        })
        .catch(console.log("Fail"));
    };
    return fetchData();
  }, []);
  //console.log(news);
  const data = news.data;

  // eslint-disable-next-line no-lone-blocks
  {
    /*  const handleSubmit = e => {
    e.preventDefault();
    const frm = new FormData();
    frm.append("search", search);
    axios
      .post("http://localhost:4000/news", frm, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log("Post ok", res);
      })
      .catch(error => {
        console.log("err", error);
      });
  };
*/
  }
  return (
    <NewsStyle>
      <h4>News Area</h4>
      {/*    <form onSubmit={handleSubmit}>
        <label>
          뉴스검색{" "}
          <input
            name="newsSearch"
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
          <input type="submit" value="검색" />
        </label>
  </form>*/}
      <NewsSection>
        {data.map((item, index) => (
          <span key={index}>
            <h5>
              <a
                href={`${item.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </h5>
          </span>
        ))}
      </NewsSection>
    </NewsStyle>
  );
};

const NewsStyle = styled.div`
  width: 584.85;
  form {
    width: 580px;
    margin-bottom: 10px;
  }
`;

const NewsSection = styled.div`
  height: 350px;
  overflow-y: scroll;
  span {
    width: 584.85;
  }
  h5 {
    margin: 30px 0;
    a {
      text-decoration: none;
      color: gray;
    }
  }
`;
