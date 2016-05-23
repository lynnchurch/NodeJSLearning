var client=require('./client');

client.sadd('testSet',1);
client.sadd('testSet','a');
client.sadd('testSet','b');
client.sadd('testSet',JSON.stringify({a:1,b:2,c:3}));

client.smembers('testSet',function(err,v){
	console.log('testSet:'+v);
});