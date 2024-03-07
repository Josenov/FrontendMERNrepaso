import { useEffect, useRef } from "react";
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {userLoginGoogle} from '../store/actions/userActions'




const GoogleSignIn = () => {

    const googleButton = useRef();

    const dispatch = useDispatch()
    

    const handleCredentialResponse = async (response)=>{
        //console.log("Encoded JWT ID token: " + response.credential);
        const data = {
            token_id:response.credential
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data)

        console.log(userResponse)

        dispatch(userLoginGoogle(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "1054569201886-us0frl28saphuqpgn4jbn3b25s6oq12u.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }
            );

        }
    }, [])


    return (
        <div ref={googleButton}></div>
    )
}

export default GoogleSignIn