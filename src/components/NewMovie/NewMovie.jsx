import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NewMovie.css'
import {Link} from 'react-router-dom'


function NewMovie() {

    const dispatch = useDispatch();
    

    const [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre: ''});

    const handleTitleChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, title: event.target.value })
    }

    const handlePosterChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, poster: event.target.value })
    }
    
    const handleDescriptionChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, description: event.target.value })
    }

    const handleGenreChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setNewMovie({ ...newMovie, genre: event.target.value })
    }
    const addNewMovie = () => {
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        //updates the next plant to have a new id
        setNewMovie({ title: '', poster: '', description: '', genre: '' });
    }

    return (
        <div>
            <h3>Add A New Movie:</h3>
            <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
                <p>Title:</p><input type='text' placeholder="title" value={newMovie.title} onChange={handleTitleChange} />
                <br />
                <p>Poster:</p><input type='text' placeholder="location" value={newMovie.poster} onChange={handlePosterChange} />
                <br />
                <p>Description:</p><input type='textarea' placeholder="description" value={newMovie.description} onChange={handleDescriptionChange} />
                <br />
                <p>Genre:</p><select id="genreSelect" onChange={ handleGenreChange }>
                    <option hidden >Select an Genre </option>
                    <option value={1}>Adventure</option>
                    <option value={2}>Animated</option>
                    <option value={3}>Biographical</option>
                    <option value={4}>Comedy</option>
                    <option value={5}>Disaster</option>
                    <option value={6}>Drama</option>
                    <option value={7}>Epic</option>
                    <option value={8}>Fantasy</option>
                    <option value={9}>Musical</option>
                    <option value={10}>Romantic</option>
                    <option value={11}>Science Fiction</option>
                    <option value={12}>Space-Opera</option>
                    <option value={13}>Super Hero</option>
                </select>
                <br />
                <br />
                <Link to="/">
                        <button>Cancel</button>
                </Link>
                <Link to="/">
                        <button onClick={addNewMovie}>Submit</button>
                </Link>
            </form>
        </div>
    );
}

export default NewMovie;