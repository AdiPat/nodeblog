import React from "react";
import { PostListPage } from "./pages/PostListPage";
import { AppRoutes } from "./routes";
import { PostPage } from "./pages/PostPage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AppRoutes indexView={PostListPage} postView={PostPage} />
    </React.Fragment>
  );
}

export default App;
