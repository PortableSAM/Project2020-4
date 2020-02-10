import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:4000/news")
        .then(res => res.data)
        .then(data => {
          setNews(data.items);
        })
        .catch(console.log("Fail"));
    };
    return fetchData();
  }, []);
  console.log(news);
  return (
    <Styles>
      <h4>News Area</h4>
    </Styles>
  );
};

const Styles = styled.div``;
