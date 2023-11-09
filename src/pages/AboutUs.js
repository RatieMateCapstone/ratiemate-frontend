import React from "react";
import Header1 from "../component/Header1"
import Footer from "../component/Footer"
import MovieFilm from "../assets/moviefilm.png"
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap"
import Tori from "../assets/tori.jpg"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import Adrian from "../assets/Adrian.jpeg"
import RTO from "../assets/RTO.jpg"
import Ilene from "../assets/Ilene.jpg"
import Sign from "../assets/cinemaSign.gif"

const AboutUs = () => {
    return(
        <body id="aboutUs">
            <div className="signpages-container">
                <img src={Sign} alt="Movie Theater Sign" className="pagesigns"/>
                <h2 className="signtext">About Us</h2>
            </div>
            <div className="film-container">
                <div className="col1">
                    <div className="film1-image">
                        <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                        <div className="container1">
                            <Card style={{ width: '18rem'}} id="tori-card">
                                <img alt="Tori Calkins" src={Tori} className="tori-image"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Tori Calkins
                                        <NavLink to="https://www.linkedin.com/in/victoria-calkins-/" target="_blank" rel="noopener noreferrer">
                                            <AiFillLinkedin className="linkedin"/>
                                        </NavLink>
                                        <NavLink to="https://github.com/tori-calkins" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub className="github"/>
                                        </NavLink>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Project Manager
                                    </CardSubtitle>
                                    <CardText id="text">
                                        Hello! I'm Tori Calkins from San Diego, California. I am a former customer service worker going into full-stack web development. When I'm not coding, I enjoy going country dancing, binge watching movies, and spending time with my family and friends. Always remember slay the day away.
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem'}} id="adrian-card">
                                <img alt="Adrian Ramirez" src={Adrian} className="adrian-image"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Adrian Ramirez
                                        <NavLink to="https://www.linkedin.com/in/adrian-ramirez-9170a0238/" target="_blank" rel="noopener noreferrer">
                                            <AiFillLinkedin className="linkedin"/>
                                        </NavLink>
                                        <NavLink to="https://github.com/AdrianRamirez7" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub className="github"/>
                                        </NavLink>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Tech Lead
                                    </CardSubtitle>
                                    <CardText id="text">
                                        Hello, My name is Adrian and I am a full-stack developer with a journey that began as a pre-loader and evolved into a full stack web developer. Based in sunny San Diego, California, I'm passionate about creating innovative digital experiences. In my free time, I enjoy snowboarding and hanging out with friends and family.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                    </div>
                </div>
                <div className="col1">
                    <div className="film1-image">
                        <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                        <div className="container1">
                            <Card style={{ width: '18rem'}} id="roniel-card">
                                <img alt="Roniel Overton" src={RTO} className="roniel-image"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Roniel Overton
                                        <NavLink to="https://www.linkedin.com/in/roniel-overton/" target="_blank" rel="noopener noreferrer">
                                            <AiFillLinkedin className="linkedin"/>
                                        </NavLink>
                                        <NavLink to="https://github.com/RonielOverton" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub className="github"/>
                                        </NavLink>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Product Manager
                                    </CardSubtitle>
                                    <CardText id="text">
                                        Hello my name is Roniel Overton, I’m a musician and music producer from Oakland California. I previous worked in the wine and seafood industry but now I’m making some major career changes and now working to become a junior web developer.
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card style={{ width: '18rem'}} id="ilene-card">
                                <img alt="Ilene Varela-Zul" src={Ilene} className="ilene-image"/>
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Ilene Varela-Zul
                                        <NavLink to="https://www.linkedin.com/in/varelazi/" target="_blank" rel="noopener noreferrer">
                                            <AiFillLinkedin className="linkedin"/>
                                        </NavLink>
                                        <NavLink to="https://github.com/Varelazi" target="_blank" rel="noopener noreferrer">
                                            <AiFillGithub className="github"/>
                                        </NavLink>
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        Design Lead
                                    </CardSubtitle>
                                    <CardText id="text">
                                        Hello my name is Ilene Varela-Zul. I'm based in Riverside, CA. I am an aspiring software and video game developer. During my free time, I spend my time playing video games or watching anime. 
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    <img src={MovieFilm} alt="Movie film" className="movie-film"/>
                    </div>
                </div> 
            </div>
            <Footer/>
        </body>
    )
}

export default AboutUs