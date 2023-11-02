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

    const greeting = screen.getByRole("heading", {
      name: /Movie Matcher/i
    })

    expect(greeting).toBeInTheDocument()
  })
})