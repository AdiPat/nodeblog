const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const postsService = require("./server/posts-service");
const constants = require("./src/constants");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const port = process.env.PORT || constants.SERVER_PORT;
const DEFAULT_USER_ID = 1;

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.get(["/", "/posts", "/posts/:postId"], (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/posts", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const posts = postsService.getAllPosts(userId);
  if (!posts) {
    return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
  }
  return res.json({ data: { userId, posts } });
});

app.get("/api/posts/:postId", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const postId = parseInt(req.params.postId);
  const post = postsService.getPost(userId, postId);
  if (!post) {
    return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
  }
  return res.json({ data: { userId, post } });
});

app.get("/api/posts/:postId/comments", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const comments = postsService.getAllComments(userId, postId);
  if (!comments) {
    return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
  }
  return res.json({ data: { userId, comments } });
});

app.get("/api/posts/:postId/comments/:commentId", (req, res) => {
  const userId = DEFAULT_USER_ID;
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const comment = postsService.getComment(userId, postId, commentId);
  if (!comment) {
    return res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
  }
  return res.json({ data: { userId, comment } });
});

app.listen(port, () => {
  postsService.loadData();
  console.log(`NodeBlog listening at http://localhost:${port}`);
});
