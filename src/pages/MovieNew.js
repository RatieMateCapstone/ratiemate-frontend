import React, { useState } from "react";
import Header3 from "../component/Header3"
import Footer from "../component/Footer"
import { FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const MovieNew = ({ createMovie }) => {
    const navigate = useNavigate()
    const [newMovie, setNewMovie] = useState({
        title: "",
        genre: "",
        image: "",
        trailer: "",
        rating: "",
        description: "",
        platform: ""
    })
    
    const handleChange = (e) => {
        setNewMovie({...newMovie, [e.target.name]: e.target.value})
    }    

    const handleSubmit = () => {
        createMovie(newMovie)
        navigate("/movieindex")
    }

    return(
        <body id="movieNew">
            <Header3 />
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
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="trailer">
                            Trailer Link:
                        </Label>
                        <Input
                            id="trailer"
                            name="trailer"
                            type="text"
                            onChange={handleChange}
                            value={newMovie.trailer}
                            />
                    </FormGroup>
                        {' '}
                    <FormGroup>
                        <Label for="rating">
                            Rating:
                        </Label>
                        <Input
                            id="rating"
                            name="rating"
                            type="integer"
                            onChange={handleChange}
                            value={newMovie.rating}
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
                            />
                    </FormGroup>
                    <input type='submit' value="Submit" onClick={handleSubmit}/>
                </form>
                <div id="movieNewButton">
                    <Link to="/movieindex">
                        <button id="gobackbutton">
                            Go Back 
                        </button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </body>
    )
}

export default MovieNew