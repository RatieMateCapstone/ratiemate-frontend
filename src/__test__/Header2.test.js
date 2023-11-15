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
        const webTitle = screen.getByText(/ratie mate/i)
        expect(webTitle).toBeInTheDocument()
    })
    it("renders a generate movie link", () => {
        render(
            <BrowserRouter>
                <Header2 />
            </BrowserRouter>
        )
        const generateButton = screen.getByRole('link', {
            name: /generate movie/i
        })
        expect(generateButton).toBeInTheDocument()
    })
})