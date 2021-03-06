import { API_ENDPOINTS } from "../constants";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const errorResponse = {
  data: null,
  statusCode: StatusCodes.NOT_FOUND,
  message: ReasonPhrases.NOT_FOUND,
};

const getAllPosts = async () => {
  const baseUrl = API_ENDPOINTS.baseUrl();
  const url = API_ENDPOINTS.posts(baseUrl);
  let posts = [];

  try {
    const response = await fetch(url);
    if (response.status == StatusCodes.NOT_FOUND) {
      return errorResponse;
    }
    const payload = await response.json();
    posts = payload.data.posts;
  } catch (err) {
    console.error("Failed to get posts. ", err);
    return errorResponse;
  }

  return { posts, statusCode: StatusCodes.OK, message: ReasonPhrases.OK };
};

const getPost = async (postId) => {
  const baseUrl = API_ENDPOINTS.baseUrl();
  const url = API_ENDPOINTS.post(baseUrl, postId);
  let post = null;
  try {
    const response = await fetch(url);
    const payload = await response.json();
    if (response.status == StatusCodes.NOT_FOUND) {
      return errorResponse;
    }
    post = payload.data.post;
  } catch (err) {
    console.error(`Failed to get post with postId=${postId}`, err);
    return errorResponse;
  } finally {
    post = post ? post : null;
  }
  return { post, statusCode: StatusCodes.OK, message: ReasonPhrases.OK };
};

const getCommentList = async (postId) => {
  const baseUrl = API_ENDPOINTS.baseUrl();
  const url = API_ENDPOINTS.comments(baseUrl, postId);
  let comments = [];
  try {
    const response = await fetch(url);
    const payload = await response.json();
    comments = payload.data.comments;
  } catch (err) {
    console.error(`Failed to get comments list with postId=${postId}`, err);
  } finally {
    comments = comments ? comments : [];
  }
  return comments;
};

const getComment = async (postId, commentId) => {
  const baseUrl = API_ENDPOINTS.baseUrl();
  const url = API_ENDPOINTS.comment(baseUrl, postId, commentId);
  let comment = null;
  try {
    const response = await fetch(url);
    const payload = await response.json();
    comment = payload.data.comment;
  } catch (err) {
    console.error(
      `Failed to get comment with postId=${postId} and commentId=${commentId}`,
      err
    );
  } finally {
    comment = comment ? comment : null;
  }
  return comment;
};

export { getAllPosts, getPost, getCommentList, getComment };
