import React, { useRef } from "react";
import { useNavigate, NavLink } from 'react-router-dom'
import Footer from "../component/Footer"


const SignIn = ({login}) => {
  const formRef = useRef()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo)
    navigate('/movieindex')
    e.target.reset()
  }

  return(
    <body id="signinsignup">
      <div id="content-container">
        <form id="form" ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign In</h1>
            Email: 
            <input type="email" name='email' placeholder="email" />
            <br/>
            Password: 
            <input type="password" name='password' placeholder="password" />
            <br/>
            <input type='submit' value="Login" />
          <div>
            Not registered yet, 
          <NavLink to="/signup">
            Sign Up
          </NavLink> 
          </div>
        </form>
      </div>
      <Footer />
    </body>
  )
}

export default SignIn
