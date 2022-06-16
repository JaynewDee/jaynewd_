export const userAPI = {
  async loginUser(data) {
    try {
      await fetch(`/user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => response);
    } catch (err) {
      console.error(err);
    }
  },
  async createUser(data) {
    console.log(data);
    try {
      await fetch("/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => response);
    } catch (err) {
      console.error(err);
    }
  },
};
