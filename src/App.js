import React from "react";
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import MovieIndex from "./pages/MovieIndex"
import MovieShow from "./pages/MovieShow"
import MovieEdit from "./pages/MovieEdit"
import NotFound from './pages/NotFound'
import AboutUs from "./pages/AboutUs"
import SignInSignUp from "./pages/SignUpSignIn"
import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<SignInSignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movieindex" element={<MovieIndex />}></Route>
        <Route path="/movieshow" element={<MovieShow />}></Route>
        <Route path="/movieedit" element={<MovieEdit />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
  
    </>
  )

}

export default App