const mongoose = require("mongoose");
const {} = require("dotenv/config");

const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/synthetic";
console.log(process.env.MONGODB_URI);
connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true
});

module.exports = mongoose.connection;
