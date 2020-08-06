const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ hello: "web 32" });
});

module.exports = server;
