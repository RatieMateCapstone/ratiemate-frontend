import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { Rating} from "@mui/material";
import "../App.css"
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer"
import Sign from "../assets/cinemaSign.gif"

const MovieIndex = ({ movies }) => {
    return(
        <body id="movieIndex">
            <div className="signpages-container">
                <img src={Sign} alt="Movie Theater Sign" className="pagesigns"/>
                <h2 className="signtext">Movies</h2>
            </div>
            <main id="index-container">
                {movies?.map((movie, index) => {
                    return(
                        <div key={index} className="card-container">
                        <Card style={{ width: '18rem' }} id="card">
                            <img alt={`visual for: ${movie.title} the movie`} src={`${movie.image}`}/>
                            <CardBody>
                                <CardTitle tag="h5" id="card-title">
                                    {movie.title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                    Genre: {movie.genre}
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="rating">
                                    <div>
                                        Rating: 
                                        <br/>
                                        <Rating name="read-only" value={`${movie.rating}`} readOnly/>
                                    </div>
                                </CardSubtitle>
                                <div className="button-container">
                                    <Button id="show-button">
                                        <NavLink to={`/movieshow/${movie.id}`} className="show-link">
                                            View Movie
                                        </NavLink>
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                        </div>
                    )
                })}
            </main>
            <Footer/>
        </body>
    )
}

export default MovieIndex