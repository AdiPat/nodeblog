const express = require("express");
const cors = require("cors");
const app = express();
const postsService = require("./server/posts-service");
const constants = require("./src/constants");

const port = constants.SERVER_PORT;
const DEFAULT_USER_ID = 1;

app.use(cors());

app.get("/posts", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const posts = postsService.getAllPosts(userId);
  return res.json({ data: { userId, posts } });
});

app.get("/posts/:postId", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const post = postsService.getPost(userId, req.params.postId);
  return res.json({ data: { userId, post } });
});

app.get("/posts/:postId/comments", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const comments = postsService.getAllComments(userId, postId);
  return res.json({ data: { userId, comments } });
});

app.get("/posts/:postId/comments/:commentId", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const comment = postsService.getComment(userId, postId, commentId);
  return res.json({ data: { userId, comment } });
});

app.listen(port, () => {
  postsService.loadData();
  console.log(`Example app listening at http://localhost:${port}`);
});
