import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducers'

const store = configureStore({
    reducer:{
        userReducer:userReducer
        
    }
})

export default store;