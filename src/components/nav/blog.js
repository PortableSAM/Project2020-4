import React from "react";
import { PostList } from "../blog/postList";
import { PostView } from "../blog/postView";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const blog = () => {
  return (
    <Router>
      <Route exact path="/blog" component={PostList} />
      <Route path="/blog/:id" component={PostView} />
    </Router>
  );
};
