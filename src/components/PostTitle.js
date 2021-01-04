import React from "react";

function PostTitle({ title }) {
  return (
    <div className="post-title-container">
      <h1 className="post-pretitle">{title.charAt(0)}</h1>
      <h2 className="post-title">{title}</h2>;
    </div>
  );
}

export { PostTitle };
