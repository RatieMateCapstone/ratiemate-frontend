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



const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
console.log(BASE_API_URL)

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([])

  const navigate = useNavigate();

  console.log("user", currentUser)
  console.log("movies", movies)
  console.log("movies", setMovies)

  //read functionality similar to apartment app.
  const readMovies = () => {
    fetch(`${BASE_API_URL}/movies`)
      .then(response => response.json())
      .then(payload => setMovies(payload))
      .catch(error => console.log(error))
  }

  //Attempt to stop duplicating
  // const readMovies = () => {
  //   fetch(`http://localhost:3000`)
  //     .then(response => response.json())
  //     .then(payload => {
  //       // Remove duplicates based on a unique property, like 'id'
  //       const uniqueMovies = Array.from(new Map(payload.map(movie => [movie['id'], movie])).values());
  //       setMovies(uniqueMovies);
  //     })
  //     .catch(error => console.log(error))
  // }
  

  const signup = (userInfo) => {
    fetch(`${BASE_API_URL}/signup`, {
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
    fetch(`${BASE_API_URL}/login`, {
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
    fetch(`${BASE_API_URL}/logout`, {
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
    fetch(`${BASE_API_URL}/movies`,{
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
  const updateMovie = async (updatedMovie, id) => {
    try {
      const response = await fetch(`${BASE_API_URL}/movies/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMovie),
      });
      if (!response.ok) throw new Error('Network response was not ok.');

      const updatedMovies = movies.map(movie =>
        movie.id === +id ? { ...movie, ...updatedMovie } : movie
      );
      setMovies(updatedMovies);
      navigate('/moviesprotectedindex'); 
    } catch (error) {
      console.error('Failed to update movie:', error);
    }
  };
 
  
  //  const deleteMovie = (id) => {
  //    fetch(`https://backend-ratiemate.onrender.com/movies/${id}`, {
  //     headers: {
  //      "Content-Type": "application/json"
  //     },
  //     method: "DELETE"
  //    })
  //     .then((response) => response.json())
  //     .then(() => setMovies())
  //     .catch((errors) => console.log("delete errors:", errors))
  //   }

  const deleteMovie = (id) => {
    fetch(`${BASE_API_URL}/movies/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => handleMovieDeletion(id))
    .catch((errors) => console.log("delete errors:", errors))
  }
  
  
  
    const handleMovieDeletion = (movieId) => {
      setMovies(currentMovies => currentMovies.filter(movie => movie.id !== movieId));
    };
  
  

  return (
    <>
      <Routes>
        <Route path="/" element={<><SignInSignUp signup={signup} /></>} />
        <Route path="/home" element={<><Header4  currentUser={currentUser} logout={logout}/><Home /></>} />
        <Route path="/movieindex" element={<><Header2 currentUser={currentUser} logout={logout}/> <MovieIndex movies={movies} /></>} />
        {/* <Route path="/movieindex" element={ <MovieIndex movies={movies} currentUser={currentUser} logout={logout} />} /> */}
        { currentUser && 
        <Route path="/moviesprotectedindex" element={<><Header1 currentUser={currentUser} logout={logout}/> <MoviesProtectedIndex currentUser={currentUser} deleteMovie={deleteMovie} handleMovieDeletion={handleMovieDeletion} movies={movies} /></>} />
        }
        { currentUser &&
          <Route path="/movienew" 
          element={<><Header3 currentUser={currentUser} logout={logout}/><MovieNew 
          createMovie={createMovie} currentUser={currentUser}/></>} />
        }
        <Route path="/movieshow/:id" element={<><Header1 currentUser={currentUser} logout={logout}/><MovieShow movies={movies} /></>} />
        <Route path="/movieshow2/:id" element={<><Header1 currentUser={currentUser} logout={logout}/><MovieShow2 currentUser={currentUser} movies={movies} /></>} />
        {currentUser &&
          <Route path="/movieedit/:id" element={<><Header1 currentUser={currentUser} logout={logout} /><MovieEdit updateMovie={updateMovie} movies={movies} /></>} />
        }
        <Route path="/aboutus" element={<><Header1 currentUser={currentUser} logout={logout}/><AboutUs /></>} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="*" element={<><Header1 currentUser={currentUser} logout={logout}/><NotFound /> </>} />
      </Routes>
    </>
  );
};
        
        

export default App;

