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
      <>
        <Header1 />
          {currentMovie ? (
            <>
              <div className="show-container">
                <h1 className="movie-title">{currentMovie.title}</h1>
              <div className="movie-attributes">
                <Rating name="read-only" id="show-rating" value={`${currentMovie.rating}`} readOnly />
                <Link to={`${currentMovie.trailer}`}>
                  <IconComponent id="icon"/>
                </Link>
                <h4 className="show-user">Created by: {currentUser.username}</h4>
              </div>       
              <div>
                <img src={`${currentMovie.image}`} alt={`visual for: ${currentMovie.title} the movie`} id="show-image"/>
              </div>
              <div>
                <p>Genre: {currentMovie.genre}</p>
                <p className="show-description">{currentMovie.description}</p>
              </div>
              </div>
            </>
          ) : (
            <NotFound />
          )}
        <Footer/>
        </>
    )
}

export default MovieShow