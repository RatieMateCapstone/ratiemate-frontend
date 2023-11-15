import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header1 from "../component/Header1"

describe("<Header1 />", () => {
    it("renders a web title", () => {
        render(
            <BrowserRouter>
                <Header1 />
            </BrowserRouter>
        )
        const webTitle = screen.getByText(/ratie mate/i)
        expect(webTitle).toBeInTheDocument()
    })
    it("renders navigating link to view all ", () => {
        render(
            <BrowserRouter>
                <Header1 />
            </BrowserRouter>
        )
        const moviesLink = screen.getByRole('link', {
            name: /all movies/i
        })
        expect(moviesLink).toBeInTheDocument()
    })
    it("renders a sign in button", () => {
        render(
            <BrowserRouter>
                <Header1 />
            </BrowserRouter>
        )
        const signinButton = screen.getByRole('link', {
            name: /sign in/i,
            hidden: true
        })
        expect(signinButton).toBeInTheDocument()
    })
})