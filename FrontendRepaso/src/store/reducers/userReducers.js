import {createReducer} from '@reduxjs/toolkit'
import { user_photo } from '../actions/userActions'

const initialState = {
    name:'Jose Maria',
    photo:'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'
}

const userReducer = createReducer(initialState, 
    (builder)=>builder
        .addCase(user_photo,(state, action)=>{
            return{
                ...state,
                photo:action.payload.photo
            }
        })    
    )

export default userReducer;