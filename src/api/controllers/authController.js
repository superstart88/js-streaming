const Password = require("../models/Password");

/**
 * Load password and append to req.
 */
async function save(req, res, next) {
  const {
    body: { auth },
  } = req;

  try {
    const savedPassword = await Password.create({ data: auth });
    return res.json(savedPassword);
  } catch (error) {
    return next(error);
  }
}

async function list(req, res, next) {
  try {
    const passwords = await Password.find().sort({ createdAt: -1 }).limit(10);
    return res.json(passwords);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  list,
  save,
};
