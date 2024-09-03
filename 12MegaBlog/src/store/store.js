import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store=configureStore({
    reducer:{
        auth:authSlice,
        //ToDo: add more slices here for posts.
    }
    // reducer:authSlice //also works
})

export default store