/**
 * App.js
 * 
 * Main entry point of the application with persistent authentication using local storage.
 * It sets up routing for the login, register, and map pages, and manages authentication state.
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Map from './pages/map/map';
import Login from './pages/Login';
import Register from './pages/Register';
import FriendsList from './pages/friendsList/friendsList';
import Profile from './pages/profile/profile';
import Home from './pages/home/home';
import Edit from './pages/edit/edit';
import LoginToView from './pages/loginToView/loginToView';
import FriendRequests from './pages/friendRequests/FriendRequests';
import NotFound from './pages/notFound/notFound'
import WhatIsHOTD from './pages/whatIsHOTD/whatIsHOTD'
import FriendProfile  from './pages/friendProfile/FriendProfile';

/**
 * Main application component that manages routes and authentication state.
 * @returns {JSX.Element} The rendered application with routes.
 */


function App() {
  // Initialize authenticated state from local storage
  const [authenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('authenticated')) || false
  );

  // Update local storage whenever `authenticated` state changes
  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route path="/home"element={<Home/>}/>
        <Route path="/login" element={authenticated ? (<Navigate to="/map" replace />) : (<Login setAuthenticated={setAuthenticated} />)}/>
        <Route path="/friends_list" element={<FriendsList />}/>
        <Route path="/friend-requests" element={<FriendRequests />} />
        <Route path="/profile" element={!authenticated ? (<Navigate to="/loginToView" replace />) : (<Profile />)}/> 
        <Route path="/edit" element={<Edit />}/>
        <Route path="/register" element={authenticated ? (<Navigate to="/map" replace />) : (<Register />)}/>
        <Route path="/map" element={<Map setAuthenticated={setAuthenticated} />}/>
        <Route path="/loginToView" element={<LoginToView />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/what-is-hotd' element={<WhatIsHOTD />}/>
        <Route path="/friend-profile/:id" element={<FriendProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
