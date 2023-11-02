import { getByAltText, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignIn from "../pages/SignIn"

describe("<SignIn />", () => {
    it("renders a Sign In title", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const signInTitle = screen.getByRole('heading', {
            name: /sign in/i
        })
        expect(signInTitle).toBeInTheDocument()
    })
    it("renders username field", () =>{
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const usernameInput = screen.getByPlaceholderText(/username/i)
        expect(usernameInput).toBeInTheDocument()
    })
    it("renders password field", () =>{
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const passwordField = screen.getByPlaceholderText(/password/i)
        expect(passwordField).toBeInTheDocument()
    })
})