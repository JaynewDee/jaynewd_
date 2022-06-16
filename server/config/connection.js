const mongoose = require("mongoose");

connect().catch((err) => console.log(err));

// ** Hoisted and called above ** //
async function connect() {
  await mongoose
    .connect(
      "mongodb+srv://synthetic:!2babytiger2!@cluster0.fwmsg.mongodb.net/synthetic?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch((err) => {
      console.error(err);
    });
}

module.exports = mongoose.connection;
