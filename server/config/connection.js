const mongoose = require("mongoose");

connect().catch((err) => console.log(err));

// ** Hoisted and called above ** //
async function connect() {
  await mongoose.connect(
    proces.env.MONGODB_URI || "mongodb://localhost/synthetic"
  ).catch((err) => console.error(err));
}

module.exports = mongoose.connection;