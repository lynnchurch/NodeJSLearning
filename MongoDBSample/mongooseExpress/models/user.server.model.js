var mongoose=require('mongoose');

var UserSchema=mongoose.Schema({
	uid:Number,
	userName:{
		type:String,
		unique:true
	},
	firstName:String,
	lastName:String,
	nickName:{
		type:String,
		default:'ABC',
		trim:true,
		index:true
	},
	createTime:{
		type:Date,
		default:Date.now
	},
	blog:{
		type:String,
		// set:function(url){
		// 	if(!url)
		// 	{
		// 		return url;
		// 	}
		// 	if(0!==url.indexOf('http://') && 0!==url.indexOf('https://'))
		// 	{
		// 		url='http://'+url;
		// 		return url;
		// 	}
		// },
		get:function(url){
			if(!url)
			{
				return url;
			}
			if(0!==url.indexOf('http://') && 0!==url.indexOf('https://'))
			{
				url='http://'+url;
				return url;
			}
		}
	},
	age:{
		type:Number,
		required:true,
		max:150,
		min:0
	},
	lastLogin:Date,
	loginStatus:{
		type:String,
		enum:['online','offline']
	},
	desc:{
		type:String,
		match:/I/g,
		validate:function(desc){
			return desc.length>=10;
		}
	}
});

UserSchema.virtual('fullName').get(function(){
	return this.firstName+' '+this.lastName;
});

UserSchema.set('toJSON',{virtuals:true});

// 静态方法
UserSchema.statics.findByUserName=function(username,cb){
	this.findOne({userName:username},function(err,doc){
		cb(err,doc);
	});
};

// 实例方法
UserSchema.methods.print=function(){
	console.log('UserInfo:');
	console.log('userJson:',JSON.stringify(this));
	console.log('\tUserName:',this.userName);
	console.log('\tblog:',this.blog);
	console.log('\tcreateTime:',this.createTime);
};

mongoose.model('User',UserSchema);