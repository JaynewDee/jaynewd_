const mongoose = require("mongoose");
const env = require("../../env");

connect().catch((err) => console.log(err));
// ** Hoisted and called above ** //
async function connect() {
  await mongoose
    .connect(env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = mongoose.connection;
