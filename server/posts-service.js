const fs = require("fs");
const path = require("path");

const DATA_FILE_PATH = path.join(__dirname, "/data/user_posts.json");
var data = null;

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
    if (userData.posts) {
      allPosts = data[userId].posts;
    }
  } catch (err) {
    console.error(`Failed to get posts for ${userId}`, err);
    allPosts = null;
  }

  return allPosts;
}

function getPost(userId, postId) {
  let post = null;
  if (!isDataLoaded()) {
    return post;
  }

  try {
    const allPosts = data[userId].posts;
    post = allPosts.find((curPost) => curPost.id == postId);
  } catch (err) {
    console.error(`Failed to get post for ${userId} and ${postId}`, err);
    post = null;
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
    if (!post) {
      postComments = null;
    } else {
      postComments = post.comments;
    }
  } catch (err) {
    console.error(
      `Failed to get comments for userId=${userId} and postId=${postId}. `,
      err
    );
    postComments = null;
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
    comment = null;
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
