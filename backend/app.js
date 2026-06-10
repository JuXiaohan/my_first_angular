const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "1st title from server",
      content: "1st content from server",
    },
    {
      id: "2",
      title: "2nd title from server",
      content: "2nd content from server",
    },
  ];


  res.status(200).json({
    message: "success",
    body: posts,
  });
});

// "/api/v1/post"
// "/api/v1/order"

app.post("/api/posts", (req, res, next) => {
  console.log(req.body);

  res.status(200).json({
    message: "success",
  });
});

module.exports = app;