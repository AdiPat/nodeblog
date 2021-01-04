import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api/posts-api";
import { StatusCodes } from "http-status-codes";
import { PostContainer } from "../components/PostContainer";
import { ActionButton } from "../components/ActionButton";
import { PostListHeader } from "../components/PostListHeader";

function PostListView() {
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
    <div className="post-list-container">
      <PostListHeader />
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li className="post-list-item" key={post.id}>
            <PostContainer post={post} shortenBody />
            <ActionButton text="Read On" link={`/posts/${post.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PostListView };
