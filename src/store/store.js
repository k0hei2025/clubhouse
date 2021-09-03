import { createSlice, configureStore } from '@reduxjs/toolkit'

let initialState = {
               localId: '',
               token: ''
}


const MajorStore = createSlice({
               name: 'state',
               initialState: initialState,
               reducers: {
                              storingId(state, action) {


                                             state.token = action.payload.tokenID;
                                             state.localId = action.payload.userId;


                              },
                              incrementToken(state, action) {
                                             state.token = state.token + 'dsadasdasd';
                                             state.localId = state.token + 'dsadasdasd';

                              }
               }
})

export const store = configureStore({
               reducer: {
                              majorStore: MajorStore.reducer
               }

})

export const MajorStoreAction = MajorStore.actions