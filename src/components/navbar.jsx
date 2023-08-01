import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
        <div className='bg-gray-700 text-white flex py-2 ' >
            <div className="mx-2 text-xl py-2">TODO APP</div>
            <ul className=' mx-20 flex space-x-6 font-medium py-2'>
                <Link to="/" className='cursor-pointer '>Home</Link>
                <Link to="/profile" className='cursor-pointer'>Profile</Link>
                <Link  to="/contact" className='cursor-pointer'>Contact</Link>
            </ul>

            <Link to="/login">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4  rounded absolute right-6">
                    Register
                </button>
            </Link>
        </div>
    </>
    )
}

export default Navbar
