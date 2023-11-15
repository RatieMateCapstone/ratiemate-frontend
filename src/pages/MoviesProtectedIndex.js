import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Rating} from "@mui/material";
import "../App.css"
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer"
import Sign from "../assets/cinemaSign.gif"

const MoviesProtectedIndex = ({ currentUser, movies, createMovie, deleteMovie, handleMovieDeletion }) => {
    console.log("current user:", movies.user_id, currentUser.id);
    if (!movies || !currentUser) {
        console.error('Movies or currentUser is undefined.');
        return <div>Loading...</div>;
    }
    if (!Array.isArray(movies)) {
        console.error('Expected movies to be an array but got:', typeof movies);
        return <div>Error: Movies data is invalid.</div>;
    }
    const currentMovies = movies.filter(movie => movie.user_id === currentUser.id) 
    const handleDelete = async (movieId, event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to delete this movie?")) {
          try {
            await deleteMovie(movieId);
            handleMovieDeletion(movieId);
          } catch (error) {
            console.error('Error deleting the movie:', error);
          }
        }
      };

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
                                    <NavLink to={`/movieedit/${movie.id}`}>    
                                        <div>
                                            <button className="editdelete-button">  
                                                Edit Movie
                                            </button>
                                        </div>
                                    </NavLink>
                                </CardSubtitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6" id="rating">
                                    <div>
                                        <NavLink to="" onClick={(e) => handleDelete(movie.id, e)}>
                                            <button className="editdelete-button">
                                                Delete Movie
                                            </button>
                                        </NavLink>
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