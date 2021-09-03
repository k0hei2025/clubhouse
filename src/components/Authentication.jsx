import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MajorStoreAction } from "../store/store"
import { Link } from 'react-router-dom'

export default function Authentication() {

               const url = 'AIzaSyBdXOzCGVpQIKU-KC0vqxv8GNW2Z1jtpG4';

               const [login, setLogin] = useState();


               const dispatch = useDispatch();


               const tokenIdS = useSelector((state) => state.majorStore.token);
               const localIdS = useSelector((state) => state.majorStore.localId)

               console.log('tokenIds', tokenIdS, 'localIds', localIdS);




               const nameRef = useRef();
               const passwordRef = useRef();


               const submitHandler = async (event) => {
                              event.preventDefault();

                              if (login) {
                                             console.log(nameRef.current.value, passwordRef.current.value)
                                             const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${url}
`, {
                                                            method: "POST",
                                                            body: JSON.stringify({
                                                                           email: nameRef.current.value,
                                                                           password: passwordRef.current.value,
                                                                           returnSecureToken: true
                                                            }),
                                                            headers: {
                                                                           "Content-Type": "application/json"
                                                            }
                                             })

                                             const resData = await data.json();

                                             dispatch(MajorStoreAction.storingId({
                                                            tokenID: resData.idToken,
                                                            userId: resData.localId
                                             }))


                                             console.log(resData);

                                             console.log(resData.idToken, resData.localId)
                              }
                              if (!login) {

                                             const data = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${url}

`, {
                                                            method: "POST",
                                                            body: JSON.stringify({
                                                                           email: nameRef.current.value,
                                                                           password: passwordRef.current.value,
                                                                           returnSecureToken: true
                                                            }),
                                                            headers: {
                                                                           "Content-Type": "application/json"
                                                            }
                                             })

                                             const resData = await data.json();


                                             console.log(resData);

                                             console.log(resData.idToken, resData.localId)


                              }
               }


               const changeHandler = () => {
                              setLogin(!login);
                              console.log(login)
               }


               return (
                              <div>
                                             {login ? <h1>  Login Form</h1> : <h1>Signup Form</h1>}

                                             <form onSubmit={submitHandler}>
                                                            <input type='text' placeholder="name" ref={nameRef} />
                                                            <input type='password' placeholder="password" ref={passwordRef} />
                                                            <input type='submit' />

                                                            <button onClick={changeHandler} >{login ? <p> loginForm </p> : <p> Signup </p>} </button>
                                                            <Link to='/joinRoom'>    <button>Go without Auth</button></Link>

                                             </form>


                              </div>
               )
}
