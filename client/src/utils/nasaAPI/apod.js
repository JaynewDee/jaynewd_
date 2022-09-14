const getPhoto = async () => {
  return await fetch("/nasa/apod", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => {
      console.error(err);
    });
};

export { getPhoto };
