import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "../component/Footer";

const MovieEdit = ({ updateMovie, movies }) => {
  const { id } = useParams();
  let currentMovie = movies?.find((movie) => movie.id === +id);
  const [editMovie, setEditMovie] = useState({
    title: currentMovie?.title || "",
    image: currentMovie?.image || "",
    trailer: currentMovie?.trailer || "",
    rating: currentMovie?.rating || "",
    description: currentMovie?.description || "",
    platform: currentMovie?.platform || "",
    genre: currentMovie?.genre || "",
  });
  const handleChange = (e) => {
    setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault()
    updateMovie(editMovie, id);
    navigate("/movieindex");
  };

  return (
    <body id="edit">
      <div id="new-container">
        <form onSubmit={handleUpdate} id="formEdit">
          <FormGroup>
            <h2>Editing: {editMovie.title}</h2>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              value={editMovie.title}
              />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="text"
              onChange={handleChange}
              value={editMovie.image}
              />
          </FormGroup>
          <FormGroup>
            <Label for="trailer">Trailer</Label>
            <Input
              id="trailer"
              name="trailer"
              type="text"
              onChange={handleChange}
              value={editMovie.trailer}
              />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input
              id="ratingedit"
              name="rating"
              type="text"
              onChange={handleChange}
              value={editMovie.rating}
              />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              value={editMovie.description}
              />
          </FormGroup>
          <FormGroup>
            <Label for="platform">Platform</Label>
            <Input
              id="platform"
              name="platform"
              type="text"
              onChange={handleChange}
              value={editMovie.platform}
              />
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <Input
              id="genre"
              name="genre"
              type="text"
              onChange={handleChange}
              value={editMovie.genre}
              />
          </FormGroup>
            <button name="update" type="submit">
              Update
            </button>  
        </form>
      </div>
      <Footer />
    </body>
  );
};
export default MovieEdit;