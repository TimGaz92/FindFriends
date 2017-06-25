var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var users = [
	{name: "test user",
	age: 33,
	work: 5,
	sports: 5, 
	resturaunts: 5, 
	sports: 5, 
	reliable: 5, 
	trust: 5},  
];

var matchedUsers = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});//working

app.get("/matches", function(req, res) {
  res.sendFile(path.join(__dirname, "matches.html"));
});//working

app.post("/api/users", function(req, res) {
  var newUser = req.body;

  console.log(newUser);

  users.push(newUser);

  res.json(newUser);
});//not working


app.get("/api/users", function(req, res) {
 // var chosen = req.params.characters;

//matching algorithm 
for (var i = 0; i < users.length; i++) {
	var workMatch = users[i].work  / newUser.work;
	var resturauntsMatch = users[i].resturaunts / newUser.resturaunts;
	var sportsMatch = users[i].sports / newUser.sports;
	var reliableMatch = users[i].reliable / newUser.reliable;
	var trustMatch = users[i].trust / newUser.trust;
var matchNum = workMatch + resturauntsMatch + sportsMatch + reliableMatch + trustMatch; 
	if (matchNum > 1) {
		matchedUsers.push(users[i]);
	}
}

   return res.json(users);

});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});