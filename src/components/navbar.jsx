import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        <div className='bg-gray-700 text-white flex py-2 ' >
            <div className="mx-2 text-xl py-2 cursor-pointer">TODO APP</div>
            <ul className=' mx-20 flex space-x-6 font-medium py-2'>
                <Link to="/" className='cursor-pointer hover:bg-white hover:text-gray-700 px-2 hover:rounded-md'>Home</Link>
                <Link to="/profile" className='cursor-pointer hover:bg-white hover:text-gray-700 px-2 hover:rounded-md'>Profile</Link>
                <Link  to="/contact" className='cursor-pointer hover:bg-white hover:text-gray-700 px-2 hover:rounded-md'>Contact</Link>
            </ul>

            <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4  rounded absolute right-6">
                    Login
                </button>
            </Link>
        </div>
    </>
    )
}

export default Navbar
