const axios = require("axios").default;
const environment = require("../env");
const { AI_API_KEY } = environment;
const getEngines = async (url) => {
  const engineList = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AI_API_KEY}`,
    },
  });
  return engineList.data;
};

const getInstance = async (url) => {
  const instance = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AI_API_KEY}`,
    },
  });
  return instance.data;
};

const postCompletion = async (url, prompt) => {
  const botResponse = await axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AI_API_KEY}`,
    },
    data: {
      prompt: `${prompt}`,
      max_tokens: 36,
      temperature: 0.9,
      n: 1,
      echo: true,
    },
  });
  return botResponse.data;
};

module.exports = {
  getEngines,
  postCompletion,
};
