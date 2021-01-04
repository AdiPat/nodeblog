/**
 *
 * PostContainer: Container that renders all post related data
 *
 */

import React from "react";
import { PostTitle } from "./PostTitle";
import { PostTimestamp } from "./PostTimestamp";
import { PostBody } from "./PostBody";
import { shortenPostBody } from "../utils/utils";

function PostContainer({ post, shortenBody }) {
  return (
    <div key={post.id} className="post-container">
      <PostTitle title={post.title} />
      <PostTimestamp timestamp={post.timestamp} />
      <PostBody body={shortenBody ? shortenPostBody(post.body) : post.body} />
    </div>
  );
}

export { PostContainer };
