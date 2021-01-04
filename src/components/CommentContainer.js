import React from "react";
import { CommentCounter } from "./CommentCounter";
import { CommentBody } from "./CommentBody";
import { CommentName } from "./CommentName";
import { CommentTimestamp } from "./CommentTimestamp";
import { CommentReplyButton } from "./CommentReplyButton";

function CommentContainer({ comments }) {
  return (
    <ul className="comment-list-container">
      <CommentCounter commentCount={comments.length} />
      {comments.map((comment) => (
        <li className="comment-container">
          <img
            className="comment-img"
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="empty profile pic"
          />
          <div className="comment-content">
            <CommentName name={comment.name} />
            <CommentTimestamp timestamp={comment.timestamp} />
            <CommentBody body={comment.body} />
            <CommentReplyButton />
          </div>
        </li>
      ))}
    </ul>
  );
}

export { CommentContainer };
