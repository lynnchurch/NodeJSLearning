var mongoose=require('mongoose');
var uri='mongodb://lynn:111111@localhost/sample';

mongoose.connect(uri);

var bookSchema=new mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
});

mongoose.model('Book',bookSchema);

module.exports=mongoose;