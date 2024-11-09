import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx';
import Home from'./components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'
import Login from './components/auth/Login.jsx'
import Registration from './components/auth/Registration.jsx'
import ForgotPassword from './components/auth/ForgotPassword.jsx'
import UserProfile from './components/auth/UserProfile.jsx'

import Notes from './components/service/Notes.jsx';
import ToDo from './components/service/ToDo.jsx';
import Web from './components/service/Web.jsx';
import Youtube from './components/service/Youtube.jsx';
import Homework from './components/service/Homework.jsx';
import Book from './components/service/Book.jsx'
import Calculator from './components/service/Calculator.jsx'
import Dictionary from './components/service/Dictionary.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Registration/>}/>
    <Route path='reset-password' element={<ForgotPassword/>}/>
    <Route path='profile' element={<UserProfile/>}/>
    <Route path='services' element={<Services/>}>
      {/* <Route path='notes' element={<Notes/>}/>
      <Route path='todo' element={<ToDo/>}/>
      <Route path='web-search' element={<Web/>}/>
      <Route path='youtube' element={<Youtube/>}/>
      <Route path='homework' element={<Homework/>}/>
      <Route path='book' element={<Book/>}/>
      <Route path='calculator' element={<Calculator/>}/>
      <Route path='dict' element={<Dictionary/>}/> */}
    </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    < RouterProvider router={router}/>
  </StrictMode>,
)
