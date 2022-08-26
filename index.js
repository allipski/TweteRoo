import express from "express";

const server = express();

server.get("/tweets", function (req, res) {
  res.send("Carregar os últimos 10 tweets");
});

server.post("/sign-up", function (req, res) {
  res.send("Fazer o login");
});

server.post("/tweets", function (req, res) {
  res.send("Postar um tweet");
});

server.listen(5000, function () {
  console.log("Listen on 5000");
});