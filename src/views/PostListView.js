/**
 *
 * PostListView: View for post list at /posts
 *
 */

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

  const renderPosts = (postsList) => {
    const postsJsx = postsList.map((post) => (
      <li className="post-list-item" key={post.id}>
        <PostContainer post={post} shortenBody />
        <ActionButton text="Read On" link={`/posts/${post.id}`} />
      </li>
    ));
    return postsJsx;
  };

  return notFound ? (
    <p>{notFoundMessage}</p>
  ) : (
    <div className="post-list-container">
      <PostListHeader />
      <ul style={{ listStyle: "none" }}>{renderPosts(posts)}</ul>
    </div>
  );
}

export { PostListView };
