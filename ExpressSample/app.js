var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(express.static(__dirname+'/public'));

app.use('/user',require('./routes/users.js'));

app.listen(80);