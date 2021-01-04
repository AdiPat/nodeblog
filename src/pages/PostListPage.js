import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api/posts-api";
import moment from "moment";

function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((postList) => {
      setPosts(postList);
    });
  }, []);

  const shortenPostBody = (postBody) => {
    const maxLen = 300;
    if (typeof postBody != "string") {
      return postBody;
    }
    if (postBody.length < maxLen) {
      return postBody;
    }
    return postBody.slice(0, maxLen) + "...";
  };

  return (
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
