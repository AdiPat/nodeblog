import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../api/posts-api";
import { StatusCodes } from "http-status-codes";
import { PostContainer } from "../../components/PostContainer";
import { ActionButton } from "../../components/ActionButton";
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
            <ActionButton text="Read On" link={`/post/${post.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PostListPage };
