const mongoose = require('mongoose');
const uRi = process.env.MONGODB_URI;

mongoose.connect( process.env.PORT || 3000)

module.exports = mongoose.connection;
