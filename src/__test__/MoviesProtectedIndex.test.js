import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProtectedIndex from "../pages/MoviesProtectedIndex"
import mockMovies from "../mockMovies"
import mockUsers from "../mockUsers"

describe("<ProtectedIndex />", () => {
    it("renders a page title", () => {
        render(
            <BrowserRouter>
                <ProtectedIndex movies={mockMovies} currentUser={mockUsers[1]}/>
            </BrowserRouter>
        )
        const pageTitle = screen.getByRole('heading', {
            name: /your movies/i
        })
        expect(pageTitle).toBeInTheDocument()
    })
    it("renders a edit button", () => {
        render(
            <BrowserRouter>
                <ProtectedIndex movies={mockMovies} currentUser={mockUsers[1]}/>
            </BrowserRouter>
        )
        const editButton = screen.getByRole('button', {
            name: /edit movie/i
        })
        expect(editButton).toBeInTheDocument()
    })
    it("renders a delete button", () => {
        render(
            <BrowserRouter>
                <ProtectedIndex movies={mockMovies} currentUser={mockUsers[1]}/>
            </BrowserRouter>
        )
        const deleteButton = screen.getByRole('button', {
            name: /delete movie/i
        })
        expect(deleteButton).toBeInTheDocument()
    })
})