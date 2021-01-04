import React from "react";
import { CommentCounter } from "./CommentCounter";
import { CommentBody } from "../../components/CommentBody";
import { CommentName } from "../../components/CommentName";
import { CommentTimestamp } from "../../components/CommentTimestamp";
import { CommentReplyButton } from "../../components/CommentReplyButton";

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
