import React from "react";
import Header2 from "../component/Header2"
import Footer from "../component/Footer"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { Rating} from "@mui/material";
import "../App.css"
import { Link } from "react-router-dom";

const MovieIndex = ({ movies, currentUser }) => {
    return(
        <>
            <Header2 />
            <h1> Movie Index Page</h1>
            <Footer/>
            <h1>Movies</h1>
            <main id="index-container">
                {movies?.map((movie, index) => {
                    return(
                    <div key={index}>
                        <Card style={{ width: '18rem' }} id="card">
                            <img alt={`movie picture for ${movie.name}`} src={`${movie.image}`}/>
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
                                    <Link to="/movieshow">
                                        <div id="show-button">
                                            <Button>
                                                View Movie
                                            </Button>
                                        </div>
                                    </Link>
                                </CardBody>
                        </Card>
                    </div>
                )
                })}
            </main>
        </>
    )
}

export default MovieIndex