import React from "react";
import moment from "moment";

function PostTimestamp({ timestamp }) {
  const timestampMoment = moment(timestamp);
  const formattedTime = timestampMoment.format("MMMM, D YYYY");
  return <p>{formattedTime}</p>;
}

export { PostTimestamp };
