var socket = io({transports: ['websocket'], upgrade: false});;
$(function(){
	$('#chat_from').on('submit', function(e){
		e.preventDefault();
		socket.emit('sendMsg', $(this).find('textarea').val());
		$(this).find('textarea').val('');
	});
	
	socket.on('recieveMsg', function(msg){
		$('#msg-list').append('<div>'+msg+'</div>');
	})
});