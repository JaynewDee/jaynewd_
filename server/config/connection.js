const { connect, connection } = require("mongoose");
require("dotenv").config();

const URI = "mongodb://127.0.0.1:27017/synthetic";

connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true
});

module.exports = connection;
