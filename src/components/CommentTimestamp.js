/**
 *
 * CommentTimestamp: Indicates when the comment was created
 *
 */

import React from "react";
import moment from "moment";

function CommentTimestamp({ timestamp }) {
  const commentTimestamp = moment(timestamp);
  const dateStr = commentTimestamp.format("MMMM, D YYYY");
  // hack: generate random time for presentation purposes because backend sends 0:00
  const timeStr = moment()
    .add(Math.floor(Math.random() * 24 * 60), "minutes")
    .format("H:mm");
  return <p className="comment-timestamp">{`${dateStr} at ${timeStr}`}</p>;
}

export { CommentTimestamp };
