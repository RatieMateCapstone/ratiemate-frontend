import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from "../pages/SignUp"

describe("<SignUp />", () => {
    it("renders a Sign Up title", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const signUpTitle = screen.getByRole('heading', {
            name: /sign up/i
        })
        expect(signUpTitle).toBeInTheDocument()
    })
    it("renders email field", () =>{
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const emailInput = screen.getByPlaceholderText(/email/i)
        expect(emailInput).toBeInTheDocument()
    })
    it("renders username field", () =>{
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const usernameInput = screen.getByPlaceholderText(/username/i)
        expect(usernameInput).toBeInTheDocument()
    })
    it("renders a password confirmation", () => {
      render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
      )  
      const passwordConfInput = screen.getByPlaceholderText(/confirm password/i)
      expect(passwordConfInput).toBeInTheDocument()
    })
})

