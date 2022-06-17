export const loginUser = async (data) => {
  return await fetch("/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.ok) {
        console.log(`Login successful.`);
      } else {
        console.log(`Login failed...`);
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

export const createUser = async (data) => {
  return await fetch("/user/signup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      if (response.status === 200) {
        console.log(`Signup Successful.`);
      } else {
        console.log(`Signup failed...`);
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

export const deleteAll = async () => {
  await fetch("/user/deleteall", {
    method: "DELETE",
  })
    .then((res) =>
      res.ok
        ? console.log(`All users successfully deleted.`)
        : console.log(`DeleteAllUsers operation failed.`)
    )
    .catch((err) => console.error(err));
};
