var client=require('./client.js');

// client.rpush('testLists','a');
// client.rpush('testLists','b');
// client.rpush('testLists','c');
// client.rpush('testLists',1);
// client.lpush('testLists',2);

for(i=0;i<7;i++)
{
	client.rpop('testLists',function(err,v){
		console.log('pop:'+v);
	});
}

client.lrange('testLists',0,-1,function(err,lists){
	console.log('lists:'+lists);
});