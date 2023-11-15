import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MovieEdit from "../pages/MovieEdit"

describe("<MovieEdit />", () => {
    it("renders a editing prompt", () => {
        render(
            <BrowserRouter>
                <MovieEdit />
            </BrowserRouter>
        )
        const formPropmt = screen.getByRole('heading', {
            name: /editing:/i
        })
        expect(formPropmt).toBeInTheDocument()
    })
    it("renders a input box", () => {
        render(
            <BrowserRouter>
                <MovieEdit />
            </BrowserRouter>
        )
        const inputBox = screen.getByRole('textbox', {
            name: /title/i
        })
        expect(inputBox).toBeInTheDocument()
    })
})