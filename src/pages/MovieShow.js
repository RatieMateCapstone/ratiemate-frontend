import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header1 from "../component/Header1";
import Footer from "../component/Footer";
import { Rating } from "@mui/material";

const MovieShow = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1600c73204a0404cf577c28950386edc`);
        if (!detailsResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const movieDetails = await detailsResponse.json();
        setMovie(movieDetails);

        const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1600c73204a0404cf577c28950386edc`);
        if (!videosResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const videosData = await videosResponse.json();
        const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return (
      <div>
        Movie not found. Go back to <Link to="/home">Home</Link>.
      </div>
    );
  }

  return (
    <>
      
      <div id="movieShow">
        <div className="show-container">
          <h1 className="movie-title">{movie.title}</h1>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cover for: ${movie.title}`} className="movie-image" />
          )}
          <div className="movie-details">
            <Rating name="read-only" value={movie.vote_average / 2} readOnly />
            <p className="movie-genre">Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
            <p className="movie-description">{movie.overview}</p>
            {trailerUrl && (
              <div className="trailer-container">
                <h2>Trailer</h2>
                <iframe
                  width="560"
                  height="315"
                  src={trailerUrl}
                  title="Movie Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MovieShow;














// import React from "react";
// import Footer from "../component/Footer"
// import { useParams } from "react-router-dom";
// import { Rating } from "@mui/material";
// import { SiYoutube, SiNetflix, SiHulu, SiHbo } from "react-icons/si";
// import { TbBrandDisney } from "react-icons/tb";
// import { PiTelevisionSimpleBold } from "react-icons/pi"
// import { Link } from "react-router-dom";

// const MovieShow = ({ movies }) => {
//   const { id } = useParams()
//   let currentMovie = movies?.find((movie) => movie.id === +id)

//   const platform = currentMovie?.platform || "defaultPlatform";

//   const iconMap = {
//     "Youtube": SiYoutube,
//     "Netflix": SiNetflix,
//     "Hulu": SiHulu,
//     "Hbo": SiHbo,
//     "Disney+": TbBrandDisney,
//   };

//   const IconComponent = iconMap[platform] || PiTelevisionSimpleBold
  
//   return(
//     <body id="movieShow">
//       <div>
//       {currentMovie && (
//         <div className="show-container">
//             <h1 className="movie-title">{currentMovie.title}</h1>
//             <div className="movie-attributes">
//               <Rating name="read-only" id="show-rating" value={`${currentMovie.rating}`} readOnly />
//               <div className="watch">
//                 <h6 className="watch">Platform:</h6>
//                 <IconComponent id="icon"/>
//               </div>
//             </div>       
//             <Link to={`${currentMovie.trailer}`} target="_blank">
//               <div className="example">
//                   <img src={`${currentMovie.image}`} alt={`visual for: ${currentMovie.title} the movie`} id="show-image"/>
//                   <div className="content">
//                     <div className="text">Click here to watch trailer!</div>
//                   </div>
//               </div>
//              </Link>
//             <div>
//               <div>
//                 <h6 className="movie-genre">Genre: {currentMovie.genre}</h6>
//               </div>
//               <p className="show-description">{currentMovie.description}</p>
//             </div>
//           </div>
//       )}
//       <Footer/>
//       </div>
//     </body>
//   )
// }

// export default MovieShow