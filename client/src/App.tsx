import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
import AskUrl from './pages/AskUrl';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
<>
    <Routes>
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<AskUrl/>} />    
    </Routes>
    <ToastContainer />
</>
  )
}

export default App