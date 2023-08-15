const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const aboutRouter = require("./router/controller");
const aboutDuelist = require("./router/duelist");
const aboutInitiator = require("./router/initiator");
const aboutSentinel = require("./router/sentinel");
// Serve static files
app.use(express.static("public"));
app.use("/controller", aboutRouter);
app.use("/duelist", aboutDuelist);
app.use("/initiatort", aboutInitiator);
app.use("/sentinel", aboutSentinel);

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + "/public/index.html"));
});
// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
