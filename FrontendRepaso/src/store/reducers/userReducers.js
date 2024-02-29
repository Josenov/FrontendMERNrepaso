import {createReducer} from '@reduxjs/toolkit'
import { user_login, user_token } from '../actions/userActions.js'

const initialState = {
    user:null,
    token:null
}

const userReducer = createReducer(initialState, 
    (builder)=>builder
        /* .addCase(user_photo,(state, action)=>{
            return{
                ...state,
                photo:action.payload.photo
            }
        }) */
        
        .addCase(user_login.fulfilled,(state, action)=>{
            return{
                ...state,
                user:action.payload.user,
                token:action.payload.token
            }
        })
        
        .addCase(user_token,(state, action)=>{
            return{
                ...state,
                user:action.payload.user,
                
            }
        })
    )

export default userReducer;