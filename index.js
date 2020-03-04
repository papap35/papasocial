var path = require("path");
var express = require("express");
// var botServer = require("./bot");
var app = express();

// app.use(botServer);

app.get("/", function(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.sendfile(path.join(__dirname, "public", "index.html"));
});

// app.get("/", function(req, res) {
//   res.send("😈");
// });

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

