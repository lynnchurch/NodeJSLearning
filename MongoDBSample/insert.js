var mongoose=require('mongoose');
require('./model.js');

var Book=mongoose.model('Book');

var book=new Book({
	name:"NodeJS Development",
	author:"Da Shen",
	publishTime:new Date()
});

book.save(function(err){
	console.log('save status:',err?'failed':'succeeded');
});