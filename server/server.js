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
app.use(express.static("public"));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });
 
app.get('/', (req, res) => {
   console.log('/ route bypassed')
})

app.listen(PORT, () => {
   console.log(`API server running on port ${PORT}!`);
 });
 
 db.once('open', () => {
   
 });