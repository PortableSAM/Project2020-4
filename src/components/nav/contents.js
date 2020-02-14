import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContentsView } from "../contents/contentsView";
import { ContentsEdit } from "../contents/contentsEdit";

export const contents = () => {
  return (
    <Router>
      <Route exact path="/contents" component={ContentsView} />
      <Route path="/contents/:id/edit" component={ContentsEdit} />
    </Router>
  );
};
