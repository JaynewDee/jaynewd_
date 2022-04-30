const mongoose = require('mongoose');


mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/synthetic", { useNewUrlParser: true})

module.exports = mongoose.connection;
