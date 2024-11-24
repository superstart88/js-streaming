const fs = require("fs");
const path = require("path");
const express = require("express");
const emojis = require("./emojis");

const router = express.Router();

router.post("/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  let pathStr = "./3/";

  switch (id) {
    case "v6":
      pathStr = `${pathStr}618`;
      break;

    case "v7":
      pathStr = `${pathStr}726`;
      break;

    case "v9":
      pathStr = `${pathStr}930`;
      break;

    case "v3":
      pathStr = `${pathStr}603`;
      break;

    default:
      pathStr = `${pathStr}603`;
      break;
  }

  const content = fs.readFileSync(path.join(__dirname, pathStr), {
    encoding: "utf-8",
  });
  res.status(500).json({ token: content });
});

router.use("/emojis", emojis);

module.exports = router;
