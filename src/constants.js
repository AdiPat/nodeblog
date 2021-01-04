const CLIENT_PORT = 3000;
const SERVER_PORT = 8000;

const CLIENT_URL = `http://localhost:${CLIENT_PORT}`;
const SERVER_URL = `http://localhost:${SERVER_PORT}`;

const API_ENDPOINTS = {
  posts: (BASE_URL) => `${BASE_URL}/posts`,
  post: (BASE_URL, postId) => `${BASE_URL}/posts/${postId}`,
  comments: (BASE_URL, postId) => `${BASE_URL}/comments`,
  comment: (BASE_URL, postId, commentId) =>
    `${BASE_URL}/posts/${postId}/comments/${commentId}`,
};

module.exports = {
  CLIENT_PORT,
  SERVER_PORT,
  CLIENT_URL,
  SERVER_URL,
  API_ENDPOINTS,
};
