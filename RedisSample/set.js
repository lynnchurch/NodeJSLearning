"use strict";
var redis=require('redis');
var client=redis.createClient(6379,'127.0.0.1');

Object.prototype.toString=function(){
	return JSON.stringify(this);
};

client.set('name','lynn');
client.set('age','26');
client.set('obj',{a:1,b:2});

client.get('name',function(err,v){
	console.log('name:'+v);
});
client.get('age',function(err,v){
	console.log('age:'+v);
});
client.get('obj',function(err,v){
	console.log('obj:'+v);
});