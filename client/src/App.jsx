import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import Blog from './pages/Blog';

const App = () => {
    const user = false;
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;
