import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { Rating} from "@mui/material";
import "../App.css"
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer"
import Sign from "../assets/cinemaSign.gif"

const MoviesProtectedIndex = ({ currentUser, movies, createMovie }) => {
    console.log("current user:", movies.user_id, currentUser.id);
    const currentMovies = movies.filter(movie => movie.user_id === currentUser.id) 
    

    return(
        <body id="movieIndex">
            <div className="signpages-container">
                <img src={Sign} alt="Movie Theater Sign" className="pagesigns"/>
                <h2 className="signtext">Your Movies</h2>
            </div>
            <main id="index-container">
                {currentMovies?.map((movie, index) => {
                    return(
                        <div key={index} className="card-container">
                        <Card style={{ width: '28rem' }} id="card">
                            <img alt={`visual for: ${movie.title} the movie`} src={`${movie.image}`}/>
                            <CardBody>
                                <CardTitle tag="h5" id="card-title">
                                    {movie.title}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                    Genre: {movie.genre}
                                </CardSubtitle>
                                <NavLink to={`${movie.trailer}`} target="_Blank">
                                    <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                        Trailer
                                    </CardSubtitle>
                                </NavLink>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                    Platform: {movie.platform}
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="rating">
                                    <div>
                                        Rating: 
                                        <br/>
                                        <Rating name="read-only" value={`${movie.rating}`} readOnly/>
                                    </div>
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="body">
                                    Description: {movie.description}
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="rating">
                                    <div>
                                        <button>  
                                            Edit Movie
                                        </button>
                                    </div>
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="rating">
                                    <div>
                                        <button>  
                                            Delete Movie
                                        </button>
                                    </div>
                                </CardSubtitle>
                               
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

export default MoviesProtectedIndex