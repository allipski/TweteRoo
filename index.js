import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const tweets = [];
const users = [];
let avatar;

server.get("/tweets", function (req, res) {
    const feed = tweets.slice(-10);
  res.send(feed);
});

server.post("/tweets", function (req, res) {
  const newTweet = {
    username: req.body.username,
    avatar: avatar,
    tweet: req.body.tweet
  };
  tweets.push(newTweet);
  res.send('OK');
});

server.post("/sign-up", function (req, res) {
  users.push(req.body);
    avatar = req.body.avatar;
  res.send("OK");
});

server.listen(5000, function () {
  console.log("Listen on 5000");
});
