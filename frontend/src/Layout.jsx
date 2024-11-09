import React, {useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';


function Layout() {

 // Step 1: Manage logged-in state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLogedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLogedIn);
  },[]);

  // Simulate login (you will replace this with your actual login functionality later)  do it later
  // handle with backend - frontend

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    
  };

  return (
   <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Outlet context={{handleLogin}}/>
      <Footer/>
   </>
  );
}

export default Layout