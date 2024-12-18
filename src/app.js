const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { mongoUri } = require("./api/consts");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");
const authRoutes = require("./api/auth");

const app = express();

mongoose.connect(mongoUri);

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/defy", api);

app.use("/auth", authRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
