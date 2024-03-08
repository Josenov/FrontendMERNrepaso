import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'

export const user_photo = createAction('user_photo', (obj)=>{
    return{
        payload:{
            photo:obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj)=>{

    try {

        const {data} = await axios.post('http://localhost:7000/api/auth/signin', obj.data)
            console.log(data)
            localStorage.setItem('token',data.response.token)
            localStorage.setItem('user',JSON.stringify(data.response.user))

            Swal.fire({
                title: 'Welcome ' ,
                text:data.message,
                icon: 'success',
                confirmButtonText: 'Ok'
            })

        return{
            user: data.response.user,
            token: data.response.token
        }
        
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text:error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
        })
        return{
            user:null
        }
    }
    
})

export const userLoginGoogle = createAsyncThunk ('userLoginGoogle', async (obj) =>{

        const body = obj.data ? obj.data : obj
    
        localStorage.setItem('token', body.token)
        localStorage.setItem('user', JSON.stringify(body.user))
        return {
            user: body.user,
            token: body.token
        }
    
})

export const user_token = createAction ('user_token', (user)=>{
    return{
        payload:{
            user
        }
    }
})


export const userSignOut = createAction('reset', ()=>{

    localStorage.removeItem('token')
    
    return {
        payload:{
            payload:null
        }
    }
})