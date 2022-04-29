const mongoose = require('mongoose');
const uRi = process.env.MONGODB_URI;

mongoose.connect( uRi || 'mongodb://localhost:3001', {
});
console.log(process.env.MONGODB_URI)
module.exports = mongoose.connection;
