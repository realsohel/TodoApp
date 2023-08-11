import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
    <>
        <div className="bg-grey-lighter min-h-[80vh] flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-1 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Login</h1>
                    
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        className=" font-medium w-full text-center py-3 rounded  text-white bg-gray-700 hover:bg-white hover:text-gray-700 border hover:border-gray-700 focus:outline-none my-1"
                    >Login</button>
                    <div className="text-grey-dark mt-6">
                        Don’t have an account yet?  
                        <Link to="/register" className="mx-2 text-blue-600 font-medium hover:underline" >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
    </>
    )
}

export default Login
