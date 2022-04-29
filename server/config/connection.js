const mongoose = require('mongoose');
const uRi = process.env.MONGODB_URI;

mongoose.connect( uRi || 'mongodb://localhost/googlebooks', {
});
console.log(process.env.MONGODB_URI)
module.exports = mongoose.connection;
