import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const SignUp = () => {
  const [fullName,setFullName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) =>{
    e.preventDefault();
    try{
        const response = await fetch('/api/register',{
            method:'POST',
            credentials: 'include',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                Name : fullName,
                PhoneNo: phone,
                Email: email,
                Password: password,                 
            }),
        });

        if(!response.ok) {
            const errData = await response.json();
            throw new Error(errData.msg || 'Signup failed');
        }

        navigate('/SignIn');
    } catch(err) {
        setError(err.message || 'Signup failed: Please try again!')
    }
  };


  return (
    <>
    <div>
    <div className="mt-[80px] flex flex-col md:flex-row items-center justify-center mx-auto my-10 border border-gray-400 bg-slate-300 shadow-xl rounded-lg p-6">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="w-full flex justify-center mb-6">
        <img src={logo} className="rounded-2xl max-h-[600px]"/>
        </div>
    
        
        <form onSubmit={handleSignup} className="w-full mt-10 p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create an Account</h1>
            
            <label className="block text-gray-700 font-medium mb-2">Full Name:</label>
            <input type="text" 
              value = {fullName}
              onChange={(e)=>setFullName(e.target.value)}
              placeholder="Enter your full name" required 
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}  
              placeholder="Enter your email" required 
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            
            <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
            <input type="tel" 
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
              placeholder="Enter your phone number" required 
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            
            <label className="block text-gray-700 font-medium mb-2">Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter a secure password" required className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Sign Up</button>
            <p className="text-center text-sm text-gray-600 mt-4"
            >Already have an account? 
            <Link to='/SignIn' className="text-blue-500 hover:underline">Sign In</Link>
        </p>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignUp