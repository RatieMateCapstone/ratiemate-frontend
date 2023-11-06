import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from "../component/Footer"


describe("<Footer />", () => {
    it("renders names of employees", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const names = screen.getByText(/ratie mate © ilene, roniel, adrian, and tori/i)
        expect(names).toBeInTheDocument()
    })
    it("renders a navigation link", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const aboutUsLink = screen.getByRole('link', {
            name: /about us/i
        }) 
        expect(aboutUsLink).toBeInTheDocument()

    })
})