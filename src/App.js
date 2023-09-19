import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import HOME from './components/Index/HOME';
import Login from './components/Login/Login';
import SignUp from './components/Signup/SignUp';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Navbar/>
      
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
