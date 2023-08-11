import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context, server } from '..'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const Navbar = () => {
    const {isauthenticated, setIsauthenticated ,isLoading , setIsLoading} = useContext(Context)
    
    const logoutHAndler = async ()=>{
        
        setIsLoading(true)
        try {
            await axios.get(`${server}/users/logout`,{   
                    withCredentials:true,
                }
            )
            
            toast.success(`Logged Out Successfully`)
            setIsauthenticated(false);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
            setIsauthenticated(true)
        }
        
    }

    return (
    <>
        <div className='bg-gray-700 text-white flex py-2 ' >
            <div className="mx-2 text-xl py-2 cursor-pointer">TODO APP</div>
            <ul className=' mx-20 flex space-x-6 font-medium py-2'>
                <Link to="/" className='cursor-pointer hover:bg-white hover:text-gray-700 border-gray-700 text-white font-medium py-2 px-4  rounded'>Home</Link>
                <Link to="/profile" className='cursor-pointer hover:bg-white hover:text-gray-700 border-gray-700 text-white font-medium py-2 px-4  rounded'>Profile</Link>
                <Link  to="/contact" className='cursor-pointer hover:bg-white hover:text-gray-700 border-gray-700 text-white font-medium py-2 px-4  rounded'>Contact</Link>
            </ul>
            {isauthenticated ? 
                <button disabled={isLoading} onClick={logoutHAndler} className=" hover:bg-white hover:text-gray-700 border-gray-700 text-white font-medium py-3 px-4  rounded absolute right-6">
                    Logout
                </button> :
                <Link to="/login">
                <button  className=" hover:bg-white hover:text-gray-700 border-gray-700 text-white font-medium py-3 px-4  rounded absolute right-6">
                    Login
                </button>
            </Link>}
            
        </div>
    </>
    )
}

export default Navbar
