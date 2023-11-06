import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieIndex from "../pages/MovieIndex"
import mockMovies from "../mockMovies"
import mockUsers from "../mockUsers"

describe("<MovieIndex />", () => {
    it("renders a page title", () => {
        render(
            <BrowserRouter>
                <MovieIndex movies={mockMovies} currentUser={mockUsers}/>
            </BrowserRouter>
        )
        const pageTitle = screen.getByRole('heading', {
            name: /movies/i
          })
        expect(pageTitle).toBeInTheDocument()
    })
    it("renders a image", () => {
        const { container } = render(
            <BrowserRouter>
                <MovieIndex movies={mockMovies} currentUser={mockUsers}/>
            </BrowserRouter>
        )
        mockMovies.forEach((movies) => {
            const movieImage = container.querySelector('#card > img')
            expect(movieImage).toBeInTheDocument()
        })
    })
})