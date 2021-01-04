/**
 *
 * CommentBody: Comment text posted by a user
 *
 */

import React from "react";

function CommentBody({ body }) {
  return <p className="comment-body">{body}</p>;
}

export { CommentBody };
