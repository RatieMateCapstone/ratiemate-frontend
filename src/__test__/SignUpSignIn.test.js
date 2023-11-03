import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignInSignUp from '../pages/SignUpSignIn'

describe("<SignUpSignIn />", () => {
    it("renders a webpage title", () => {
        render(
            <BrowserRouter>
                <SignInSignUp/>
            </BrowserRouter>
        )
        const webTitle = screen.getByRole("heading",  {
            name: /ratie mate/i
        })
        expect(webTitle).toBeInTheDocument()
    })
    it("renders a sign in and sign up button", () => {
        render(
            <BrowserRouter>
                <SignInSignUp/>
            </BrowserRouter>
        )
        const signUp = screen.getByRole('button', {
            name: /sign up/i
        })
        const signIn = screen.getByRole('button', {
            name: /sign in/i
        })

        expect(signUp).toBeInTheDocument()
        expect(signIn).toBeInTheDocument()
    })
})
