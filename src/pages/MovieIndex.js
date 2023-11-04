import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { Rating} from "@mui/material";
import "../App.css"
import { NavLink } from "react-router-dom";
import Header2 from "../component/Header2"
import Footer from "../component/Footer"

const MovieIndex = ({ movies, currentUser }) => {
    return(
        <>
            <Header2 />
            <h1>Movies</h1>
            <main id="index-container">
                {movies?.map((movie, index) => {
                    return(
                        <div key={index}>
                        <Card style={{ width: '18rem' }} id="card">
                            <img alt={`visual for: ${movie.title} the movie`} src={`${movie.image}`}/>
                                <CardBody>
                                    <CardTitle tag="h5" id="card-title">
                                        {movie.title}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                        Created By: {currentUser.username}
                                    </CardSubtitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6"
                                    id="body">
                                        Genre: {movie.genre}
                                    </CardSubtitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6"
                                    id="rating">
                                        <div>
                                            {currentUser.username}'s rating: 
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
        </>
    )
}

export default MovieIndex