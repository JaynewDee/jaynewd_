const axios = require("axios").default;

const getData = async () => {
  const rings = await axios({
    method: "get",
    url: "https://the-one-api.dev/v2/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return rings.data;
};

module.exports = { getData };
