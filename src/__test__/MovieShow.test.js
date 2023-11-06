import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import MovieShow from "../pages/MovieShow"
import mockMovies from "../mockMovies"
import mockUsers from "../mockUsers"

describe("<MovieShow />", () => {
    it("renders a genre", () => {
        render(
            <MemoryRouter initialEntries={["/movieshow/1"]}>
                <Routes>
                    <Route path="/movieshow/:id" element={<MovieShow movies={mockMovies} currentUser={mockUsers}/>}/>
                </Routes>
            </MemoryRouter>
        )   
        const movieGenre = screen.getByText(/genre: action/i)
        expect(movieGenre).toBeInTheDocument()
    })
    it("renders a movie description", () => {
        render(
            <MemoryRouter initialEntries={["/movieshow/1"]}>
                <Routes>
                    <Route path="/movieshow/:id" element={<MovieShow movies={mockMovies} currentUser={mockUsers}/>}/>
                </Routes>
            </MemoryRouter>
        )   
        const movieDescription = screen.getByText(
            /ex marine who turned his life to the lord has now been called back into action/i
        )
        expect(movieDescription).toBeInTheDocument()
    })
})