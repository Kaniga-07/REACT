import React from 'react';
import Homepage from './components/HomePage';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/LoginForm" element={<LoginForm />}></Route>
          <Route path="/SignupForm" element={<SignupForm />}></Route>     
        </Routes>
      </Router>
    
  );
}

export default App;