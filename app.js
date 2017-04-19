var express = require("express");
var app = express();
var proxy = require('express-http-proxy');
var compression = require('compression');

app.use(compression());

app.use('/proxy', proxy('www.google.com', {
//  forwardPath: function(req, res) {
//    return require('url').parse(req.url).path;
//  }
}));

app.use('/world', express.static('../world'));

app.use('/', express.static(__dirname + './../frontend-prod'));

app.get('*', function(request, response) {
  response.sendFile('index.html', {root: './../frontend-prod'});
});


//app.get("/",function(req,res){
//        res.send("<h1>Hey lisa!</h1>");
//});

app.listen(80);
