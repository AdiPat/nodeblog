import React from "react";
import { PostListView } from "./views/PostListView";
import { AppRoutes } from "./routes";
import { PostView } from "./views/PostView";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AppRoutes indexView={PostListView} postView={PostView} />
    </React.Fragment>
  );
}

export default App;
