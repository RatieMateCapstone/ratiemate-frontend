import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieNew from "../pages/MovieNew"

describe("<MovieIndex />", () => {
    it("renders add a movie test", () => {
        render(
            <BrowserRouter>
                <MovieNew />
            </BrowserRouter>
        )
        const movietext = screen.getByRole('heading', {
            name: /add a movie/i
        })
        expect(movietext).toBeInTheDocument()
    })
    it("renders movie title", () => {
        render(
            <BrowserRouter>
                <MovieNew />
            </BrowserRouter>
        )
        const movietitle = screen.getByText(/movie title:/i)
        expect(movietitle).toBeInTheDocument
    })
})