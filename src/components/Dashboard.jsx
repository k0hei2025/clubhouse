import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket'] })


export default function Dashboard() {

               const textRef = useRef();
               const [roomList, setRoomList] = useState([]);


               useEffect(() => {

                              socket.on('roomName', roomName => {
                                             setRoomList(roomName)
                              })

               }, [])



               const submitHandler = (event) => {
                              event.preventDefault();
                              console.log(textRef.current.value);

                              socket.emit('roomName', textRef.current.value)



               }



               return (
                              <div>
                                             Welcome to dashboard



                                             <form onSubmit={submitHandler} >

                                                            <input type="text" placeholder="Enter RoomName" ref={textRef} />
                                                            <input type='submit' />

                                             </form>


                                             <p>Rooms </p>

                                             <b>{roomList}</b>
                              </div >
               )
}
