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
	reliable: 5, 
	trust: 5},  
];

var matchedUsers = [];
var allUsers = {users, matchedUsers};

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

  res.json(matchedUsers);
});//not working


app.get("/api/users", function(req, res) {
 // var chosen = req.params.characters;
var newUser = req.body;
//matching algorithm 
for (var i = 0; i < users.length; i++) {
var total = users[i].work + users[i].sports + users[i].resturaunts + users[i].reliable + users[i].trust;
var averageScore = total / 5;
users[i].matchNum = averageScore;	
	}

   return res.json(allUsers);

});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});