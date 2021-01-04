import React from "react";

function PostBody({ body }) {
  const renderParagraphs = (text) => {
    const paragraphs = body.split("\n");
    const paraJsx = paragraphs.map((para) => (
      <p style={{ marginBottom: "5px" }}>{para}</p>
    ));
    return paraJsx;
  };

  return <div className="post-body">{renderParagraphs(body)}</div>;
}

export { PostBody };
