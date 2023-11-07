import React, { useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'
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
        <div>
          <form id="form" ref={formRef} onSubmit={handleSubmit}>
             Email: <input type="email" name='email' placeholder="email" />
             <br/>
             Password: <input type="password" name='password' placeholder="password" />
             <br/>
             <input type='submit' value="Login" />
          </form>
            <br />
            <div>Not registered yet, <a href="/signup">Signup</a> </div>
        </div>
    )
}

export default SignIn
