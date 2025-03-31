import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4  fixed top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between">
            <a href="#" className="text-white text-4xl italic font-bold">Book Haven</a>
            <div className="space-x-8">
                <a href="index.html" className="text-white text-2xl hover:text-gray-400">Home</a>
                <a href="viewBook.html" className="text-white text-2xl hover:text-gray-400">Catalog</a>
                <a href="AboutUs.html" className="text-white text-2xl hover:text-gray-400">About Us</a>
                <button className="bg-blue-500 text-2xl text-white py-2 px-4  rounded hover:bg-blue-600"><a href="UserLogin.html">Log in</a></button>
            </div>    
        </div>
    </nav>
  )
}

export default NavBar