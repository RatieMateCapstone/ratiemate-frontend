import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header1 from "../component/Header1"

describe("<Header1 />", () => {
    it("renders a web title", () => {
        render(
            <BrowserRouter>
                <Header1 />
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
                <Header1 />
            </BrowserRouter>
        )
        const navLink1 = screen.getByRole('link', {
            name: /all movies/i
          })
        const navLink2 = screen.getByRole('link', {
            name: /add movie/i
          })
        expect(navLink1).toBeInTheDocument()
        expect(navLink2).toBeInTheDocument()
    })
})