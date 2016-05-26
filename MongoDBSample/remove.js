var mongoose=require('./model.js');

var Book=mongoose.model('Book');

Book.findOne({author:"Da Shen"},function(err,doc){
	if(err){
		console.log('err:',err);
		return;
	}
	if(doc)
	{
		doc.remove();
	}
	console.log('delete result:',doc);
});