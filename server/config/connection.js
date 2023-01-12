const { connect, connection } = require("mongoose");
const {} = require("dotenv/config");

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/synthetic";

connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;
