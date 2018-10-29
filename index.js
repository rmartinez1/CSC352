/*var http = require('http')

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!');
	}).listen(8080);
*/

const express = require('express')
const app = express()



//set the temp eng ejs
app.set('view engine','ejs')

//middleware
app.use(express.static('public'))

//routes
app.get('/',(req,res) => {
    res.render('Hi world')
})

//app.get('/',(req,res))

//listen on port 80
server = app.listen(80);

//socket.op instantiation
const io = require('socket.io')(server)

//listen on every connection
io.on('connection', (socket) => {
    console.log('new user connection')
    
    //default username
    socket.username = "Anonymous"
    
    //listen on change_username
    socket.on('change_username'.(data) => {
        socket.username = data.username
    })
    
    //listen on new message
    socket.on('new message'.(data)=> {
    
    //broadcast the new message
    io.sockets.emit('new_message'. {message : data.message, username: socket.username})
    })
    
    //listen on typing
    socket.on('typing',(data) => {
        socket.broadcast.emit('typing', {username: socket.username})
    })
    
})