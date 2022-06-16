const express = require("express");
const path = require("path");
const db = require('./config/connection');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/api",
  createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
);
const converStationRoutes = require("./ai_API/index.js");
const userRoutes = require("./routes/user");
app.use("/converstation", converStationRoutes);
app.use("/user", userRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
db.once('open', () => {
    app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT} 🚀`)
  );
})

