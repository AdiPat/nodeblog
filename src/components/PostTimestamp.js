/**
 *
 * PostTimestamp: Timestamp of post indicates when the post was created)
 *
 */

import React from "react";
import moment from "moment";

function PostTimestamp({ timestamp }) {
  const timestampMoment = moment(timestamp);
  const formattedTime = timestampMoment.format("MMMM, D YYYY");
  return <p className="post-timestamp">{formattedTime}</p>;
}

export { PostTimestamp };
