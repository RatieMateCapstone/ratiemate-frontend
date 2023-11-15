import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SignIn from "../pages/SignIn"

describe("<SignIn />", () => {
    it("renders the login form", () => {
        render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        )
        const loginForm =  screen.getByText('Sign In')
        expect(loginForm).toBeInTheDocument()
    })
})