console.log("index logic linked");

var userMatchNum = 0;
    $("#add-btn").on("click", function(event) {
      event.preventDefault();
      var newUser = {
        name: $("#name").val(),
        age: $("#age").val(),
        work: $("#work").val(),
        resturaunts: $("#resturaunts").val(),
        sports: $("#sports").val(),
        reliable: $("#reliable").val(),
        trust: $("#trust").val(), 
        tagLine: $("#tagLine").val()
      };

var userTotal = parseInt(newUser.work + newUser.resturaunts + newUser.sports + newUser.reliable + newUser.trust);
userMatchNum = parseInt(userTotal % 5);
console.log("Match Number:" + userMatchNum);

      $.post("/api/users", newUser)
      .done(function(data) {
        console.log(data);
        alert("Adding User...");
      });
    });


$("#match-btn").on("click", function(){
  $("#matchModal").modal("toggle");
  $.get("/api/users" , function(data) {
        // console.log(data);
    if (data) {
          // $("#name").text(data.name);
          // $("#age").text(data.age);
      for (var i = 0; i < data.users.length; i++) {
          console.log("Number of users: " + data.users.length)
            console.log("user match numbers: " + data.users[i].matchNum);//this is working
          if (data.users[i].matchNum = userMatchNum) { 
              console.log("Matched with: " + data.users[i].name + "_" + data.users[i].age);
              data.matchedUsers.push(data.users[i]);
          }
      }
          for (var i = 0; i < data.matchedUsers.length; i++) {
            $("#matchDiv").append(" matched with: " + data.matchedUsers[i].name + "_" + data.users[i].age + "<br>");
          } 
    }
        else {
          $("#matchDiv").text("sorry, we couldn't find anyone :(");
          $("#stats").hide();
        }
  });
});