const lotr = require("express").Router();
const environment = require("../env");
const { LOTR_API_KEY } = environment;

lotr.get("/key", async (req, res) => {
  try {
    res.send(LOTR_API_KEY);
  } catch (err) {
    console.error(err);
  }
});

module.exports = lotr;
