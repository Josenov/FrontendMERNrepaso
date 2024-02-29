import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducers'
import cityReducer from './reducers/cityReducers'

const store = configureStore({
    reducer:{
        userReducer:userReducer,
        cityReducer:cityReducer
        
    }
})

export default store;