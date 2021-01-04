const express = require("express");
const cors = require("cors");
const message = require("./server/print-message");
const postsService = require("./server/posts-service");
const constants = require("./src/constants");
const app = express();
const port = constants.SERVER_PORT;

const DEFAULT_USER_ID = 1;

app.use(cors());

app.get("/", (req, res) => {
  const txt = "Root route";
  res.send(txt);
});

app.get("/hello", (req, res) => {
  const curMessage = message.getMessage("This is a fun test route.");
  res.send(curMessage);
});

app.get("/posts", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const userId = DEFAULT_USER_ID;
  const posts = postsService.getAllPosts(userId);
  return res.json({ data: posts });
});

app.get("/posts/:postId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const userId = DEFAULT_USER_ID;
  const post = postsService.getPost(userId, req.params.postId);
  return res.json({ data: post });
});

app.get("/posts/:postId/comments", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const comments = postsService.getAllComments(userId, postId);
  return res.json({ data: comments });
});

app.get("/posts/:postId/comments/:commentId", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const comment = postsService.getComment(userId, postId, commentId);
  return res.json({ data: comment });
});

app.listen(port, () => {
  postsService.loadData();
  console.log(`Example app listening at http://localhost:${port}`);
});
