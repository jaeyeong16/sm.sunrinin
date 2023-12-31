import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './components/Navigation';
import Login from './routes/login'
import Signup from './routes/signup'
import Profile from './routes/profile'
import Video from './routes/video';

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" exact={true} element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/video" element={<Video/>} />
      </Routes>
      <Navigation />
    </HashRouter>
  );
}

export default App;
