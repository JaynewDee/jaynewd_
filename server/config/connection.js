const mongoose = require("mongoose");
const {} = require("dotenv/config");

const URI = process.env.MONGODB_URI;
connect().catch((err) => console.log(err));
// ** Hoisted and called above ** //
async function connect() {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = mongoose.connection;
