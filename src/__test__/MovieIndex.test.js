import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieIndex from "../pages/MovieIndex"
import mockMovies from "../mockMovies"
import mockUsers from "../mockUsers"

describe("<MovieIndex />", () => {
    it("renders a movie title", () => {
        render(
            <BrowserRouter>
                <MovieIndex movies={mockMovies} currentUser={mockUsers}/>
            </BrowserRouter>
        )
        const movieName = screen.getByRole('heading', {
            name: /born again/i
          })
        expect(movieName).toBeInTheDocument()
    })
})