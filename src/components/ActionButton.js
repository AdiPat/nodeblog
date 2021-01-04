import React from "react";

function ActionButton({ text, link }) {
  return (
    <a className="btn-action" href={link}>
      {text}
    </a>
  );
}

export { ActionButton };
