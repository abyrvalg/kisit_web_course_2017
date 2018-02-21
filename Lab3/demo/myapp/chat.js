var express = require('express');
var	app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
var http = require('http').Server(app);

var io = require('socket.io')(http);

io.set('transports', ['websocket']);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function(socket){
	socket.on('sendMsg', function(msg){
		console.log(msg);
		io.emit('recieveMsg', msg);
	})
})

http.listen(3000, function(){
  console.log('listening'+__dirname);
});
    