const CLIENT_PORT = 3000;
const SERVER_PORT = 8000;

let SERVER_URL = `http://localhost:${SERVER_PORT}`;

if (process.env.NODE_ENV === "production") {
  SERVER_URL = window.location.origin;
}

const API_ENDPOINTS = {
  posts: (BASE_URL) => `${BASE_URL}/api/posts`,
  post: (BASE_URL, postId) => `${BASE_URL}/api/posts/${postId}`,
  comments: (BASE_URL, postId) => `${BASE_URL}/api/${postId}/comments`,
  comment: (BASE_URL, postId, commentId) =>
    `${BASE_URL}/api/posts/${postId}/comments/${commentId}`,
};

module.exports = {
  CLIENT_PORT,
  SERVER_PORT,
  SERVER_URL,
  API_ENDPOINTS,
};
