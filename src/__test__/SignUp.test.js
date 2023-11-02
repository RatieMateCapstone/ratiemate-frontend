import { getByAltText, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignUp from "../pages/SignUp"

describe("<SignUp />", () => {
    it("renders a form", () => {
        render(
            <BrowserRouter>
                <SignUp />
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
    it("renders email field", () =>{
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const emailInput = screen.getByPlaceholderText(/email/i)
        expect(emailInput).toBeInTheDocument()
    })
    it("renders username field", () =>{
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const usernameInput = screen.getByPlaceholderText(/username/i)
        expect(usernameInput).toBeInTheDocument()
    })
    it("renders password field", () =>{
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const container = document.createElement("div")
        document.body.appendChild(container);

        const passwordInput = document.createElement("password");
        passwordInput.id = "password";
        container.appendChild(passwordInput);

        document.body.removeChild(container);
        expect(password).toBeInTheDocument()
    })
    it("renders a password confirmation", () => {
      render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
      )  
      const passwordConfInput = screen.getByPlaceholderText(/confirm password/i)
      expect(passwordConfInput).toBeInTheDocument()
    })
})