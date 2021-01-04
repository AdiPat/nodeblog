import React from "react";
import moment from "moment";
import { CommentCounter } from "./CommentCounter";

function CommentContainer({ comments }) {
  return (
    <React.Fragment>
      <CommentCounter commentCount={comments.length} />
      {comments.map((comment) => (
        <div
          style={{
            border: "1px solid lightgrey",
            margin: "16px 0",
            padding: 16,
          }}
        >
          <h4>{comment.name}</h4>
          <p>{moment(comment.timestamp).format("MMMM, D YYYY")}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

export { CommentContainer };
