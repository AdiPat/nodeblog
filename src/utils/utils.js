// generate post preview by shortening text and appending with ellipsis (...)
const shortenPostBody = (postBody) => {
  const maxLen = 300;
  if (typeof postBody != "string") {
    return postBody;
  }
  if (postBody.length < maxLen) {
    return postBody;
  }
  return postBody.slice(0, maxLen) + "...";
};

export { shortenPostBody };
