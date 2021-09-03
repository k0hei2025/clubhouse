import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

export default function Join() {

               const idTokens = useSelector((state) => state.majorStore.token);
               const localId = useSelector((state) => state.majorStore.localId)


               useEffect(() => {

                              console.log('at Join.jsx', localId, idTokens);

               }, [])



               return (
                              <div>

                                             <p> Welcom to Rooom </p>

                              </div>
               )
}
