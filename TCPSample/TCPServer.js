var net=require('net');

const ADDRESS='localhost';
const PORT=1258;

var connectionHandler=function (socket) {
	console.log('client connected');

	socket.on('data',function dataHandler(data){
		console.log(socket.remoteAddress,socket.remotePort,'send',data.toString());
		socket.write('server received data\n');
	});

	socket.on('close',function(){
		console.log('Client disconnected');
	});
}

var server=net.createServer(connectionHandler);

server.listen(PORT,ADDRESS);
console.log('TCPServer running on',ADDRESS,PORT);

