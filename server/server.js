const express = require("express");
const path = require("path");
const db = require("./config/connection");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const nasaRoutes = require("./nasa_api/index.js");

app.use("/user", userRoutes);
app.use("/project", projectRoutes);
app.use("/nasa", nasaRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// other configurations etc for express go here...
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
  );
});
