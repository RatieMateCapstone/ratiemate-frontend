import React from "react";
import Footer from "../component/Footer"
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { SiYoutube, SiNetflix, SiHulu, SiHbo } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom";

const MovieShow = ({ movies }) => {
  const { id } = useParams()
  let currentMovie = movies?.find((movie) => movie.id === +id)

  const platform = currentMovie?.platform || "defaultPlatform";

  const iconMap = {
    "Youtube": SiYoutube,
    "Netflix": SiNetflix,
    "Hulu": SiHulu,
    "Hbo": SiHbo,
    "Disney+": TbBrandDisney,
  };

  const IconComponent = iconMap[platform] || PiTelevisionSimpleBold
  
  return(
    <body id="movieShow">
      <div>
      {currentMovie && (
        <div className="show-container">
            <h1 className="movie-title">{currentMovie.title}</h1>
            <div className="movie-attributes">
              <Rating name="read-only" id="show-rating" value={`${currentMovie.rating}`} readOnly />
              <div className="watch">
                <h6 className="watch">Platform:</h6>
                <IconComponent id="icon"/>
              </div>
            </div>       
            <Link to={`${currentMovie.trailer}`} target="_blank">
              <div className="example">
                  <img src={`${currentMovie.image}`} alt={`visual for: ${currentMovie.title} the movie`} id="show-image"/>
                  <div className="content">
                    <div className="text">Click here to watch trailer!</div>
                  </div>
              </div>
             </Link>
            <div>
              <div>
                <h6 className="movie-genre">Genre: {currentMovie.genre}</h6>
              </div>
              <p className="show-description">{currentMovie.description}</p>
            </div>
          </div>
      )}
      <Footer/>
      </div>
    </body>
  )
}

export default MovieShow