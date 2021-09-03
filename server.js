const express = require('express')();
const http = require('http').createServer(express);
const io = require('socket.io')(http)



io.on('connection', socket => {
               // console.log('new user connection')
               // socket.emit('chat-message', 'hey man its your first time isn"t ')

               socket.on('roomNames', (roomName) => {
                              io.emit('roomName', roomName)
                              console.log(roomName)
               })


})

http.listen(4000, function () {
               console.log('listen on port 4000')
})


// app.use('/get', (req, res, next) => {
//                res.send("<h1>Helllo</h1>")
// })


// app.use('/', (req, res, next) => {
//                res.send('<h1>Welcome Home </h1>')
// })


//  