import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4  fixed top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between">
            <a href="#" className="text-white text-4xl italic font-bold">Book Haven</a>
            <div className="space-x-8">
              <Link to='/' className="text-white text-2xl hover:text-gray-400">Home</Link>
              <Link to='catalog' className="text-white text-2xl hover:text-gray-400">Catalog</Link>
              <Link to='catalog' className="text-white text-2xl hover:text-gray-400">Catalog</Link>
              <Link to='catalog' className="text-white text-2xl hover:text-gray-400">Catalog</Link>
              <Link to='catalog' className="text-white text-2xl hover:text-gray-400">Catalog</Link>   
            </div>    
        </div>
    </nav>
  )
}

export default NavBar