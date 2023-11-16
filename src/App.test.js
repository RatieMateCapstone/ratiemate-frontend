import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders a web title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

 
    const greetings = screen.getAllByText(/Ratie Mate/i);
    expect(greetings.length).toBeGreaterThan(0);

  })
  it("renders a image of a ticket booth", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const ticketBooth = screen.getByRole('img', {
      name: /ticket booth/i
    })
    expect(ticketBooth).toBeInTheDocument()
  })
  it("renders a sign up button", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const signupButton = screen.getByRole('button', {
      name: /sign up/i
    })
    expect(signupButton).toBeTruthy()
  })
})