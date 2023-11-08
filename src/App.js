import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieIndex from "./pages/MovieIndex";
import MovieShow from "./pages/MovieShow";
import MovieEdit from "./pages/MovieEdit";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import SignInSignUp from "./pages/SignUpSignIn";
import SignUp from "./pages/SignUp"; 
import SignIn from "./pages/SignIn";
import MovieNew from "./pages/MovieNew.js";
import UserMovies from "./pages/UserMovies.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const url = 'http://localhost:3000';

  const signup = (userInfo) => {
    return new Promise((resolve, reject) => {
      fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => {
          if (!response.ok) {
            console.error('Signup failed - response:', response);
            reject('Signup failed');
            return;
          }
          localStorage.setItem('token', response.headers.get('Authorization'));
          return response.json();
        })
        .then((user) => {
          setCurrentUser(user);
          console.log('Signup successful:', user);
          resolve(user);
        })
        .catch((error) => {
          console.error('Signup error:', error);
          reject(error);
        });
    });
  };
  const login = (userInfo) => {
    return new Promise((resolve, reject) => {
     fetch(`${url}/login`, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
      },
      body: JSON.stringify(userInfo),
     })
      .then((response) => {
       if (!response.ok) {
        console.error('Login failed - response:', response);
        reject('Login failed');
        return;
       }
       localStorage.setItem('token', response.headers.get('Authorization'));
       return response.json();
      })
      .then((user) => {
       setCurrentUser(user);
       console.log('Login successful:', user);
       resolve(user);
      })
      .catch((error) => {
       console.error('Login error:', error);
       reject(error);
      });
    });
   };
  

  const createMovie = (movie) => {
    console.log(movie)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInSignUp signup={signup} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movieindex" element={<MovieIndex />} />
        <Route path="/movienew" element={<MovieNew createMovie={createMovie} />} />
        <Route path="/usermovies" element={<UserMovies />} />
        <Route path="/movieshow" element={<MovieShow />} />
        <Route path="/movieedit" element={<MovieEdit />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/signin" element={<SignIn login={login}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

