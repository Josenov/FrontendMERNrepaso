import {createReducer} from '@reduxjs/toolkit'
import { userLoginGoogle, user_login, user_token, userSignOut } from '../actions/userActions.js'

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

        .addCase(userLoginGoogle.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })

        .addCase(userSignOut,(state, action)=>{

            return {
                ...state,
                user:null,
                token:null
            }

        })

        
    )

export default userReducer;