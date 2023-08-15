const express = require("express");
const path = require("path");

const aboutRouter = express.Router();
aboutRouter.get("/team", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/chamber.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/cypher.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/killjoy.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/sentinel/sage.html")
  );
});

module.exports = aboutRouter;
