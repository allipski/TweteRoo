import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const tweets = [];
const users = [];

server.get("/tweets", function (req, res) {
  res.send(tweets);
});

server.post("/tweets", function (req, res) {
  res.send("Postar um tweet");
});

server.post("/sign-up", function (req, res) {
  users.push(req.body);
  res.send(users);
});

server.listen(5000, function () {
  console.log("Listen on 5000");
});
