var mongoose=require('mongoose');

var NewsSchema=mongoose.Schema({
	title:String,
	author:{
		type:mongoose.Schema.ObjectId,
		ref:'User'
	}
});

mongoose.model('News',NewsSchema);