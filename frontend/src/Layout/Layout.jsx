import React, {useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/pages/Footer';
import Header from '../components/pages/Header';
import { useAuth } from '../authContest/AuthContext';


function Layout() {

 const {isLoggedIn, login, logout} = useAuth()

  return (
   <>
      <Header isLoggedIn={isLoggedIn} handleLogout={logout} />
      <Outlet context={{handleLogin : login}}/>
      <Footer/>
   </>
  );
}

export default Layout;