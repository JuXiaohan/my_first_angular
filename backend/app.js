const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
const mongoose = require("mongoose");


const app = express();

mongoose
  .connect(
    "mongodb+srv://juxiaohan52_db_user:lGfBeUXKIxmm3rIf@cluster0.khw9h4j.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("connect successfully");
  })
  .catch(() => {
    console.log("connect failed");
  });

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
  Post.find().then((responseData) => {
    res.status(200).json({
      message: "success",
      body: responseData,
    });
  });
});

// "/api/v1/post"
// "/api/v1/order"

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save().then((result) => {
    console.log(result);
    res.status(201).json({
      message: "create successfully",
      postId: result._id,
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      console.log(req.params.id);
      res.status(200).json({ message: "Post Deleted" });
    })
    .catch((error) => {
      console.log(error);
      console.log("error");
    });
});

module.exports = app;