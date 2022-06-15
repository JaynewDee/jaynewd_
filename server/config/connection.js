const mongoose = require("mongoose");

connect().catch((err) => console.log(err));

async function connect() {
  await mongoose.connect(
    proces.env.MONGODB_URI || "mongodb://localhost/populatedb"
  );
}

module.exports = mongoose.connection;
