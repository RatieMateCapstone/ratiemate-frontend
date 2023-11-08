import React from "react";
import Header1 from "../component/Header1"
import Footer from "../component/Footer"
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound"
import { Rating } from "@mui/material";
import { SiYoutube, SiNetflix, SiHulu, SiHbo } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom";

const MovieShow = ({ movies, currentUser }) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)

  const iconMap = {
      "Youtube": SiYoutube,
      "Netflix": SiNetflix,
      "Hulu": SiHulu,
      "Hbo": SiHbo,
      "Disney+": TbBrandDisney
  };

  const IconComponent = iconMap[currentMovie.platform] || PiTelevisionSimpleBold
  
  return(
    <body id="movieShow">
      <Header1 />
      {currentMovie ? (
        <>
          <div className="show-container">
            <h1 className="movie-title">{currentMovie.title}</h1>
            <div className="movie-attributes">
              <Rating name="read-only" id="show-rating" value={`${currentMovie.rating}`} readOnly />
              <div className="watch">
                <h6 className="watch">Watch Trailer:</h6>
                <Link to={`${currentMovie.trailer}`} target="_blank">
                  <IconComponent id="icon"/>
                </Link>
              </div>
              <h3 className="show-user">Added by: {currentUser.username}</h3>
            </div>       
            <div>
              <img src={`${currentMovie.image}`} alt={`visual for: ${currentMovie.title} the movie`} id="show-image"/>
            </div>
            <div>
              <div>
                <h6 className="movie-genre">Genre: {currentMovie.genre}</h6>
              </div>
              <p className="show-description">{currentMovie.description}</p>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <Footer/>
    </body>
  )
}

export default MovieShow