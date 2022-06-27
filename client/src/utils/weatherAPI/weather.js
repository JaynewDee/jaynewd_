const mainObjectUrl = `http://api.weatherapi.com/v1/current.json?key=50c5f26715e945fe81653451222406&q=Fort Worth&aqi=no`;

export const getWhole = async () => {
  return await fetch(mainObjectUrl, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (response) => {
      return await response.json();
    })
    .then(async (body) => {
      return body;
    });
};
