import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        {/* admin pages */}
      

  

      
      </Routes>
    </BrowserRouter>
  )
}

export default App;