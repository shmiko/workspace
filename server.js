var express = require("express");

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));


app.get('*', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

exports.index = function(req, res){
res.render('/index', { title: 'ejs' });};

app.listen(3000);

