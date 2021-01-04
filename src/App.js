/**
 *
 * App: Root application
 *
 */
import React from "react";
import { PostListView } from "./views/PostListView";
import { PostView } from "./views/PostView";
import { AppRoutes } from "./routes";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AppRoutes indexView={PostListView} postView={PostView} />
    </React.Fragment>
  );
}

export default App;
