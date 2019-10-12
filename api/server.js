const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet");

const server = express();

//global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

module.exports = server;
