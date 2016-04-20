/*Required NPM Modules*/
var express = require('express');
var app = express();

/*Get The Necessary Files: html, css, javascript, etc*/
var myMiddleware = express.static('./');
app.use(myMiddleware);

app.use(function(req, res) {
  console.log(req.url);
})

/*Configure Which Port To Listen For LocalHost*/
var port = process.env.PORT || 1337;
app.listen(port, function() {
 console.log("Project #2 (MyVocab) is listening on port " + port);
});
