import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { home } from "../nav/home";
import { about } from "../nav/about";
import { contents } from "../nav/contents";
import { blog } from "../nav/blog";

export const Layout = () => {
  return (
    <Styles>
      <Router>
        <header>
          <Link to="/">
            <h2 className="logo">Project 2020-4</h2>
          </Link>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="contents">
              <li>Contents</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </header>
        <main>
          <Route exact path="/" component={home} />
          <Route path="/about" component={about} />
          <Route path="/contents" component={contents} />
          <Route path="/blog" component={blog} />
        </main>
      </Router>
    </Styles>
  );
};

const Styles = styled.div`
  margin: 0;
  padding: 0;
  & main {
    margin-top: 20px;
  }
  & a {
    text-decoration: none;
  }
  & header {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2c3e50;
    & h2 {
      margin: 5px 10px;
      padding: 5px 5px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ecf0f1;
      letter-spacing: 4px;
      text-shadow: 2px 3px 3px rgba(47, 53, 66, 1),
        3px 4px 4px rgba(255, 255, 255, 1);
    }
    & ul {
      margin-top: 5px;
      margin-right: 15px;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      & li {
        margin: 5px 10px;
        padding: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #ecf0f1;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
  & footer {
    margin: 0;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: 0;
    bottom: 0;
    background: #2c3e50;
    color: #ecf0f1;
    text-shadow: 2px 3px 3px rgba(47, 53, 66, 1),
      3px 4px 4px rgba(255, 255, 255, 1);
    & h5 {
      margin: 5px;
    }
    & .footer_section_1 {
      margin: 10px 5px 0;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      & a {
        text-decoration: none;
        color: #ecf0f1;
        text-shadow: 2px 3px 3px rgba(47, 53, 66, 1),
          3px 4px 4px rgba(255, 255, 255, 1);
      }
    }
    & .footer_section_2 {
      text-align: center;
      & p {
        margin: 5px;
      }
    }
  }
`;
