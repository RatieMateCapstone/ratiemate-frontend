import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header3 from "../component/Header3"

describe("<Header3 />", () => {
    it("renders a web title", () => {
        render(
            <BrowserRouter>
                <Header3 />
            </BrowserRouter>
        )
        const webTitle = screen.getByRole('link', {
            name: /ratie mate/i
          })
        expect(webTitle).toBeInTheDocument()
    })
    it("renders navigating links ", () => {
        render(
            <BrowserRouter>
                <Header3 />
            </BrowserRouter>
        )
        const navLink = screen.getByRole('link', {
            name: /all movies/i
          })
        expect(navLink).toBeInTheDocument()
    })
})