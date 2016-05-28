var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var User=mongoose.model('User');

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
		blog:'lynnchurch.blog'
	});

	user.print();

	console.log('fullName:',user.fullName,'userJSON:',JSON.stringify(user));
	user.save(function(err){
		if(err)
		{
			console.log('err:',err);
			return next();
		}
		User.findByUserName('Lynn',function(err,doc){
			if(err)
			{
				console.log('err:',err);
				return next();
			}
			console.log('findByUserName:',JSON.stringify(doc));
		});
		User.find({},function(err,docs){
			if(err)
			{
				console.log('err:',err);
				return next();
			}
			res.json(docs);
		});
	});
});

module.exports = router;
