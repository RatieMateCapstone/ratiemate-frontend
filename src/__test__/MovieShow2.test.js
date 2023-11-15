import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import MovieShow2 from "../pages/MovieShow2"
import mockMovies from "../mockMovies"

describe("<MovieShow2 />", () => {
    it("renders a genre", () => {
        render(
            <MemoryRouter initialEntries={["/movieshow2/1"]}>
                <Routes>
                    <Route path="/movieshow2/:id" element={<MovieShow2 movies={mockMovies} />}/>
                </Routes>
            </MemoryRouter>
        ) 
        const movieGenre =screen.getByRole('heading', {
            name: /genre: action/i
        })
        expect(movieGenre).toBeInTheDocument()
    })
    it("renders a movie image", () => {
        render(
            <MemoryRouter initialEntries={["/movieshow2/1"]}>
                <Routes>
                    <Route path="/movieshow2/:id" element={<MovieShow2 movies={mockMovies} />}/>
                </Routes>
            </MemoryRouter>
        ) 
        const movieImg = screen.getByRole('img', {
            name: /visual for: born again the movie/i
        })
        expect(movieImg).toBeInTheDocument()
    })
})