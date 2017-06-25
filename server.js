var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var users = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});//working

app.get("/matches", function(req, res) {
  res.sendFile(path.join(__dirname, "matches.html"));
});//working

app.post("/api/new", function(req, res) {
  var newUser = req.body;
  newUser.routeName = newUser.name;

  console.log(newUser);

  users.push(newUser);

  res.json(newUser);
});//not working




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});