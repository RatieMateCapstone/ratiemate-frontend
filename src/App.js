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
import Login from "./pages/SignIn";
import MovieNew from "./pages/MovieNew.js";
import Header1 from "./component/Header1.js"
import Header2 from "./component/Header2.js"
import Header3 from "./component/Header3.js"


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const signup = (userInfo) => {
    fetch(`http://localhost:3000/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      method: 'POST',
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
}

const login = (userInfo) => {
  fetch(`http://localhost:3000/login`, {
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    localStorage.setItem("token", response.headers.get("Authorization"))
    return response.json()
  })
  .then(payload => {
    setCurrentUser(payload)
    console.log("Login successful");
    navigate('/movieindex');
  })
  .catch(error => {
    console.log("Login error: ", error);
    alert("Login Failed")
  });
}

  const createMovie = (movie) => {
    console.log(movie)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInSignUp signup={signup} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movieindex" element={<><Header2 setCurrentUser={setCurrentUser}/> <MovieIndex /></>} />
        <Route path="/movienew" element={<><Header3 /><MovieNew createMovie={createMovie} /></>} />
        <Route path="/movieshow" element={<><Header1 /><MovieShow /></>} />
        <Route path="/movieedit" element={<MovieEdit />} />
        <Route path="/aboutus" element={<><Header1 /><AboutUs /></>} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="*" element={<><Header1 /><NotFound /> </>} />
      </Routes>
    </>
  );
};

export default App;

