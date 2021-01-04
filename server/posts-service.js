const fs = require("fs");
const path = require("path");

const DATA_FILE_PATH = path.join(__dirname, "/data/user_posts.json");
let data = null;

function loadData() {
  try {
    postsData = fs.readFileSync(DATA_FILE_PATH, {
      encoding: "utf-8",
      flag: "r",
    });
    data = JSON.parse(postsData);
  } catch (err) {
    console.error("Failed to load data. ", err);
    console.log("Please check if data path is correct.");
  }
}

function isDataLoaded() {
  let isLoaded = true;
  if (!data) {
    console.log("Please run loadData() during initialization.");
    isLoaded = false;
  }
  return isLoaded;
}

function getAllPosts(userId) {
  let allPosts = [];
  if (!isDataLoaded()) {
    return allPosts;
  }

  try {
    const userData = data[userId];
    allPosts = userData.posts ? userData.posts : [];
  } catch (err) {
    console.error(`Failed to get posts for ${userId}`, err);
  }

  return allPosts;
}

function getPost(userId, postId) {
  let post = null;
  if (!isDataLoaded()) {
    return post;
  }

  try {
    const userData = data[userId];
    allPosts = userData.posts ? userData.posts : [];
    post = allPosts.find((curPost) => curPost.id == postId);
  } catch (err) {
    console.error(`Failed to get post for ${userId} and ${postId}`, err);
  }

  return post;
}

function getAllComments(userId, postId) {
  let postComments = [];
  if (!isDataLoaded()) {
    return postComments;
  }
  try {
    const posts = data[userId].posts;
    const post = posts.find((curPost) => curPost.id == postId);
    postComments = post.comments;
  } catch (err) {
    console.error(
      `Failed to get comments for userId=${userId} and postId=${postId}. `,
      err
    );
  }
  return postComments;
}

function getComment(userId, postId, commentId) {
  let comment = null;
  if (!isDataLoaded()) {
    return comment;
  }
  try {
    const posts = data[userId].posts;
    const post = posts.find((curPost) => curPost.id == postId);
    comment = post.comments.find((curComment) => curComment.id == commentId);
  } catch (err) {
    console.error(
      `Failed to get comment for userId=${userId} and postId=${postId} and commentId=${commentId}. `,
      err
    );
  }
  return comment;
}

module.exports = {
  loadData,
  getAllPosts,
  getPost,
  getAllComments,
  getComment,
};
