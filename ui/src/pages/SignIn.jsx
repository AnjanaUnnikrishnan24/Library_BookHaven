import React,{useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: email,
                Password: password
            }),
        });
         const data=await response.json()

        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.msg || 'Login failed');
        }

        localStorage.setItem("token",data.token);

        if (data.role == 'admin'){
            navigate('/dashboard')
        }else{
            navigate('/');
        }
        
    } catch (err) {
        setError(err.message || 'Invalid credentials: Please try again!');
    }
  };

  return (
    <>
    <div>
    <div className="mt-[180px] ml-64 mr-64 mb-10 flex flex-row items-center justify-center border border-gray-400 bg-slate-300 shadow-xl rounded-lg p-6">
    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="w-full flex justify-center mb-6">
            <img src={logo} className="rounded-2xl max-h-[600px]"/>
        </div>
    
        <form onSubmit={handleSignIn} className="w-[1400px] mt-4 p-4 bg-white rounded-lg shadow-md mr-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
            
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email" 
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        
            <label for="password" className="block text-gray-700 font-medium mb-2">Password:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter a secure password"  
              className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button type="submit" className="w-[45%] ml-10 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"> Login </button>
            <p className="text-sm text-gray-600 text-center mt-4">
                    Don't have an account?  
                    <Link to='/SignUp' className="text-green-500 hover:underline ml-1">Sign Up</Link>
                </p>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignIn