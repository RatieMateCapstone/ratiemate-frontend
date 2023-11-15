import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders a web page prompt", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const pagePropmt = screen.getByRole('heading', {
            name: /search for a movie!/i
        })
        expect(pagePropmt).toBeInTheDocument()
    })
    it("renders a search bar", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const search = screen.getByRole('textbox')
        expect(search).toBeInTheDocument()
    })
})