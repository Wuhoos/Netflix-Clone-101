import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-red-600 text-5xl font-bold'>NETFLIX</h1>
        <div>
            <Link to="/" className='text-white bg-red-600 px-4 py-2 rounded mr-2'> Home </Link>
            <Link to="movieList" className='text-white bg-red-600 px-4 py-2 rounded mr-2'> Movies </Link>
            <Link to="form" className='text-white bg-red-600 px-4 py-2 rounded mr-2'> Add Movie </Link>
        </div>
    </div>
  )
}

export default NavBar 