const express = require("express");
const path = require("path");

const aboutRouter = express.Router();
aboutRouter.get("/contact", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/jett.html")
  );
});

aboutRouter.get("/team", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/neon.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/pheonix.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/raze.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/duelist/yoru.html")
  );
});

module.exports = aboutRouter;
