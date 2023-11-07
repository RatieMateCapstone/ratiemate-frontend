import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from "../pages/AboutUs"

describe("<AboutUs />", () => {
    it("renders an about us title page", () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
        const aboutusTitle = screen.getByRole('heading', {
            name: /about us/i
          })
        expect(aboutusTitle).toBeInTheDocument()
    })
    it("renders image of one full stack developer", () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
        const developerImg = screen.getByRole('img', {
            name: /tori calkins/i
        })
        expect(developerImg).toBeInTheDocument()
    })
    it("renders description of full stack developer", () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
        const developerDesc = screen.getByText(
            /hello! i'm tori calkins from san diego, california\. i am a former customer service worker going into full\-stack web development\. when i'm not coding, i enjoy going country dancing, binge watching movies, and spending time with my family and friends\. always remember slay the day away\./i
        )
        expect(developerDesc).toBeInTheDocument()
    })
})