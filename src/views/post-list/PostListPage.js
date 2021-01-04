import React, { useState, useEffect } from "react";
import moment from "moment";
import { getAllPosts } from "../../api/posts-api";
import { shortenPostBody } from "../../utils/utils";
import { StatusCodes } from "http-status-codes";
import { PostContainer } from "../../components/PostContainer";
import { PostListHeader } from "./PostListHeader";

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
      <PostListHeader />
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
            <PostContainer post={post} shortenBody />
            <a href={`/posts/${post.id}`}>Read On</a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export { PostListPage };
