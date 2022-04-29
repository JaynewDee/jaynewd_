const express = require('express')
const path = require('path');
const db = require('./config/connection');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });
 

 db.once('open', () => {
   app.listen(PORT, () => {
     console.log(`API server running on port ${PORT}!`);
   });
 });