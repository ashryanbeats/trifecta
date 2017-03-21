const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = 3000;

const appName = "Trifecta";

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res, next) => res.sendFile(path.join(__dirname, "../client/") + "index.html"));

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

app.use((req, res, next) => {
	res.sendStatus(404);
});

app.use((err, req, res, next) => {
	console.error(err);
	res.sendStatus(500);
});

app.listen(port, (err) => {
	if (err) console.log(`Error: ${err}`);
	console.log(`${appName} listening on port ${port}!`);
});
