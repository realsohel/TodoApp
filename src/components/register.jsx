import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import axios from 'axios';
import { Context, server } from '..';
import { toast } from 'react-hot-toast';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCPassword] = useState("");
    
    const {isauthenticated, setIsauthenticated,isLoading , setIsLoading } = useContext(Context)

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        setIsLoading(true)
        if (password !== Cpassword){
            toast.error("Your password doesn't match.")
            setPassword("")
            setCPassword("")
            return;
        }

        try {
            await axios.post(`${server}/users/new`,
                {
                name , email , password
                },
                {
                headers:{
                    "Content-Type":"application/json",
                },
                withCredentials:true,
                }
            )
            
            toast.success(`Registered Successfully! `)
            setIsauthenticated(true);
            setIsLoading(false)
        } catch (error) {
            toast.error(error.response.data.message);
            
            setIsauthenticated(false)
        }
        
    }
    if(isauthenticated) return <Navigate to ={"/"}/>
    
    return (
    <>
        <div className="bg-grey-lighter min-h-[90vh] flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-1 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={name}
                            placeholder="Full Name"
                            onChange={(e)=>{setName(e.target.value)}} required/>

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e)=>{setEmail(e.target.value)}} required/>

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            value={password}
                            placeholder="Password" 
                            onChange={(e)=>{setPassword(e.target.value)}} required/>
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="Cpassword"
                            value={Cpassword}
                            placeholder="Confirm Password" 
                            onChange={(e)=>{setCPassword(e.target.value)}} required/>

                        <button
                            disabled={isLoading}
                            type="submit"
                            className="btn"
                        >Create Account</button>
                    </form>
                    
                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <Link to="/login" className="mx-2 text-blue-600 font-medium hover:underline " >
                            Log in
                        </Link>
                    </div>
                </div>

                
            </div>
        </div>
    </>
    )
}

export default Register
