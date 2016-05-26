var mongoose=require('./model.js');

var Book=mongoose.model('Book');

var cond={
	$or:[
	{"author":"Lynn"},
	{"author":"Da Shen"}
	]
};

Book.find(cond,function(err,docs){
	if(err)
	{
		console.log("err:",err);
		return;
	}
	if(docs)
	{
		console.log("cond:",cond,"docs:",docs);
	}
});