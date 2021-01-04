const express = require("express");
const message = require("./server/print-message");
const constants = require("./src/constants");
const app = express();
const port = constants.SERVER_PORT;

// enable CORS for testing
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/hello", (req, res) => {
  const curMessage = message.getMessage("This is a test route.");
  res.send(curMessage);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
