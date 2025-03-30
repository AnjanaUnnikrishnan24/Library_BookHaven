import React from 'react'

const SignIn = () => {
  return (
    <>
    <div>
    <div className="mt-[180px] ml-10 mr-10 mb-20 flex flex-row items-center justify-center border border-gray-400 bg-slate-300 shadow-xl rounded-lg p-6">
        
        <div className="w-full flex justify-center mb-6">
            <img src="/images/cropped-Book-Haven.png" className="rounded-2xl max-h-[200px]"/>
        </div>
    
        
        <form className="w-[1400px] mt-4 p-4 bg-white rounded-lg shadow-md mr-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
           
            <label for="type" className="block text-gray-700 font-medium mb-2">User Type:</label>
            <select id="type" name="type" className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="reader" selected>Reader</option>
                <option value="admin">Admin</option>
            </select>
            
            <label for="name" className="block text-gray-700 font-medium mb-2">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        
            <label for="password" className="block text-gray-700 font-medium mb-2">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter a secure password"  className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            
            <button type="submit" className="w-[45%] ml-10 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"><a href="Reader.html">Login</a></button>

            <p className="mt-10">Don't have an account?? &nbsp; &nbsp; <span className="text-blue-400"><a href="signUp.html">SignUp</a></span></p>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignIn