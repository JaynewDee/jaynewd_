const axios = require("axios").default;

const getStarshot = async (url) => {
  const shinies = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return shinies.data;
};

module.exports = { getStarshot };
