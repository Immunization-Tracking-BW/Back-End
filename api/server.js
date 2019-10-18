const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");
const parentRoute = require("../parents/parent-route.js");
const providerRoute = require("../providers/provider-route.js");
const immunizationRouter = require("../immunzations/immunization-route.js");

//Global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Routes
server.use("/auth", authRoute);
server.use("/parent", parentRoute);
server.use("/provider", providerRoute);
server.use("/child", immunizationRouter);

module.exports = server;
