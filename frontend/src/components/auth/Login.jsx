import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login({handleLogin}) {

  const navigate = useNavigate();

  const onLoginSubmit = (e) => {
    e.preventDefault();

    // Simulate login
    handleLogin();
    
    // Navigate to home or another route after login
    navigate('/');
  };

    return (
        <div className="flex items-center justify-center min-h-screen ">
          <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-r from-purple-200 to-blue-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700">Login to your account</h2>
            <form  onSubmit={onLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username or Email</label>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border
                   border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
    
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a href="/reset-password" className="text-blue-600 hover:text-blue-500">Forgot password?</a>
                </div>
              </div>
    
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              >
                Login
              </button>
            </form>
    
            <div className="text-sm text-center text-gray-500">
              New user? <a href="/register" className="text-blue-600 hover:text-blue-500">Create an account</a>
            </div>
          </div>
        </div>
      );
  
}

export default Login