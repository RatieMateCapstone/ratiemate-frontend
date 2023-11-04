import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieShow from "../pages/MovieShow"
import mockMovies from "../mockMovies"
import mockUsers from "../mockUsers"

describe("<MovieShow />", () => {
    it("renders a genre", () => {
        render(
            <BrowserRouter>
                <MovieShow movies={mockMovies} currentUser={mockUsers}/>
            </BrowserRouter>
        )   
        screen.debug()
        screen.logTestingPlaygroundURL()
    })
})