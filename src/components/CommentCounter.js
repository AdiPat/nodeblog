/**
 *
 * CommentCounter: Indicates number of comments on post
 *
 */

import React from "react";

function CommentCounter({ commentCount }) {
  return <p className="comment-counter">{commentCount} Comments</p>;
}

export { CommentCounter };
