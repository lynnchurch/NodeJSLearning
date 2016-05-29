var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var User=mongoose.model('User');
var News=mongoose.model('News');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/test',function(req,res,next){
	var user=new User({
		uid:1,
		userName:'Lynn',
		firstName:'Lynn',
		lastName:'Church',
		nickName:' Fight ',
		blog:'lynnchurch.blog',
		age:22,
		loginStatus:'online',
		desc:'I am a programmer'
	});

	var news=new News({
		title:'I have a dream!',
		author:user
	});

	user.print();

	console.log('fullName:',user.fullName,'userJSON:',JSON.stringify(user));
	user.save(function(err){
		if(err)
		{
			console.log('err:',err);
			return next();
		}
		news.save(function(err){
			if(err){
				return console.log('err:',err);
			}
			News.findOne().populate('author').exec(function(err,doc){
				if(err){
					return console.log('err:',err);
				}
				res.json(doc);
			});
		});
		// User.findByUserName('Lynn',function(err,doc){
		// 	if(err)
		// 	{
		// 		console.log('err:',err);
		// 		return next();
		// 	}
		// 	console.log('findByUserName:',JSON.stringify(doc));
		// });
		// User.find({},function(err,docs){
		// 	if(err)
		// 	{
		// 		console.log('err:',err);
		// 		return next();
		// 	}
		// 	res.json(docs);
		// });
	});
});

module.exports = router;
