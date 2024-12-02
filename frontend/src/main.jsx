import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './authContest/AuthContext.jsx';

import Layout from './Layout/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Login from './components/auth/Login.jsx';
import Registration from './components/auth/Registration.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import UserProfile from './components/auth/UserProfile.jsx';
import NotesContainer from './components/service/NotesRoute/Notes/NotesContainer.jsx';
import ToDo from './components/service/ToDo.jsx';
import Web from './components/service/Web.jsx'
import Homework from './components/service/Homework.jsx';
import Book from './components/service/Book.jsx';
import Calculator from './components/service/Calculator.jsx';
import Dictionary from './components/service/Dictionary.jsx';
import CreateNote from './components/service/NotesRoute/Notes/CreateNote.jsx';
import NotesList from './components/service/NotesRoute/Notes/NotesList.jsx';
import PrivateRoute from './components/service/NotesRoute/PrivateRouteNote.jsx';  // Private route for protecting routes
import YoutubeHome from './components/service/Youtube/YoutubeHome.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
      <Route path='reset-password' element={<ForgotPassword />} />
      <Route path='services' element={<Services />} />
      <Route path='profile' element={<UserProfile />} />

      {/* Private Routes (requires authentication) */}
      <Route path='services/notes/*' element={<PrivateRoute element={<NotesContainer />} />}>
        <Route path='create' element={<CreateNote />} />
        <Route path='list' element={<NotesList />} />
      </Route>

      <Route path='services/youtube' element={<PrivateRoute element={<YoutubeHome/>} />} />
      <Route path='services/todo' element={<PrivateRoute element={<ToDo />} />} />
      <Route path='services/web-search' element={<PrivateRoute element={<Web />} />} />
      
      <Route path='services/homework' element={<PrivateRoute element={<Homework />} />} />
      <Route path='services/book' element={<PrivateRoute element={<Book />} />} />
      <Route path='services/calculator' element={<PrivateRoute element={<Calculator />} />} />
      <Route path='services/dict' element={<PrivateRoute element={<Dictionary />} />} />
    </Route>
  )
);

const App = () => {
  const {isLoggedIn, logout}  = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/login')
    }
  }, [isLoggedIn, navigate]);

  return(
    <RouterProvider router={router}/>
  );  
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
         <App/>
      </RouterProvider>
      
    </AuthProvider>
  </StrictMode>
);
