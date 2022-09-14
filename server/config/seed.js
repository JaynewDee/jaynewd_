const db = require("./connection");
const Project = require("../models/Project");
const projectSeeds = require("./projects.json");

db.once("open", async () => {
  try {
    await Project.deleteMany({});
    await Project.create(projectSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Project seeding successful`);
  process.exit(0);
});
