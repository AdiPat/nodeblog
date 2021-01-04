/**
 *
 * Routes: All app routes are declared here
 *
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function AppRoutes({ indexView, postView }) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={indexView}></Route>
          <Route exact path="/posts" component={indexView}></Route>
          <Route exact path="/posts/:postId" component={postView}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export { AppRoutes };
