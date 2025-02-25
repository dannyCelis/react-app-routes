import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './commons/AuthProvider';
import ProtectedRoute from './commons/ProtectecRoute';
import Home from './components/Home';
import Login from './components/Login';
import AuthHandler from './commons/Authhandler';

function App() {

  return (
    <AuthProvider>
      <Router>
        <AuthHandler />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
