import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api/posts-api";
import { shortenPostBody } from "../utils/utils";
import moment from "moment";
import { StatusCodes } from "http-status-codes";

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [notFoundMessage, setNotFoundMessage] = useState("");

  useEffect(() => {
    getAllPosts().then((data) => {
      const status = data.statusCode;
      if (status == StatusCodes.NOT_FOUND) {
        setNotFound(true);
        setNotFoundMessage(data.message);
      } else {
        const postList = data.posts;
        setPosts(postList);
      }
    });
  }, []);

  return notFound ? (
    <p>{notFoundMessage}</p>
  ) : (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>Latest Stories</h1>
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid lightgrey",
              padding: 16,
              marginBottom: 32,
            }}
          >
            <h2>{post.title}</h2>
            <p>{moment(post.timestamp).format("MMMM, D YYYY")}</p>
            <p>{shortenPostBody(post.body)}</p>
            <p>{post.comments.length} Comments</p>
            <a href={`/posts/${post.id}`}>Read On</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export { PostListPage };
