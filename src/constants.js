const SERVER_PORT = 8000;

let DEV_SERVER_URL = `http://localhost:${SERVER_PORT}`;
let PRODUCTION_SERVER_URL = `https://nodeblog21.herokuapp.com`;

const API_ENDPOINTS = {
  baseUrl: () =>
    process.env.NODE_ENV === "production"
      ? PRODUCTION_SERVER_URL
      : DEV_SERVER_URL,
  posts: (BASE_URL) => `${BASE_URL}/api/posts`,
  post: (BASE_URL, postId) => `${BASE_URL}/api/posts/${postId}`,
  comments: (BASE_URL, postId) => `${BASE_URL}/api/${postId}/comments`,
  comment: (BASE_URL, postId, commentId) =>
    `${BASE_URL}/api/posts/${postId}/comments/${commentId}`,
};

module.exports = {
  SERVER_PORT,
  DEV_SERVER_URL,
  PRODUCTION_SERVER_URL,
  API_ENDPOINTS,
};
