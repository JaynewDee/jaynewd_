const nasa = require("express").Router();
const urls = require("./urls.js");
const { getStarshot } = require("./fetch.js");
const { get } = urls;

nasa.get("/apod", async (req, res) => {
  try {
    res.send(
      await getStarshot(get.photo + `?api_key=${process.env.NASA_API_KEY}`)
    );
  } catch (err) {
    console.error(err);
  }
});

module.exports = nasa;
