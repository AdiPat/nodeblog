import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts-api";
import { StatusCodes } from "http-status-codes";
import { CommentContainer } from "./CommentContainer";
import { PostContainer } from "../../components/PostContainer";

function PostPage() {
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId).then((data) => {
      if (data.statusCode == StatusCodes.NOT_FOUND) {
        setNotFoundMessage(data.message);
        setNotFound(true);
      } else {
        setPost(data.post);
      }
    });
  }, []);

  return notFound ? (
    <p>{notFoundMessage}</p>
  ) : post ? (
    <React.Fragment>
      <PostContainer post={post} />
      <CommentContainer comments={post.comments} />
    </React.Fragment>
  ) : null;
}

export { PostPage };
