var client=require('./client');

client.subscribe('testPublish');

client.on('message',function(channel,msg){
	console.log('channel:'+channel+' msg:'+msg);
});