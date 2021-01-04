import React from "react";

function CommentCounter({ commentCount }) {
  return <p className="comment-counter">{commentCount} Comments</p>;
}

export { CommentCounter };
