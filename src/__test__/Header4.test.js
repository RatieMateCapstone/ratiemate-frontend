import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header4 from "../component/Header4"

describe("<Header4 />", () => {
    it("renders a web page title", () => {
        render(
            <BrowserRouter>
                <Header4 />
            </BrowserRouter>
        )
        const webPage = screen.getByText(/ratie mate/i)
        expect(webPage).toBeInTheDocument()
    })
    it("renders a all movies link", () => {
        render(
            <BrowserRouter>
                <Header4 />
            </BrowserRouter>
        )
        const allMoviesLink = screen.getByRole('link', {
            name: /all movies/i
        })
        expect(allMoviesLink).toBeInTheDocument()
    })
    it("renders a greeting for current user", () => {
        render(
            <BrowserRouter>
                <Header4 />
            </BrowserRouter>
        )
        const userGreeting = screen.getByRole('heading', {
            name: /greetings, guest!/i,
            hidden: true
        })
        expect(userGreeting).toBeInTheDocument()
    })
})