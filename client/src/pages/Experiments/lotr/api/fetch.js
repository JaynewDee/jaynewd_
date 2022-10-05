export const getKey = async () => {
  try {
    return await fetch("/lotr/key", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((key) => key.json())
      .then((json) => json);
  } catch (err) {
    console.log(err);
  }
};
