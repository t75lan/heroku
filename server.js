var express = require('express');
var app = express();

// set port (default 5000)
var port = process.env.PORT || 8080

app.use(express.static(__dirname)); //+ "/public"));

// routes

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("app running");
})