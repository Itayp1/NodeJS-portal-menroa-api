const models = require("../models")(),
  looger = require("./looger"),
  mongooseLoader = require("./mongoose");

module.exports = async (app) => {
  require("./expressLoader")(app);
  looger.info("Express loaded!");

  await mongooseLoader();
  looger.info("MONGO DB loaded and connected!");

  // catch Uncaught error logging them
  require("./logging")();
};
