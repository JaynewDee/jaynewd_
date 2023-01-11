const lotr = require("express").Router();
const { getData } = require("./fetch.js");
const environment = require("../env");

lotr.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

module.exports = lotr;
