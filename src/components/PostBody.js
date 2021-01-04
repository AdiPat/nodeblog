/**
 *
 * PostBody: Displays all post content (text)
 *
 */

import React from "react";

function PostBody({ body }) {
  const renderParagraphs = (text) => {
    const paragraphs = text.split("\n");
    const paraJsx = paragraphs.map((para) => (
      <p style={{ marginBottom: "5px" }}>{para}</p>
    ));
    return paraJsx;
  };

  return <div className="post-body">{renderParagraphs(body)}</div>;
}

export { PostBody };
