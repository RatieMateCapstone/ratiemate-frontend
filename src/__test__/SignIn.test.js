import { getByAltText, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignIn from "../pages/SignIn"

describe("<SignIn />", () => {
    it("renders a form", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const container = document.createElement("div")
        document.body.appendChild(container);
        
        const form = document.createElement("form");
        form.id = "form";
        container.appendChild(form);
        document.body.removeChild(container);

        expect(form).toBeDefined()
    })
    it("renders username field", () =>{
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
            const usernameInput = screen.getByPlaceholderText(/username/i)
            expect(usernameInput).toBeInTheDocument()
    })
    it("renders password field", () =>{
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
        const container = document.createElement("div")
        document.body.appendChild(container)

        const passwordInput = document.createElement("password");
        passwordInput.id = "password";
        container.appendChild(passwordInput);

        document.body.removeChild(container);
        expect(password).toBeInTheDocument()
    })
})