import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header2 from "../component/Header2"

describe("<Header2 />", () => {
    it("renders a web title", () => {
        render(
            <BrowserRouter>
                <Header2 />
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
                <Header2 />
            </BrowserRouter>
        )
        const navLink = screen.getByRole('link', {
            name: /add movie/i
          })
        expect(navLink).toBeInTheDocument()
    })
})