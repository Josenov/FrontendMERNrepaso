import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {user_login} from '../store/actions/userActions.js'

const SignIn = () => {

    const store = useSelector(store => store.userReducer);
    console.log("viene del store",store)

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });


    const dispatch = useDispatch();

    const handleInput = (event) =>{
        //console.log(event.target.name,event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log(formData)

    const handleSignIn = async(event) => {
        event.preventDefault();

        try {
            
            dispatch(user_login({
                data: formData
            }))

        } catch (error) {
            console.error
        }
        
        /* const userData = {
            photo:'https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-01/692933-leo-20messi-20copa-20del-20mundo.jpeg?h=fcdc4171&itok=rWyK-jw9'
        }

        dispatch(user_photo(userData)) */




    }


    return (
        <>


        {/* Plugins:
        - @tailwindcss/forms */}


            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                            ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <form onSubmit={handleSignIn} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    onChange={handleInput}
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    onChange={handleInput}
                                    type="password"
                                    name='password'
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                No account?
                                <a className="underline" href="">Sign up</a>
                            </p>

                            <button
                            onClick={handleSignIn}
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://i.etsystatic.com/22977238/r/il/fd8190/2371970288/il_fullxfull.2371970288_t1t2.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
        </>
    )
}

export default SignIn