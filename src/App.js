import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieIndex from "./pages/MovieIndex";
import MovieShow from "./pages/MovieShow.js"
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
import MovieShow2 from "./pages/MovieShow2.js"
import Header4 from "./component/Header4.js"
import MoviesProtectedIndex from "./pages/MoviesProtectedIndex.js";


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([])

  const navigate = useNavigate();

  console.log("user", currentUser)
  console.log("movies", movies)
  console.log("movies", setMovies)

  const readMovies = () => {
    fetch(`http://localhost:3000/movies`)
      .then(response => response.json())
      .then(payload => setMovies(payload))
      .catch(error => console.log(error))
  }

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
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
      console.log("setCurrentUser", setCurrentUser)
    })
    .catch(error => console.log("login errors: ", error))
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("currentUser")
    if(loggedIn) {
      setCurrentUser(JSON.parse(loggedIn))
    }
    readMovies()
  }, [])

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
      localStorage.setItem("currentUser", JSON.stringify(payload))
      setCurrentUser(payload)
      console.log("Login successful");
      navigate('/movieindex');
      console.log("Payload", payload)
    })
    .catch(error => {
      console.log("Login error: ", error);
      alert("Login Failed")
    });
  }

  const logout = () => {
    fetch(`http://localhost:3000/logout`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      method: "DELETE"
    })
    .then(payload => {
      localStorage.removeItem("token") 
      localStorage.removeItem("currentUser")  
      setCurrentUser(null)
    })
    .catch(error => console.log("log out errors: ", error))
  }

  const createMovie = (newMovie) => {
    console.log(newMovie)
    fetch(`http://localhost:3000/movies`,{
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readMovies())
    .catch((errors) => console.log("New Movie create error:", errors))
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<><SignInSignUp signup={signup} /></>} />
        <Route path="/home" element={<><Header4  currentUser={currentUser} logout={logout}/><Home /></>} />
        <Route path="/movieindex" element={<><Header2 currentUser={currentUser} logout={logout}/> <MovieIndex movies={movies} /></>} />
        { currentUser && 
        <Route path="/moviesprotectedindex" element={<><Header2 currentUser={currentUser} logout={logout}/> <MoviesProtectedIndex currentUser={currentUser} movies={movies} /></>} />
        }
        { currentUser &&
          <Route path="/movienew" element={<><Header3 currentUser={currentUser} logout={logout}/><MovieNew createMovie={createMovie} currentUser={currentUser}/></>} />
        }
        <Route path="/movieshow/:id" element={<><Header1 currentUser={currentUser} logout={logout}/><MovieShow movies={movies} /></>} />
        <Route path="/movieshow2/:id" element={<><Header1 currentUser={currentUser} logout={logout}/><MovieShow2 currentUser={currentUser} movies={movies} /></>} />
        <Route path="/movieedit" element={<MovieEdit />} />
        <Route path="/aboutus" element={<><Header1 currentUser={currentUser} logout={logout}/><AboutUs /></>} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="*" element={<><Header1 currentUser={currentUser} logout={logout}/><NotFound /> </>} />
      </Routes>
    </>
  );
};

export default App;

