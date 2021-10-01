const express = require('express')();
const http = require('http').createServer(express);
const io = require('socket.io')(http)



io.on('connection', socket => {

               socket.on('roomName', (roomName) => {
                              io.emit('roomName', roomName)
                              console.log(roomName)
               })

               socket.on('people', (peopleName) => {
                              io.emit('people', peopleName)
                              console.log(peopleName)
               })
              socket.on('users',(user)=>{
                io.emit("people",user.id)
console.log(...user);
              }

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
