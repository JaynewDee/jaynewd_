const axios = require("axios").default;

const getStarshot = async (url) => {
  const shinies = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(shinies.data);
  return shinies.data;
};

module.exports = { getStarshot };
