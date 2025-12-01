module.exports = {
  apps: [
    {
      name: "server",
      script: "./server.js",
      cwd: "./",
      env: {
        DB_HOST: "todo-app.cfqoiysiskyl.ap-south-1.rds.amazonaws.com",
        DB_USER: "admin",
        DB_PASSWORD: "Havi#9698",
        DB_NAME: "todo-app",
        PORT: 5000
      }
    }
  ]
};
