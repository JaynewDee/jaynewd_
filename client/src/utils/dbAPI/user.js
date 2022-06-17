export const loginUser = async (data) => {
  await fetch("/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        console.log(`Login successful.`);
      } else {
        console.log(`Login failed...`);
      }
    })
    .catch((err) => console.error(err));
};

export const createUser = async (data) => {
  try {
    await fetch("/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.ok) {
          console.log(`Signup Successful.`);
        } else {
          console.log(`Signup failed...`);
        }
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
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
