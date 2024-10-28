import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';


function Layout() {

  // Step 1: Manage logged-in state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login (you will replace this with your actual login functionality later)  do it later
  // handle with backend - frontend
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
   <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Outlet/>
      <Footer/>
   </>
  );
}

export default Layout