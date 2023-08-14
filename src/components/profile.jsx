import React, { useContext, useEffect } from 'react'
import { Context, server } from '..'
import Loarder from './loarder'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Profile = () => {
    const {isauthenticated ,isLoading , user, setUser} = useContext(Context)
    
    useEffect(()=>{
        axios
            .get(`${server}/users/myprofile`,{
                withCredentials: true
            })
            .then((res)=>{
                setUser(res.data.user)
            })
            .catch(err=>{
                console.log(err)
                toast.error(err.response.data.message);
            })
            // eslint-disable-next-line
    },[])

    if(!isauthenticated) return <Navigate to ={"/login"}/>
    return (
        isLoading?<Loarder/>:(
            
            <div className="bg-grey-lighter min-h-[80vh] flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-1 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Profile</h1>
                        

                            <div className="font-medium text-xl block text-center light w-full p-2 rounded mb-2 text-gray-700">
                                <span className='font-medium text-black'> Name:</span> {user.name}
                            </div> 
                            <div className="font-medium text-xl block text-center light w-full p-2 rounded mb-2 text-gray-700">
                                <span className='font-medium text-black'> Email:</span> {user.email}
                            </div>  
                    </div>
                </div>
            </div> 
            )
            )   
        
        
}

export default Profile
