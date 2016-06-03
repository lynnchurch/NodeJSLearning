var net=require('net');

const ADDRESS='localhost';
const PORT=1258;

var client=net.Socket();

client.connect(PORT,ADDRESS,function(){
	console.log('connect success');
	client.write('I\'m Client.');
});

client.on('data',function(data){
	console.log('received data:',data.toString());
});

client.on('close',function(){
	console.log('Server disconnected');
});