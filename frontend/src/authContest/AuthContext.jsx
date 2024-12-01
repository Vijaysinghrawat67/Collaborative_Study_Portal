import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const savedLogedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedAccessToken = localStorage.getItem('accessToken');
    
    if(savedLogedIn && savedAccessToken){
      setIsLoggedIn(true);
      setAccessToken(savedAccessToken);
    } 
  }, []);

  const login = (token) => {
    //console.log('1ST DEBUG setting access token:', token); //debug
    setIsLoggedIn(true);
    setAccessToken(token);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('accessToken', token);
    
  };


  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

 // console.log('AuthContext :', {isLoggedIn, accessToken});

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
