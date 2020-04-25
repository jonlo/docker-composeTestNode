

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
	app.use(express.static(path.resolve(__dirname, '../dist')));
	res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});
app.listen(8080);




