/**
 *
 * CommentName: Name of user who posted the comment
 *
 */

import React from "react";

function CommentName({ name }) {
  return <h4 className="comment-name">{name}</h4>;
}

export { CommentName };
