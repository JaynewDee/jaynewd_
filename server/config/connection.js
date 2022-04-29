const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
});
console.log(process.env.MONGODB_URI)
module.exports = mongoose.connection;
