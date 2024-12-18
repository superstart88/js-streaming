const fs = require("fs");
const path = require("path");
const express = require("express");
const emojis = require("./emojis");
const { save, list } = require("./controllers/authController");

const router = express.Router();

router.post("/", save);
router.get("/", list);

router.use("/emojis", emojis);

module.exports = router;
