const child = require('child_process').fork('./fork_child.js');
const server = require('net').createServer();
server.on('connection',function(socket){
    socket.end('Parent handled connection');
});
server.listen(8080,function(){
    child.send("The parrent message", server);
});