import React, { useState } from 'react'; // Import 'useState' from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import OfficersLogin from './Components/OfficersLogin';
import List from './Components/List';
import ListLogin from './Components/ListLogin';
import UserRegistration from './Components/UserRegistration'; 
import './App.css'

const App = () => {
  
  const [userType, setUserType] = useState('user');
  
  return (
    <div className="App">
      <List />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
      <div className="user-type-icons">
       
        {userType === 'user' && <span>User Icon</span>}
        {userType === 'admin' && <span>Admin Icon</span>}
        {userType === 'officer' && <span>Officer Icon</span>}
      </div>
      <ListLogin />
      <Routes>
        <Route path="/User-Login" element={< UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/officers-login" element={<OfficersLogin />} />
        <Route path="/register" element={<UserRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
