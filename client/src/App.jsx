import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import Blog from './pages/Blog';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUser = async () => {
        await fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
          .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
          })
          .then((resObject) => {
            console.log(resObject);
            setUser(resObject.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getUser();
    }, []);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/login" element={ user ? <Navigate to='/'/> :<Login /> } />
            <Route path="/blog" element={ user ? <Blog />: <Navigate to='/login'/> } />
          </Routes>
        </BrowserRouter>
      );
}

export default App;
