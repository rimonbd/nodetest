var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');

});

app.get('/about', function(req, res) {
  res.send('about us');
});

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8000;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

app.listen(port,address, function(){
	console.log("Server running at port : " + port);
});
// app.listen(8080);
// console.log("App listening on port 8080");