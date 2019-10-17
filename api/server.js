const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");
const childRoute = require("../child/child-route.js");
const immunizationRouter = require("../immunzations/immunization-route.js");

//global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes
server.use("/auth", authRoute);
server.use("/parent", childRoute);
server.use("/child", immunizationRouter);

module.exports = server;
