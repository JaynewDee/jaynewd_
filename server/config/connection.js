const mongoose = require('mongoose');
const uRi = process.env.MONGODB_URI;

mongoose.connect( 'mongodb+srv://jaynewdee:!2babytiger2!@cluster0.fwmsg.mongodb.net/synthetic?retryWrites=true&w=majority')

module.exports = mongoose.connection;
