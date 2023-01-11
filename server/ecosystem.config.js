module.exports = {
  apps: [
    {
      script: "./server.js",
      instances: "max",
      watch: ".",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
