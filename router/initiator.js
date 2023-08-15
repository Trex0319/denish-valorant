const express = require("express");
const path = require("path");

const aboutRouter = express.Router();
aboutRouter.get("/contact", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/breach.html")
  );
});

aboutRouter.get("/team", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/gekko.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/kayo.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/skye.html")
  );
});

aboutRouter.get("/", (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "public/assets/initiator/sova.html")
  );
});

module.exports = aboutRouter;
