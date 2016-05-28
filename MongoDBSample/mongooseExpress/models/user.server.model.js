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
		set:function(url){
			if(!url)
			{
				return url;
			}
			if(0!==url.indexOf('http://') && 0!==url.indexOf('https://'))
			{
				url='http://'+url;
				return url;
			}
		},
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
	lastLogin:Date
});

UserSchema.virtual('fullName').get(function(){
	return this.firstName+' '+this.lastName;
});

UserSchema.set('toJSON',{virtuals:true});

mongoose.model('User',UserSchema);