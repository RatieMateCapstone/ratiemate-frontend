import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header3 from "../component/Header3"

describe("<Header3 />", () => {
    it("renders a greeting to user", () => {
        render(
            <BrowserRouter>
                <Header3 />
            </BrowserRouter>
        )
        const greetingsUser = screen.getByRole('heading', {
            name: /greetings, guest!/i,
            hidden: true
        })
        expect(greetingsUser).toBeInTheDocument()
    })
    it("renders website title", () => {
        render(
            <BrowserRouter>
                <Header3 />
            </BrowserRouter>
        )
        const webTitle = screen.getByText(/ratie mate/i)
        expect(webTitle).toBeInTheDocument()
    })
})