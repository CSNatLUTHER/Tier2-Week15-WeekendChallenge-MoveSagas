import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'
import {Link} from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const activeMovie = useSelector(store => store.activeMovie);
    const genres = useSelector(store => store.genres);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: activeMovie.id });
    }, []);


    return (
        <main>
            <h1>Movie Details</h1>
            <section className="movieDetail">
                <div key={activeMovie.id} >
                    <h2>{activeMovie.title}</h2>
                    <h2>Genres:</h2>
                        {genres.map(genre => {
                        return (
                            <div>
                                <h5>{genre.name}</h5>
                            </div>
                        )})};
                    <img src={activeMovie.poster} alt={activeMovie.title}/>
                    <p className="movieDescription">{activeMovie.description}</p>
                    <Link to="/">
                        <button>Return To Movie List</button>
                    </Link>
                </div>
            </section>
        </main>

    );
}

export default MovieList;