var mongoose=require('./model.js');

var Book=mongoose.model('Book');

Book.findOne({author:"Da Shen"},function(err,doc){
	if(err){
		console.log('err:',err);
	}
	doc.author='Lynn';
	doc.save();
	console.log('findOne result:',doc);
});