/* eslint-disable no-undef */
if (process.env.ENV != "production") {
  require("dotenv").config();
}

module.exports = {
  BASE_API: process.env.BASE_API,
  PORT: process.env.PORT || 3001,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || "mongodb://localhost/Portal-Menora",
  JWT_SECRET: "test1234",
};
