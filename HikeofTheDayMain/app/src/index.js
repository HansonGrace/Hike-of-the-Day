import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from "./pages/home/home"
import Map from "./pages/map/map"

import Profile from "./pages/profile/profile"
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import FriendsList from './pages/friendsList/friendsList'
import Edit from './pages/edit/edit';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/map' element={<Map />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends_list' element={<FriendsList />} />
        <Route path='/edit' element={<Edit />}/>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
