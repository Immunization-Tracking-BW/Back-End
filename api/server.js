const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");

//global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes
server.use("/auth", authRoute);

module.exports = server;
