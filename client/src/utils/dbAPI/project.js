export const getOneProject = async (projectName) => {
  console.log(projectName);
  return await fetch("/project/one", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(projectName),
  })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => console.error(err));
};

export const getAllProjects = async () => {
  return await fetch("/project/all", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => console.error(err));
};
