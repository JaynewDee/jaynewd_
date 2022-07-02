const router = require("express").Router();
const Project = require("../models/Project");

router.post("/one", async (req, res) => {
  const project = await Project.findOne(req.body);
  return res.json(project);
});

router.post("/all", async (req, res) => {});

module.exports = router;
