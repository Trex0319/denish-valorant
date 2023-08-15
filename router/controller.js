const express = require("express");
const path = require("path");

const aboutRouter = express.Router();
aboutRouter.get("/contact", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/astra.html")
  );
});

aboutRouter.get("/team", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/brim.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/harbor.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/omen.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/controller/viper.html")
  );
});

module.exports = aboutRouter;
