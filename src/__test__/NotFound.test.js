import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders an image on the page", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
       const notfoundImage = screen.getByRole('img', {
            name: /404 image/i
        })
        expect(notfoundImage).toBeInTheDocument()
    })
    it("renders a footer", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const notFoundFooter = screen.getByText(/ratie mate © ilene, roniel, adrian, and tori/i)
        expect(notFoundFooter).toBeInTheDocument()
    })
})