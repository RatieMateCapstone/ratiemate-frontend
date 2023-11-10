import React, { useState } from "react";
import Footer from "../component/Footer"
import { FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";


const MovieNew = ({ createMovie, currentUser }) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        genre: "",
        image: "",
        trailer: "",
        rating: "",
        description: "",
        platform: "",
        user_id: currentUser?.id
    })
    console.log("newPageCurrentUser", currentUser)
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    }    
    console.log("newMovie", newMovie)

    const handleSubmit = () => {
        createMovie(newMovie)
        navigate("/movieindex")
    }

    return(
        <body id="movieNew">
            <div id="new-container">
                <form id="formNew">
                    <h1>Add a Movie</h1>
                    <FormGroup>
                        <Label for="title">
                            Movie Title:
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            type="string"
                            onChange={handleChange}
                            value={newMovie.title}
                            placeholder="Title"
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="genre">
                            Genre:
                        </Label>
                        <Input
                            id="genre"
                            name="genre"
                            type="string"
                            onChange={handleChange}
                            value={newMovie.genre}
                            placeholder="Genre"
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="image">
                            Image:
                        </Label>
                        <Input
                            id="image"
                            name="image"
                            type="text"
                            onChange={handleChange}
                            value={newMovie.image}
                            placeholder="Image Link"
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="trailer">
                            Trailer:
                        </Label>
                        <Input
                            id="trailer"
                            name="trailer"
                            type="text"
                            onChange={handleChange}
                            value={newMovie.trailer}
                            placeholder="Trailer Link"
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="rating">
                            Rating:
                        </Label>
                        <Input
                            name="rating"
                            type="integer"
                            onChange={handleChange}
                            value={newMovie.rating}
                            placeholder="Number Rating (1-5)"
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="description">
                            Movie Description:
                        </Label>
                        <Input
                            id="description"
                            name="description"
                            type="text"
                            onChange={handleChange}
                            value={newMovie.description}
                            placeholder="Description"
                            />
                    </FormGroup>
                        {' '}
                        <FormGroup>
                        <Label for="platform">
                            Streaming Platform:
                        </Label>
                        <Input
                            id="platform"
                            name="platform"
                            type="string"
                            onChange={handleChange}
                            value={newMovie.platform}
                            placeholder="(Ex: 'Youtube', 'Netflix', etc)"
                            />
                    </FormGroup>
                    <button onClick={handleSubmit} name = "submit">
                        Submit
                    </button>
                </form>
            </div>
            <Footer/>
        </body>
    )
}

export default MovieNew