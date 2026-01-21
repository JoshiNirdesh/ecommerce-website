import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Test from './components/Test'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'


const App = () => {
      const {showUserLogin}=useAppContext()
     
  return (
    <div>
      <Navbar />
      {showUserLogin?<Login/>:""}
      <Toaster/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
       <Footer/>
   
    </div>
  )
}

export default App
