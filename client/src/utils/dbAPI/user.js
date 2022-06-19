export const loginUser = async (data) => {
  return await fetch("/user/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (response) => {
      console.log(response)
      if (response.ok) {
        console.log(`Login successful.`);
        return response.json();
      } else {
        console.log(`Login failed...`);
        throw new Error(`Login failed.`)
      }
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
      console.log(response)
      if (response.status === 200) {
        console.log(`Server response OK`)
        return response.json()
      } else {
        console.log(`Signup failed...`);
        throw new Error(`Signup failed ...`)
      }
      
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
