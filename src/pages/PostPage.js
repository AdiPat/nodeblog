import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts-api";
import moment from "moment";
import { StatusCodes } from "http-status-codes";

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
  ) : (
    post && (
      <React.Fragment>
        <h1 style={{ textAlign: "center", marginBottom: 32 }}>
          Latest Stories
        </h1>
        <div
          key={post.id}
          style={{
            border: "1px solid lightgrey",
            padding: 16,
            marginBottom: 32,
          }}
        >
          <h2>{post.title}</h2>
          <p>{moment(post.timestamp).format("MMMM, D YYYY")}</p>
          <p>{post.body}</p>
          <br />
          <p>{post.comments.length} Comments</p>
          {post.comments.map((comment) => (
            <div
              style={{
                border: "1px solid lightgrey",
                margin: "16px 0",
                padding: 16,
              }}
            >
              <h4>{comment.name}</h4>
              <p>{moment(post.timestamp).format("MMMM, D YYYY")}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  );
}

export { PostPage };
