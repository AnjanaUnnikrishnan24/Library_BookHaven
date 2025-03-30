import React from 'react'

const SignUp = () => {
  return (
    <>
    <div>
    <div className="mt-[80px] flex flex-col md:flex-row items-center justify-center mx-auto my-10 border border-gray-400 bg-slate-300 shadow-xl rounded-lg p-6">
        
        <div className="w-full flex justify-center mb-6">
            <img src="/images/images (2)dsd.jpeg" className="rounded-2xl shadow-md max-h-[400px]" />
        </div>
    
        
        <form className="w-full mt-10 p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h1>
            
            <label className="block text-gray-700 font-medium mb-2">User Type:</label>
            <select id="type" name="type" className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="reader" selected>Reader</option>
                <option value="admin">Admin</option>
            </select>
            
            <label className="block text-gray-700 font-medium mb-2">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
            <input type="tel" id="pno" name="pno" placeholder="Enter your phone number" required className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            
            <label className="block text-gray-700 font-medium mb-2">Address:</label>
            <textarea id="address" name="address" rows="4" placeholder="Enter your address" className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            <label className="block text-gray-700 font-medium mb-2">User Name:</label>
            <input type="text" id="username" placeholder="Enter a secure password" required className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />  
            
            <label className="block text-gray-700 font-medium mb-2">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter a secure password" required className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Sign Up</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignUp