const { MONGO_CONNECTION_STRING } = require("../../server.config"),
  mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};
