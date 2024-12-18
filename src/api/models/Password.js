/*!
 * Module dependencies
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Password schema
 */

const PasswordSchema = new Schema({
  data: { type: String, default: "" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

PasswordSchema.method({});

/**
 * Statics
 */

PasswordSchema.static({});

/**
 * Register
 */

module.exports = mongoose.model("Password", PasswordSchema);
