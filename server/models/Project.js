const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lang: {
    type: String
  },
  created: {
    type: Date
  },
  license: {
    type: String
  },
  body: {
    type: String
  },
  urls: {
    repo: String,
    clone: String,
    deployment: String
  }
});

const Project = model("Project", projectSchema);

module.exports = Project;
