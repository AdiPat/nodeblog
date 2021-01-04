import React from "react";
import { PostListPage } from "./views/post-list/PostListPage";
import { AppRoutes } from "./routes";
import { PostPage } from "./views/post/PostPage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AppRoutes indexView={PostListPage} postView={PostPage} />
    </React.Fragment>
  );
}

export default App;
