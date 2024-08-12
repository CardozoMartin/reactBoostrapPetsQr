import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePageViews from './Views/HomePageViews'
import LoginPageViews from './Views/LoginPageViews'
import RegisterPageViews from './Views/RegisterPageViews'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import HelpPageViews from './Views/HelpPageViews'
import { Toaster } from 'sonner'
import CardPetViews from './Views/CardPetViews'
import { useSession } from './Components/Store/UseSession'

const Router = () => {
  const { isLoggedIn, logout, user } = useSession();

  return (
    
    <BrowserRouter>
    <Navbar></Navbar>
    <main>

      <Routes>
        <Route exact path="/" element={<HomePageViews></HomePageViews>} />
        <Route exact path="/login" element={isLoggedIn ? <Navigate to='/' /> :<LoginPageViews></LoginPageViews>} />
        <Route exact path="/register" element={isLoggedIn ?  <Navigate to='/' /> :<RegisterPageViews></RegisterPageViews>} />
        <Route exact path="/help" element={<HelpPageViews></HelpPageViews>} />
        <Route exact path="/pet-details/:petId" element={<CardPetViews />}></Route>
        
     
  
      </Routes>
    </main>
    <Footer></Footer>
    <Toaster position="top-right" richColors />
    </BrowserRouter>
  )
}

export default Router