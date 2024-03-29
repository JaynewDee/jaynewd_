const express = require("express");
const session = require("express-session");
const path = require("path");
const db = require("./config/connection");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.use(
  session({
    secret: "visionsofveracityvexingviolent",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 8.64 ** 7 }
  })
);

const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const nasaRoutes = require("./nasa_api/index");
app.use("/user", userRoutes);
app.use("/project", projectRoutes);
app.use("/nasa", nasaRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
  );
});
