import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/Projects'
import Navbar from './components/navbar/Navbar'
import Fade from "react-reveal/Fade" 

const App = () => {
  return (
    <>
    <div className="w-full h-auto bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-lightText px-4">
    
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path='/projects' element ={< Projects/>} />
        </Routes>
</Router>
</div>
    </>
  )
}

export default App