var http=require('http');
var requestHanlder=function(req,res){
	res.end('Hello,I\'m Lynn.\n');
};

var web=http.createServer(requestHanlder);

web.listen(2525);

console.log('http is running on http://localhost:2525');